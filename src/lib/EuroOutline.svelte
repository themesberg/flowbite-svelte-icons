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
     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width={strokeWidth} d="M6 10h9.231M6 14h9.231M18 5.086A5.95 5.95 0 0 0 14.615 4c-3.738 0-6.769 3.582-6.769 8s3.031 8 6.769 8A5.94 5.94 0 0 0 18 18.916"/>  
</svg>
