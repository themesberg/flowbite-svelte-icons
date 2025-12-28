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
  role={isLabeled ? 'img' : undefined}
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
    d="m7.35709 11 5.00001-6 3.3333 4m-8.33331 2h-3v8h7.00001m-4.00001-8H3.3571l3-4h4.3374l-3.33741 4Zm8.33131-2-1.6687-2h4.3374l1.5 2m-8.3237 5.8976c-1.0239-.4146-1.5178-1.5806-1.1032-2.6044.4146-1.0239 1.5806-1.5178 2.6044-1.1032M16.3571 15v-2.5c0-.8284.6716-1.5 1.5-1.5s1.5.6716 1.5 1.5V15m-4 0h5c.5523 0 1 .4477 1 1v2c0 .5523-.4477 1-1 1h-5c-.5523 0-1-.4477-1-1v-2c0-.5523.4477-1 1-1Z"
  />
</svg>
