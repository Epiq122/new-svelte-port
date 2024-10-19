<script>
	import { HeroSection, AboutMeSection } from '$components';

	// the `data` object comes from your page's `load` function
	const { data } = $props();
	$inspect(data);
</script>

<HeroSection />
<AboutMeSection />
