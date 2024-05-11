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
    ariaLabel =  "folder duplicate solid" , 
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
     <path fill-rule="evenodd" d="M6 5a2 2 0 0 1 2-2h4.157a2 2 0 0 1 1.656.879L15.249 6H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2v-5a3 3 0 0 0-3-3h-3.22l-1.14-1.682A3 3 0 0 0 9.157 6H6V5Z" clip-rule="evenodd"/>   <path fill-rule="evenodd" d="M3 9a2 2 0 0 1 2-2h4.157a2 2 0 0 1 1.656.879L12.249 10H3V9Zm0 3v7a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-7H3Z" clip-rule="evenodd"/>  
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
     <path fill-rule="evenodd" d="M6 5a2 2 0 0 1 2-2h4.157a2 2 0 0 1 1.656.879L15.249 6H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2v-5a3 3 0 0 0-3-3h-3.22l-1.14-1.682A3 3 0 0 0 9.157 6H6V5Z" clip-rule="evenodd"/>   <path fill-rule="evenodd" d="M3 9a2 2 0 0 1 2-2h4.157a2 2 0 0 1 1.656.879L12.249 10H3V9Zm0 3v7a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-7H3Z" clip-rule="evenodd"/>  
</svg>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
## Props
@props: 
-->
