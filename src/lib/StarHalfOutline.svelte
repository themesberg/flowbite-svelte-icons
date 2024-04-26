<script lang="ts">
  import { getContext } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  type TitleType = {
    id?: string;
    title?: string;
  };
  type DescType = {
    id?: string;
    desc?: string;
  };

  interface BaseProps {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    role?: string;
    color?: string;
    strokeWidth?: string;
    withEvents?: boolean;
    onclick?: (event: MouseEvent) => void;
    onkeydown?: (event: KeyboardEvent) => void;
    onkeyup?: (event: KeyboardEvent) => void;
  }

  interface CtxType extends BaseProps {}
  interface Props extends BaseProps {
    title?: TitleType;
    desc?: DescType;
    ariaLabel?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  }

  const ctx: CtxType = getContext('iconCtx') ?? {};
  const sizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8'
  };

  export let size: Props['size'] = ctx.size || 'md';
  export let role: Props['role'] = ctx.role || 'img';
  export let color: Props['color'] = ctx.color || 'currentColor';
  export let withEvents: Props['withEvents'] = ctx.withEvents || false;
  export let title: TitleType = {};
  export let strokeWidth: Props['strokeWidth'] = ctx.strokeWidth || '2';
  export let desc: DescType = {};

  let ariaDescribedby = `${title.id || ''} ${desc.id || ''}`;
  let hasDescription = false;

  $: if (title.id || desc.id) {
    hasDescription = true;
  } else {
    hasDescription = false;
  }
  export let ariaLabel = 'star half outline';
</script>

{#if withEvents}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {color}
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size ?? 'md'], $$props.class)}
    {role}
    aria-label={ariaLabel}
    aria-describedby={hasDescription ? ariaDescribedby : undefined}
    viewBox="0 0 24 24"
    on:click
    on:keydown
    on:keyup
    on:focus
    on:blur
    on:mouseenter
    on:mouseleave
    on:mouseover
    on:mouseout
  >
    {#if title.id && title.title}
      <title id={title.id}>{title.title}</title>
    {/if}
    {#if desc.id && desc.desc}
      <desc id={desc.id}>{desc.desc}</desc>
    {/if}
    <path
      stroke="currentColor"
      stroke-width={strokeWidth}
      d="m12.25 20.825 4.247-2.436a1 1 0 0 0 .503-.867V4.03c0-.405-2.062 3.38-2.8 4.747a1 1 0 0 1-.807.523l-4.87.367c-.903.068-1.258 1.208-.55 1.776l3.576 2.878a1 1 0 0 1 .343 1.025l-1.11 4.366c-.217.856.701 1.553 1.468 1.113Z"
    />
  </svg>
{:else}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {color}
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size ?? 'md'], $$props.class)}
    {role}
    aria-label={ariaLabel}
    aria-describedby={hasDescription ? ariaDescribedby : undefined}
    viewBox="0 0 24 24"
  >
    {#if title.id && title.title}
      <title id={title.id}>{title.title}</title>
    {/if}
    {#if desc.id && desc.desc}
      <desc id={desc.id}>{desc.desc}</desc>
    {/if}
    <path
      stroke="currentColor"
      stroke-width={strokeWidth}
      d="m12.25 20.825 4.247-2.436a1 1 0 0 0 .503-.867V4.03c0-.405-2.062 3.38-2.8 4.747a1 1 0 0 1-.807.523l-4.87.367c-.903.068-1.258 1.208-.55 1.776l3.576 2.878a1 1 0 0 1 .343 1.025l-1.11 4.366c-.217.856.701 1.553 1.468 1.113Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
## Props
@prop export let size: Props['size'] = ctx.size || 'md';
@prop export let role: Props['role'] = ctx.role || 'img';
@prop export let color: Props['color'] = ctx.color || 'currentColor';
@prop export let withEvents: Props['withEvents'] = ctx.withEvents || false;
@prop export let title: TitleType = {};
@prop export let strokeWidth: Props['strokeWidth'] = ctx.strokeWidth || '2';
@prop export let desc: DescType = {};
@prop export let ariaLabel = 'star half outline';
-->
