<script lang="ts">
	interface WorkExperience {
		jobTitle: string;
		company: string;
		startDate: string;
		endDate?: string;
	}

	const workExperiance: WorkExperience[] = [
		{
			jobTitle: 'Software Engineer',
			company: 'Tech Solutions Inc.',
			startDate: '2020-01-15'
		},
		{
			jobTitle: 'Frontend Developer',
			company: 'Web Innovators LLC',
			startDate: '2018-06-01'
		},
		{
			jobTitle: 'Backend Developer',
			company: 'Data Systems Corp.',
			startDate: '2016-09-10'
		},
		{
			jobTitle: 'Full Stack Developer',
			company: 'Creative Coders Ltd.',
			startDate: '2014-03-20'
		},
		{
			jobTitle: 'Junior Developer',
			company: 'Startup Hub',
			startDate: '2012-11-05',
			endDate: '2014-03-20'
		}
	];
</script>

<section class="default-margin work-experience mt-m">
	<ul class="work-experience-list">
		{#each workExperiance as job}
			<li class="work-item">
				<article>
					<h3 class="semi-bold mb-xs">{job.jobTitle}</h3>
					<div class="company-and-date">
						<p>{job.company}</p>
						<p class="dark-grey">
							{job.startDate}
							{#if job.endDate}
								/ {job.endDate}
							{/if}
						</p>
					</div>
				</article>
			</li>
		{/each}
	</ul>
	<h2 class="headline">Past Work <br />Experience</h2>
</section>

<style>
	.work-experience {
		display: flex;
		flex-direction: column-reverse;
		width: 100%;
		padding: 20px 5%;
		max-width: 1200px;
		margin: 0 auto;
	}

	.work-experience-list {
		width: 100%;
		padding: 0;
		list-style-type: none;
	}

	.headline {
		text-align: left;
		margin-bottom: 20px;
		font-size: 1.8rem;
	}

	.work-item {
		border-bottom: 1px solid #f0eded;
		padding: 16px 0;
	}

	.work-item:first-of-type {
		padding-top: 0;
	}

	.work-item h3 {
		font-size: 1.2rem;
		margin-bottom: 8px;
	}

	.work-item p {
		margin: 0;
		font-size: 0.9rem;
	}

	.company-and-date {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	@media (min-width: 768px) {
		.work-experience {
			flex-direction: row;
			justify-content: space-between;
			align-items: flex-start;
			padding: 40px 5%;
		}

		.work-experience-list {
			width: 60%;
		}

		.headline {
			width: 35%;
			text-align: right;
			margin-bottom: 0;
			font-size: 2rem;
		}

		.work-item h3 {
			font-size: 1.3rem;
		}

		.work-item p {
			font-size: 1rem;
		}

		.company-and-date {
			flex-direction: row;
			justify-content: space-between;
		}
	}

	@media (min-width: 1024px) {
		.work-experience {
			padding: 60px 0;
		}
	}
</style>
