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
  export let ariaLabel = 'eye slash outline';
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
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width={strokeWidth}
      d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
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
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width={strokeWidth}
      d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
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
@prop export let ariaLabel = 'eye slash outline';
-->
