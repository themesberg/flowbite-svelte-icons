<script lang="ts">
  import { getContext } from 'svelte';
  import { cn } from './helpers';
  import type { OutlineBaseProps, OutlineProps, Size } from './types';

  const ctx: OutlineBaseProps = getContext('iconCtx') ?? {};
  const sizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8'
  };

  let {
    size,
    width,
    height,
    color = ctx.color || 'currentColor',
    title,
    strokeWidth = ctx.strokeWidth || 2,
    desc,
    class: className,
    ariaLabel,
    ...restProps
  }: OutlineProps = $props();

  // Type-safe size determination
  const effectiveSize: Size = $derived(
    width === undefined && height === undefined
      ? (size ?? (ctx.size as Size | undefined) ?? 'md')
      : 'md' // fallback, won't be used if width/height are set
  );

  // Only use size classes when width/height are not provided
  const sizeClass = $derived(
    width === undefined && height === undefined ? sizes[effectiveSize] : undefined
  );

  const ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
  const hasDescription = $derived(!!(title?.id || desc?.id));
  const isLabeled = $derived(!!ariaLabel || hasDescription);
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  {color}
  {width}
  {height}
  {...restProps}
  class={cn('shrink-0', sizeClass, className)}
  viewBox="0 0 24 24"
  aria-label={ariaLabel}
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
  aria-hidden={!isLabeled}
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    stroke-width={strokeWidth}
    d="M7.42584 18.2443c1.3169-2.2023 2.5334-1.5242 3.85026-3.7265 1.3169-2.2023.1004-2.8805 1.4173-5.08281 1.3169-2.20233 2.5335-1.52419 3.8504-3.72652M10.8472 20.1517c1.3169-2.2024 2.5334-1.5242 3.8503-3.7266 1.3169-2.2023.1004-2.8804 1.4173-5.0828 1.3169-2.20228 2.5334-1.52414 3.8503-3.72647l-6.8428-3.81455C11.8054 6.00361 10.5889 5.32547 9.272 7.5278s-.1004 2.8805-1.4173 5.0828c-1.3169 2.2023-2.5334 1.5242-3.85031 3.7265l6.84281 3.8146Z"
  />
</svg>
