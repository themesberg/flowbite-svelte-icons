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

  interface Props extends BaseProps {
    title?: TitleType;
    desc?: DescType;
    ariaLabel?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  }

  const ctx: BaseProps = getContext('iconCtx') ?? {};
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
  export let ariaLabel = 'teddy bear outline';
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
      d="M7.5 15C6.11929 15 5 16.1193 5 17.5S6.11929 20 7.5 20s2.5-1.1193 2.5-2.5S8.88071 15 7.5 15Zm0 0 1.67693-4.1693m6.69787-3.82761C17.0117 7.00309 18 6.10457 18 5c0-1.10457-.9217-2-2.0586-2-.8963 0-1.6853.74312-1.9679 1.51992M8.12719 6.99544C7.00181 6.99544 6 6.10457 6 5s.9123-2 2.03768-2c.93446 0 1.70666.67806 1.94698 1.51992M14 18h-4m6-3-1.4578-3.8912m-6.63506 2.8789-.44889.1929C6.24889 14.5837 5 13.6836 5 12.4088c0-.8339.55278-1.5667 1.35457-1.7958L8.5 10m7.1055 3.9877.4133.1446c1.2127.4242 2.4812-.476 2.4812-1.7607 0-.8159-.5302-1.5371-1.309-1.7805l-1.7458-.5575M12 9.06243v-.01m-1.3779-1.55397v-.01m3.0337.01v-.01M16 8c0 2.2091-1.7909 4-4 4-2.20914 0-4-1.7909-4-4 0-2.20914 1.79086-4 4-4 2.2091 0 4 1.79086 4 4Zm3 9.5c0 1.3807-1.1193 2.5-2.5 2.5S14 18.8807 14 17.5s1.1193-2.5 2.5-2.5 2.5 1.1193 2.5 2.5Z"
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
      d="M7.5 15C6.11929 15 5 16.1193 5 17.5S6.11929 20 7.5 20s2.5-1.1193 2.5-2.5S8.88071 15 7.5 15Zm0 0 1.67693-4.1693m6.69787-3.82761C17.0117 7.00309 18 6.10457 18 5c0-1.10457-.9217-2-2.0586-2-.8963 0-1.6853.74312-1.9679 1.51992M8.12719 6.99544C7.00181 6.99544 6 6.10457 6 5s.9123-2 2.03768-2c.93446 0 1.70666.67806 1.94698 1.51992M14 18h-4m6-3-1.4578-3.8912m-6.63506 2.8789-.44889.1929C6.24889 14.5837 5 13.6836 5 12.4088c0-.8339.55278-1.5667 1.35457-1.7958L8.5 10m7.1055 3.9877.4133.1446c1.2127.4242 2.4812-.476 2.4812-1.7607 0-.8159-.5302-1.5371-1.309-1.7805l-1.7458-.5575M12 9.06243v-.01m-1.3779-1.55397v-.01m3.0337.01v-.01M16 8c0 2.2091-1.7909 4-4 4-2.20914 0-4-1.7909-4-4 0-2.20914 1.79086-4 4-4 2.2091 0 4 1.79086 4 4Zm3 9.5c0 1.3807-1.1193 2.5-2.5 2.5S14 18.8807 14 17.5s1.1193-2.5 2.5-2.5 2.5 1.1193 2.5 2.5Z"
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
@prop export let ariaLabel = 'teddy bear outline';
-->
