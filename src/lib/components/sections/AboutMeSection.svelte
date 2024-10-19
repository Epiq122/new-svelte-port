<script lang="ts">
	import { SectionHeadline, Button } from '$components';
	import image from '$assets/profile.png';
	import { goto } from '$app/navigation';

	function onclick() {
		goto('/#contact-form');
	}
</script>

<section class="about-me mt-l">
	<SectionHeadline sectionName={'about-me'}>About Me</SectionHeadline>
	<div class="mt-m content-container default-margin">
		<img src={image} alt="rob" class="image" />
		<div class="text">
			<p>
				Hey, I'm Rob, a developer living in Vancouver Bc, specializing in making modern web
				solutions for businesses and hobbyist
			</p>
			<p>
				I have a passion for creating beautiful and functional websites that are easy to use and
				maintain. I have experience with a variety of technologies and languages, including
				JavaScript, TypeScript, React, Svelte, Node.js, and more.
			</p>
			<p>
				I'm always looking for new projects to work on, so if you have an idea for a website or
				application, I'd love to hear from you!
			</p>
			<Button className="mt-m" {onclick}>Tell me about your project</Button>
		</div>
	</div>
</section>

<style>
	.content-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
	}

	.image {
		width: 100%;
		max-width: 300px;
		border-radius: 20px;
		object-fit: cover;
	}

	.text {
		width: 100%;
		text-align: left;
	}

	p {
		margin-bottom: 1rem;
		font-size: 1rem;
		line-height: 1.6;
	}

	@media (min-width: 768px) {
		.about-me {
			padding: 60px 5%;
		}

		.content-container {
			flex-direction: row;
			justify-content: space-between;
			align-items: stretch;
		}

		.image {
			width: 42%;
			max-width: none;
		}

		.text {
			width: 55%;
		}

		p {
			font-size: 1.1rem;
		}
	}

	@media (min-width: 1024px) {
		.about-me {
			padding: 80px 0;
		}

		.content-container {
			margin-left: 12vw;
			margin-right: 12vw;
		}
	}
</style>
