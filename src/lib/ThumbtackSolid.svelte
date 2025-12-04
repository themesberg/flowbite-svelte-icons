<script lang="ts">
  import { getContext } from 'svelte';
  import { cn } from './helpers';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};
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
    desc,
    class: className,
    ariaLabel,
    ...restProps
  }: Props = $props();

  const ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
  const hasDescription = $derived(!!(title?.id || desc?.id));
  const isLabeled = $derived(!!ariaLabel || hasDescription);
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill={color}
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
    d="M8 5v4.997a.31.31 0 0 1-.068.113c-.08.098-.213.207-.378.301-.947.543-1.713 1.54-2.191 2.488A6.237 6.237 0 0 0 4.82 14.4c-.1.48-.138 1.031.018 1.539C5.12 16.846 6.02 17 6.414 17H11v3a1 1 0 1 0 2 0v-3h4.586c.395 0 1.295-.154 1.575-1.061.156-.508.118-1.059.017-1.539a6.241 6.241 0 0 0-.541-1.5c-.479-.95-1.244-1.946-2.191-2.489a1.393 1.393 0 0 1-.378-.301.309.309 0 0 1-.068-.113V5h1a1 1 0 1 0 0-2H7a1 1 0 1 0 0 2h1Z"
  />
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
## Props
@prop size = ctx.size || 'md'
@prop color = ctx.color || 'currentColor'
@prop title
@prop desc
@prop class: className
@prop ariaLabel
@prop ...restProps
-->
