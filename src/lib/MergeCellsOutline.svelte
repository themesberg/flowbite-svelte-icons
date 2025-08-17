<script lang="ts">
  import { getContext } from 'svelte';
  import { cn } from './helpers';
  import type { OutlineBaseProps, OutlineProps } from './types'

  const ctx: OutlineBaseProps = getContext('iconCtx') ?? {};
  const sizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8'
  };

  let { 
    size = ctx.size || 'md', 
    color = ctx.color || 'currentColor', 
    title, 
strokeWidth= ctx.strokeWidth || 2,
    desc,  
    class: className, 
    ariaLabel, 
    ...restProps 
    }: OutlineProps = $props();

  let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`.trim();
	const hasDescription = !!(title?.id || desc?.id);
	const isLabeled = !!ariaLabel || hasDescription;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
{color}
{...restProps}
  class={cn('shrink-0', sizes[size], className)}
  viewBox="0 0 24 24"
  aria-label={ariaLabel}
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
	aria-hidden={!isLabeled}
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width={strokeWidth} d="M10 18v2H4V4h6v2m4 12v2h6V4h-6v2m-6.49543 8.4954L10 12m0 0L7.50457 9.50457M10 12H4.05191m12.50199 2.5539L14 12m0 0 2.5539-2.55392M14 12h5.8319"/>  
</svg>
