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
    withEvents?: boolean;
    onclick?: (event: MouseEvent) => void;
    onkeydown?: (event: KeyboardEvent) => void;
    onkeyup?: (event: KeyboardEvent) => void;
    class?: string;
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

  let {
    size = ctx.size || 'md',
    role,
    color = ctx.color || 'currentColor',
    withEvents = ctx.withEvents || false,
    title = {},
    desc = {},
    class: classname,
    ariaLabel = 'microphone slash solid',
    onclick,
    onkeydown,
    onkeyup,
    ...restProps
  }: Props = $props();

  let ariaDescribedby = `${title.id || ''} ${desc.id || ''}`;
  let hasDescription = $state(false);

  function updateHasDescription() {
    // Double negation converts truthy values to true, falsy to false
    hasDescription = !!(title.id || desc.id);
  }
  updateHasDescription();

  $effect(() => {
    updateHasDescription();
  });
</script>

{#if withEvents}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
    {...restProps}
    class={twMerge('shrink-0', sizes[size], classname)}
    {role}
    aria-label={ariaLabel}
    aria-describedby={hasDescription ? ariaDescribedby : undefined}
    viewBox="0 0 24 24"
    {onclick}
    {onkeydown}
    {onkeyup}
  >
    {#if title.id && title.title}
      <title id={title.id}>{title.title}</title>
    {/if}
    {#if desc.id && desc.desc}
      <desc id={desc.id}>{desc.desc}</desc>
    {/if}
    <path
      d="m15.506 14.097.994.995A3.989 3.989 0 0 0 17.975 12V9.011a.996.996 0 0 1 1.992 0v2.99a5.981 5.981 0 0 1-2.054 4.503l1.762 1.762a.996.996 0 1 1-1.408 1.408L4.325 5.733a.996.996 0 0 1 1.408-1.408L7.04 5.632a3.984 3.984 0 0 1 3.964-3.59h1.992c2.2 0 3.983 1.783 3.983 3.983v4.98a3.975 3.975 0 0 1-1.473 3.092ZM4.033 10.008a.996.996 0 1 1 1.992 0V12a3.99 3.99 0 0 0 3.984 3.984H12c.55 0 .996.446.996.996v2.988h1.992a.996.996 0 0 1 0 1.992H9.012a.996.996 0 0 1 0-1.992h1.992v-1.992h-.997a5.981 5.981 0 0 1-5.974-5.974v-1.993Z"
    />
  </svg>
{:else}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
    {...restProps}
    class={twMerge('shrink-0', sizes[size], classname)}
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
      d="m15.506 14.097.994.995A3.989 3.989 0 0 0 17.975 12V9.011a.996.996 0 0 1 1.992 0v2.99a5.981 5.981 0 0 1-2.054 4.503l1.762 1.762a.996.996 0 1 1-1.408 1.408L4.325 5.733a.996.996 0 0 1 1.408-1.408L7.04 5.632a3.984 3.984 0 0 1 3.964-3.59h1.992c2.2 0 3.983 1.783 3.983 3.983v4.98a3.975 3.975 0 0 1-1.473 3.092ZM4.033 10.008a.996.996 0 1 1 1.992 0V12a3.99 3.99 0 0 0 3.984 3.984H12c.55 0 .996.446.996.996v2.988h1.992a.996.996 0 0 1 0 1.992H9.012a.996.996 0 0 1 0-1.992h1.992v-1.992h-.997a5.981 5.981 0 0 1-5.974-5.974v-1.993Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
## Props
@props: 
-->
