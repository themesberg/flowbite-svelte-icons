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
    d="M17 5v3m0 0v3m0-3h-3m3 0h3m-3.3556 7.0913c-1.6389 0-2.58-.2487-3.7085-.9576-1.1285-.709-2.0191-1.7196-2.5631-2.9086-.54402-1.1891-.71806-2.50523-.5009-3.78809.2172-1.28287.8161-2.47705 1.724-3.43701-1.3427.20491-2.60689.74436-3.66765 1.56511-1.06077.82074-1.88149 1.8944-2.38113 3.11496-.49965 1.22056-.66094 2.54583-.46795 3.84493.19298 1.2992.73357 2.5273 1.56839 3.563.83482 1.0358 1.93501 1.8435 3.19194 2.3433 1.2569.4999 2.6272.6745 3.9754.5068 1.3482-.1676 2.6279-.6719 3.7125-1.463 1.0847-.7911 1.937-1.8416 2.4726-3.0478-1.0063.5199-1.9323.664-3.3556.664Z"
  />
</svg>
