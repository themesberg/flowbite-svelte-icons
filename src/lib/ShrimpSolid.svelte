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
    d="M6 5.00003c-.55228 0-1 .44772-1 1 0 .55196.44718.99947.99901 1H9v7.49407l-.39242.3002c-.43865.3355-1.06628.252-1.40184-.1867-.28078-.367-.26809-.8664.00054-1.2163C5.37736 13.0232 4 11.4075 4 9.47009V8.23614c-.61375-.54932-1-1.34761-1-2.23611 0-1.65685 1.34315-3 3-3h4c.5523 0 1 .44772 1 1 0 .55229-.4477 1-1 1H6Zm5 8.47007h.9787l2.9923-7.0297c-.8803-.34081-1.6895-.51254-2.4958-.46543-.5196.03035-1.0047.14959-1.4752.33684v7.15829Zm5.9737-6.62806L14.3524 13h6.9717c.5476-3.07251-1.48-5.64288-4.3504-6.15796ZM20.9003 15h-6.1385c-.018.0824-.0446.1647-.0805.246-.0089.0202-.0183.0401-.0282.0597l2.3883 5.4932c1.8902-.4966 3.576-1.9019 3.7858-4.0919.0494-.5152.0739-1.0751.0731-1.707Zm-5.9523 6-2.1739-5H11c-1.65685 0-3 1.3432-3 3v2h6.948Z"
  />
</svg>
