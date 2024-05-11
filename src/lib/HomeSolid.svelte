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
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    role?: string;
    color?: string;
    withEvents?: boolean;
    onclick?: (event: MouseEvent) => void;
    onkeydown?: (event: KeyboardEvent) => void;
    onkeyup?: (event: KeyboardEvent) => void;
    class?: string;
  }

  interface CtxType extends BaseProps {}
  interface Props extends BaseProps{
    title?: TitleType;
    desc?: DescType;
    ariaLabel?: string;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
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
    ariaLabel =  "home solid" , 
    onclick, 
    onkeydown, 
    onkeyup, 
    ...restProps 
    }: Props = $props();

  let ariaDescribedby = `${title.id || ''} ${desc.id || ''}`;
  const hasDescription = $derived(!!(title.id || desc.id));
</script>

{#if withEvents}
<svg
  xmlns="http://www.w3.org/2000/svg"
  fill={color}
{...restProps}
  class={twMerge(
    'shrink-0',
    sizes[size],
    classname
  )}
  {role}
  aria-label={ariaLabel}
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
  viewBox="0 0 24 24"
  onclick={onclick}
  onkeydown={onkeydown}
  onkeyup={onkeyup}
>
  {#if title.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
     <path fill-rule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clip-rule="evenodd"/>  
</svg>
{:else}
<svg
  xmlns="http://www.w3.org/2000/svg"
  fill={color}
{...restProps}
  class={twMerge(
    'shrink-0',
    sizes[size],
    classname
  )}
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
     <path fill-rule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clip-rule="evenodd"/>  
</svg>
{/if}
