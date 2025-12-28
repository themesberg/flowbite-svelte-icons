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
    stroke-width={strokeWidth}
    d="M9 7H7m2 3H7m2 3H7m4 2v2m3-2v2m3-2v2M4 5v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-9a1 1 0 0 1-1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1Z"
  />
</svg>
