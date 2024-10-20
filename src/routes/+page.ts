import SanityClient, { processProjectEntries } from '$lib/utils/sanity';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const devExperience: SanityDevExperience[] = await SanityClient.fetch(
		`*[_type == "devExperience"] | order(startDate desc)`
	);

	const rawProjects: SanityProject[] = await SanityClient.fetch(`*[_type == "project"]`);

	console.log('BEFORE PROCESSING: ', rawProjects[0]);

	const projects = rawProjects.map(processProjectEntries);

	console.log('AFTER PROCESSING: ', projects[0]);

	// const projects = rawProjects.map(processProjectEntries);

	return { devExperience, rawProjects };
};
