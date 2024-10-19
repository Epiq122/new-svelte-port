<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$components/Button.svelte';

	function onclick() {
		goto('/#contact-form');
	}
</script>

<section class="hero-section default-margin">
	<h3>Hello! I'm Rob</h3>
	<div class="underscore"></div>
	<h1>I'm a Fullstack developer creating modern</h1>
	<h1 class="dark-grey mb-m">web solutions</h1>
	<Button {onclick}>Let's Talk!</Button>
</section>

<style>
	.hero-section {
		padding-top: 60px;
	}
</style>
