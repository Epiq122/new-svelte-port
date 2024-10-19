import type { DevExperience } from '$lib/types/sanity';
import SanityClient from '$lib/utils/sanity';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const devExperience: DevExperience[] = await SanityClient.fetch(
		`*[_type == "devExperience"] | order(startDate desc)`
	);

	return { devExperience };
};
