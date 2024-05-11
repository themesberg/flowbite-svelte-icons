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
    ariaLabel =  "grid outline" , 
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
     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="{strokeWidth}" d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z"/>  
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
     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="{strokeWidth}" d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z"/>  
</svg>
{/if}
