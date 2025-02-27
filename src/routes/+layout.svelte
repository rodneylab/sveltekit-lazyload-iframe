<script>
	import '$lib/styles/index.scss';
	import '$lib/styles/normalise.css';
	import '@fontsource/source-sans-pro/400.css';
	import '@fontsource/source-sans-pro/700.css';

	let { children } = $props();
</script>

{@render children?.()}
