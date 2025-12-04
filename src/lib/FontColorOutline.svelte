<script lang="ts">
  import { getContext } from 'svelte';
  import { cn } from './helpers';
  import type { OutlineBaseProps, OutlineProps } from './types';

  const ctx: OutlineBaseProps = getContext('iconCtx') ?? {};
  const sizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8'
  };

  let {
    size = ctx.size || 'md',
    color = ctx.color || 'currentColor',
    title,
    strokeWidth = ctx.strokeWidth || 2,
    desc,
    class: className,
    ariaLabel,
    ...restProps
  }: OutlineProps = $props();

  const ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
  const hasDescription = $derived(!!(title?.id || desc?.id));
  const isLabeled = $derived(!!ariaLabel || hasDescription);
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  {color}
  {...restProps}
  class={cn('shrink-0', sizes[size], className)}
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
    stroke-width={strokeWidth}
    d="m6.08169 15.9817 1.57292-4m-1.57292 4h-1.1m1.1 0h1.65m-.07708-4 2.72499-6.92967c.0368-.09379.1673-.09379.2042 0l2.725 6.92967m-5.65419 0h-.00607m.00607 0h5.65419m0 0 .6169 1.569m5.1104 4.453c0 1.1025-.8543 1.9963-1.908 1.9963s-1.908-.8938-1.908-1.9963c0-1.1026 1.908-4.1275 1.908-4.1275s1.908 3.0249 1.908 4.1275Z"
  />
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
## Props
@prop size = ctx.size || 'md'
@prop color = ctx.color || 'currentColor'
@prop title
@prop strokeWidth = ctx.strokeWidth || 2
@prop desc
@prop class: className
@prop ariaLabel
@prop ...restProps
-->
