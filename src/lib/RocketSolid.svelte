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
    ariaLabel =  "rocket solid" , 
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
     <path fill-rule="evenodd" d="M20.337 3.664c.213.212.354.486.404.782.294 1.711.657 5.195-.906 6.76-1.77 1.768-8.485 5.517-10.611 6.683a.987.987 0 0 1-1.176-.173l-.882-.88-.877-.884a.988.988 0 0 1-.173-1.177c1.165-2.126 4.913-8.841 6.682-10.611 1.562-1.563 5.046-1.198 6.757-.904.296.05.57.191.782.404ZM5.407 7.576l4-.341-2.69 4.48-2.857-.334a.996.996 0 0 1-.565-1.694l2.112-2.111Zm11.357 7.02-.34 4-2.111 2.113a.996.996 0 0 1-1.69-.565l-.422-2.807 4.563-2.74Zm.84-6.21a1.99 1.99 0 1 1-3.98 0 1.99 1.99 0 0 1 3.98 0Z" clip-rule="evenodd"/>  
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
     <path fill-rule="evenodd" d="M20.337 3.664c.213.212.354.486.404.782.294 1.711.657 5.195-.906 6.76-1.77 1.768-8.485 5.517-10.611 6.683a.987.987 0 0 1-1.176-.173l-.882-.88-.877-.884a.988.988 0 0 1-.173-1.177c1.165-2.126 4.913-8.841 6.682-10.611 1.562-1.563 5.046-1.198 6.757-.904.296.05.57.191.782.404ZM5.407 7.576l4-.341-2.69 4.48-2.857-.334a.996.996 0 0 1-.565-1.694l2.112-2.111Zm11.357 7.02-.34 4-2.111 2.113a.996.996 0 0 1-1.69-.565l-.422-2.807 4.563-2.74Zm.84-6.21a1.99 1.99 0 1 1-3.98 0 1.99 1.99 0 0 1 3.98 0Z" clip-rule="evenodd"/>  
</svg>
{/if}
