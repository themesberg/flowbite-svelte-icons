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
    fill-rule="evenodd"
    d="M8.05005 2c-.55229 0-1 .44772-1 1s.44771 1 1 1h1v3.31532c-2.69858 1.16334-5 3.63038-5 6.88468 0 4.3349 3.60924 7.8 7.99995 7.8 4.3908 0 8-3.4651 8-7.8 0-3.2543-2.3014-5.72134-5-6.88468V4h1c.5523 0 1-.44772 1-1s-.4477-1-1-1H8.05005ZM11.05 8V4h2v4c0 .42712.2713.8071.6753.9458 2.3906.82083 4.2201 2.7442 4.3204 5.0542H6.05438c.10031-2.31 1.92977-4.23337 4.32042-5.0542.404-.1387.6752-.51868.6752-.9458Z"
    clip-rule="evenodd"
  />
</svg>
