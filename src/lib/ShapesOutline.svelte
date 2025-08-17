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
     <path stroke="currentColor" stroke-linejoin="round" stroke-width={strokeWidth} d="M4.07141 14v6h5.99999v-6H4.07141Zm4.5-4h6.99999l-3.5-6-3.49999 6Zm7.99999 10c1.933 0 3.5-1.567 3.5-3.5s-1.567-3.5-3.5-3.5-3.5 1.567-3.5 3.5 1.567 3.5 3.5 3.5Z"/>  
</svg>
