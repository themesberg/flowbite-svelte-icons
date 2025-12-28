<script lang="ts">
  import { getContext } from 'svelte';
  import { cn } from './helpers';
  import type { BaseProps, Props, Size } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};
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
    desc,
    class: className,
    ariaLabel,
    ...restProps
  }: Props = $props();

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
  fill={color}
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
    fill="currentColor"
    d="M4.13982 11.889c-1.40388 1.4039-1.40388 3.5869 0 4.9907.52114.5212 1.22247.8909 1.9657 1.0148.12387.7432.49363 1.4446 1.01476 1.9657 1.40388 1.4039 3.58692 1.4039 4.99072 0 1.1572-1.1571 1.3605-2.8435.6102-4.1867l2.9523-2.9523c1.3432.7503 3.0296.5469 4.1867-.6102 1.4039-1.4039 1.4039-3.58687 0-4.99075-.5211-.52113-1.2224-.89089-1.9657-1.01476-.1238-.74323-.4936-1.44456-1.0147-1.9657-1.4039-1.40388-3.5869-1.40388-4.9908 0-1.1571 1.15712-1.3605 2.84353-.6102 4.18672L8.32654 11.2788c-1.34319-.7503-3.0296-.5469-4.18672.6102Z"
  />
</svg>
