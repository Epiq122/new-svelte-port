import { createClient, type ClientConfig } from '@sanity/client';

const config: ClientConfig = {
	projectId: '1f3vmnox',
	dataset: 'production',
	useCdn: true,
	apiVersion: '2024-10-19'
};

const sanityClient = createClient(config);

export default sanityClient;
