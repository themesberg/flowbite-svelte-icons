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
  export let desc: DescType = {};

  let ariaDescribedby = `${title.id || ''} ${desc.id || ''}`;
  let hasDescription = false;

  $: if (title.id || desc.id) {
    hasDescription = true;
  } else {
    hasDescription = false;
  }
  export let ariaLabel = 'font color alt solid';
</script>

{#if withEvents}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
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
      fill="currentColor"
      d="M19.9999 18.0661c0 1.6203-1.3431 2.9339-3 2.9339-1.6568 0-3-1.3136-3-2.9339 0-1.6204 3-6.0661 3-6.0661s3 4.4457 3 6.0661Z"
    />
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M10.4817 7.52489 9.12238 10.9817H11.841l-1.3593-3.45681Zm3.7494 4.06961-2.7166-6.90843c-.3694-.93918-1.69627-.93917-2.06558 0L6.76269 11.5173c-.03333.0634-.06004.1309-.07922.2014l-1.28309 3.263h-.41869c-.55229 0-1 .4477-1 1s.44771 1 1 1h2.75c.55228 0 1-.4477 1-1s-.44772-1-1-1h-.18223l.78646-2h4.29158l.3676.9349c.2021.514.7826.7668 1.2966.5647.514-.2021.7668-.7826.5647-1.2966l-.6085-1.5473c-.0053-.0144-.0109-.0287-.0168-.0429Z"
      clip-rule="evenodd"
    />
  </svg>
{:else}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
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
      fill="currentColor"
      d="M19.9999 18.0661c0 1.6203-1.3431 2.9339-3 2.9339-1.6568 0-3-1.3136-3-2.9339 0-1.6204 3-6.0661 3-6.0661s3 4.4457 3 6.0661Z"
    />
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M10.4817 7.52489 9.12238 10.9817H11.841l-1.3593-3.45681Zm3.7494 4.06961-2.7166-6.90843c-.3694-.93918-1.69627-.93917-2.06558 0L6.76269 11.5173c-.03333.0634-.06004.1309-.07922.2014l-1.28309 3.263h-.41869c-.55229 0-1 .4477-1 1s.44771 1 1 1h2.75c.55228 0 1-.4477 1-1s-.44772-1-1-1h-.18223l.78646-2h4.29158l.3676.9349c.2021.514.7826.7668 1.2966.5647.514-.2021.7668-.7826.5647-1.2966l-.6085-1.5473c-.0053-.0144-.0109-.0287-.0168-.0429Z"
      clip-rule="evenodd"
    />
  </svg>
{/if}
