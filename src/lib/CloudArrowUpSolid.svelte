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
    d="M13.383 4.076a6.5 6.5 0 0 0-6.887 3.95A5 5 0 0 0 7 18h3v-4a2 2 0 0 1-1.414-3.414l2-2a2 2 0 0 1 2.828 0l2 2A2 2 0 0 1 14 14v4h4a4 4 0 0 0 .988-7.876 6.5 6.5 0 0 0-5.605-6.048Z"
  />
  <path
    d="M12.707 9.293a1 1 0 0 0-1.414 0l-2 2a1 1 0 1 0 1.414 1.414l.293-.293V19a1 1 0 1 0 2 0v-6.586l.293.293a1 1 0 0 0 1.414-1.414l-2-2Z"
  />
</svg>
