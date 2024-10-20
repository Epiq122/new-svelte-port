import { createClient, type ClientConfig } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const config: ClientConfig = {
	projectId: '1f3vmnox',
	dataset: 'production',
	useCdn: true,
	apiVersion: '2024-10-19'
};

const sanityClient = createClient(config);

export default sanityClient;

export function processProjectEntries(rawProject: SanityProject) {
	const imageBuilder = imageUrlBuilder(sanityClient);
	const projectImageUrl = imageBuilder.image(rawProject.image).url();

	const processProject: ProcessedProject = {
		name: rawProject.name,
		company: rawProject.company,
		dateAccomplished: rawProject.dateAccomplished,
		stack: rawProject.stack,
		slug: rawProject.slug,
		projectImageUrl,
		content: rawProject.content.map(processProjectContent)
	};

	return processProject;
}

function processProjectContent(content: RawTextContent | RawImageContent) {
	if (content._type === 'block') {
		// process test content
		const processedContent: ProcessedTextContent = {
			type: 'text',
			style: content.style,
			textToRender: content.children.map((elem) => elem.text).join('')
		};

		return processedContent;
	} else {
		// process image content
		const builder = imageUrlBuilder(sanityClient);
		const projectImageUrl = builder.image(content).url();

		const processedImage: ProcessedImageContent = {
			type: 'image',
			url: projectImageUrl
		};

		return processedImage;
	}
}
