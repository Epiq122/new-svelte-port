import SanityClient from '$lib/utils/sanity';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const devExperience: SanityDevExperience[] = await SanityClient.fetch(
		`*[_type == "devExperience"] | order(startDate desc)`
	);

	const rawProjects: SanityProject[] = await SanityClient.fetch(`*[_type == "project"]`);

	// const projects = rawProjects.map(processProjectEntries);

	return { devExperience, rawProjects };
};
