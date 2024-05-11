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
strokeWidth?: string;
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
strokeWidth= ctx.strokeWidth || "2",
    desc = {},  
    class: classname, 
    ariaLabel =  "file paste outline" , 
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
  fill="none"
{color}
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
     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="{strokeWidth}" d="M9 20H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.429M7 8h3M8 8V4h4v2m4 0V5h-4m3 4v3a1 1 0 0 1-1 1h-3m9-3v9a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-6.397a1 1 0 0 1 .27-.683l2.434-2.603a1 1 0 0 1 .73-.317H19a1 1 0 0 1 1 1Z"/>  
</svg>
{:else}
<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
{color}
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
     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="{strokeWidth}" d="M9 20H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.429M7 8h3M8 8V4h4v2m4 0V5h-4m3 4v3a1 1 0 0 1-1 1h-3m9-3v9a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-6.397a1 1 0 0 1 .27-.683l2.434-2.603a1 1 0 0 1 .73-.317H19a1 1 0 0 1 1 1Z"/>  
</svg>
{/if}
