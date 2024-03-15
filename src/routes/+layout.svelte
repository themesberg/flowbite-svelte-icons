<script>
	import '../app.pcss';
	let { children } = $props();
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
{@render children()}
</div>
