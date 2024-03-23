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
  interface CtxType {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    role?: string;
    withEvents?: boolean;
    strokeLinecap?: 'round' | 'inherit' | 'butt' | 'square' | undefined;
    strokeLinejoin?: 'round' | 'inherit' | 'miter' | 'bevel' | undefined;
    strokeWidth?: string;
  }

  const ctx: CtxType = getContext('iconCtx') ?? {};
  const sizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8'
  };

  export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = ctx.size || 'md';
  export let role = ctx.role || 'img';
  export let withEvents = ctx.withEvents || false;
  export let title: TitleType = {};
  export let desc: DescType = {};

  let ariaDescribedby = `${title.id || ''} ${desc.id || ''}`;

  let hasDescription = false;

  $: if (title.id || desc.id) {
    hasDescription = true;
  } else {
    hasDescription = false;
  }
  export let strokeLinecap: 'round' | 'inherit' | 'butt' | 'square' | undefined =
    ctx.strokeLinecap || 'round';
  export let strokeLinejoin: 'round' | 'inherit' | 'miter' | 'bevel' | undefined =
    ctx.strokeLinejoin || 'round';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'blender phone outline';
</script>

{#if withEvents}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
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
      stroke-linecap={strokeLinecap}
      stroke-linejoin={strokeLinejoin}
      stroke-width={strokeWidth}
      d="M20.283 8h-4.285m3.85 3h-3.85m4.061-6H11v11h8.27l1.715-9.847A.983.983 0 0 0 20.059 5ZM6.581 13.23h-.838A13.752 13.752 0 0 1 5.622 11c-.02-.745.02-1.49.12-2.23h1.04c.252 0 .496-.088.683-.245a.927.927 0 0 0 .329-.61l.2-1.872a.888.888 0 0 0-.045-.39.936.936 0 0 0-.212-.34 1.017 1.017 0 0 0-.341-.231A1.08 1.08 0 0 0 6.983 5h-2.06a1.27 1.27 0 0 0-.699.204 1.135 1.135 0 0 0-.442.543A15.066 15.066 0 0 0 3.007 11a15.656 15.656 0 0 0 .795 5.229c.165.462 1.342.771 1.864.771h1.116c.142 0 .283-.028.413-.082.13-.053.246-.132.341-.23a.936.936 0 0 0 .212-.34.889.889 0 0 0 .046-.391l-.201-1.873a.927.927 0 0 0-.33-.609 1.059 1.059 0 0 0-.682-.245ZM10 18v1h10v-1a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2Z"
    />
  </svg>
{:else}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
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
      stroke-linecap={strokeLinecap}
      stroke-linejoin={strokeLinejoin}
      stroke-width={strokeWidth}
      d="M20.283 8h-4.285m3.85 3h-3.85m4.061-6H11v11h8.27l1.715-9.847A.983.983 0 0 0 20.059 5ZM6.581 13.23h-.838A13.752 13.752 0 0 1 5.622 11c-.02-.745.02-1.49.12-2.23h1.04c.252 0 .496-.088.683-.245a.927.927 0 0 0 .329-.61l.2-1.872a.888.888 0 0 0-.045-.39.936.936 0 0 0-.212-.34 1.017 1.017 0 0 0-.341-.231A1.08 1.08 0 0 0 6.983 5h-2.06a1.27 1.27 0 0 0-.699.204 1.135 1.135 0 0 0-.442.543A15.066 15.066 0 0 0 3.007 11a15.656 15.656 0 0 0 .795 5.229c.165.462 1.342.771 1.864.771h1.116c.142 0 .283-.028.413-.082.13-.053.246-.132.341-.23a.936.936 0 0 0 .212-.34.889.889 0 0 0 .046-.391l-.201-1.873a.927.927 0 0 0-.33-.609 1.059 1.059 0 0 0-.682-.245ZM10 18v1h10v-1a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
## Props
@prop export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = ctx.size || 'md';
@prop export let role = ctx.role || 'img';
@prop export let withEvents = ctx.withEvents || false;
@prop export let title: TitleType = {};
@prop export let desc: DescType = {};
@prop export let strokeLinecap: 'round' | 'inherit' | 'butt' | 'square' | undefined =
    ctx.strokeLinecap || 'round';
@prop export let strokeLinejoin: 'round' | 'inherit' | 'miter' | 'bevel' | undefined =
    ctx.strokeLinejoin || 'round';
@prop export let strokeWidth = ctx.strokeWidth || '2';
@prop export let ariaLabel = 'blender phone outline';
-->
