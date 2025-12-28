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
    fill-rule="evenodd"
    d="M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2 2 2 0 0 0 2 2h12a2 2 0 0 0 2-2 2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2V4a2 2 0 0 0-2-2h-7Zm-6 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h.5a2.5 2.5 0 0 0 0-5H5Zm1.5 3H6v-1h.5a.5.5 0 0 1 0 1Zm4.5-3a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h.5a2.5 2.5 0 0 0 0-5H11Zm1.5 3H12v-1h.5a.5.5 0 0 1 0 1Zm4.5-3a1 1 0 1 0 0 2v4a1 1 0 1 0 2 0v-4a1 1 0 1 0 0-2h-2Z"
    clip-rule="evenodd"
  />
</svg>
