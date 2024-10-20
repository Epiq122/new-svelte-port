<script>
	import { HeroSection, AboutMeSection } from '$components';

	// the `data` object comes from your page's `load` function
	const { data } = $props();
	let { devExperience } = data;
</script>

<HeroSection />
<AboutMeSection {devExperience} />
