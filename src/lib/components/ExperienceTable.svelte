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
		justify-content: space-between;
		width: 100%;
	}
	.work-experience-list {
		width: 50%;
	}
	.headline {
		text-align: right;
	}

	.work-item {
		border-bottom: 1px solid #f0eded;
		padding: 10px;
	}

	.work-item:not(:first-of-type) {
		padding-top: 16px;
	}

	.work-item p {
		margin: 0;
	}

	.company-and-date {
		display: flex;
		justify-content: space-between;
	}
</style>
