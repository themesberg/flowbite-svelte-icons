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
    ariaLabel =  "dropbox solid" , 
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
     <path d="M12.013 6.175 7.006 9.369l5.007 3.194-5.007 3.193L2 12.545l5.006-3.193L2 6.175l5.006-3.194 5.007 3.194ZM6.981 17.806l5.006-3.193 5.006 3.193L11.987 21l-5.006-3.194Z"/>   <path d="m12.013 12.545 5.006-3.194-5.006-3.176 4.98-3.194L22 6.175l-5.007 3.194L22 12.562l-5.007 3.194-4.98-3.211Z"/>  
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
     <path d="M12.013 6.175 7.006 9.369l5.007 3.194-5.007 3.193L2 12.545l5.006-3.193L2 6.175l5.006-3.194 5.007 3.194ZM6.981 17.806l5.006-3.193 5.006 3.193L11.987 21l-5.006-3.194Z"/>   <path d="m12.013 12.545 5.006-3.194-5.006-3.176 4.98-3.194L22 6.175l-5.007 3.194L22 12.562l-5.007 3.194-4.98-3.211Z"/>  
</svg>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
## Props
@props: 
-->
