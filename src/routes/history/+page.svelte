<script>
	import {
		Timeline,
		TimelineItem,
		TimelineSeparator,
		TimelineDot,
		TimelineConnector,
		TimelineContent,
		TimelineOppositeContent
	} from 'svelte-vertical-timeline';
	import picANewHappiness from '$lib/assets/timeline/a-new-happiness.png';
	import renewYourSpirits from '$lib/assets/timeline/renew-your-spirits.jpg';
	import oldLogo from '$lib/assets/timeline/old-chicago-roundup.jpg';
	import freedomToChange from '$lib/assets/timeline/freedom-to-change.jpg';

	const options = [
		{ title: 'An Awakening', time: '2010' },
		{ title: 'Adventures of the Spirit', time: '2011' },
		{ title: 'Together We Grow', time: '2012' },
		{ title: 'We Will Be Amazed', time: '2013' },
		{ title: 'We Can Go Anywhere', time: '2014' },
		{ title: 'Your Imagination will be Fired', time: '2015' },
		{ title: 'Rocketed', time: '2016' },
		{ title: 'It Takes a Village', time: '2017' },
		{
			title: 'Renew Your Spirit',
			time: '2018',
			pic: { src: renewYourSpirits, alt: 'Renew Your Spirit Logo' }
		},
		{
			title: 'Freedom to Change',
			time: '2019',
			pic: { src: freedomToChange, alt: 'Freedom to Change Logo' }
		},
		{ title: 'A Vision For You', time: '2020' },
		{
			title: 'A New Happiness',
			time: '2021',
			pic: { src: picANewHappiness, alt: 'A New Happiness Logo' }
		},
		{ title: 'Thank You for Being a Friend', time: '2022' },
		{ title: 'Chosen Family Reunion', time: '2023' },
		{ title: 'Death of Denial', time: '2024' }
	];

</script>

<Timeline position="alternate">
	{#each options as option}
		<TimelineItem>
			<TimelineOppositeContent
				slot="opposite-content"
				style={`height: ${option.pic ? '150px' : '80px'}`}
			>
				<p>{option.time}</p>
				{#if option.extra}<p class="extra">{option.extra}</p>{/if}
			</TimelineOppositeContent>
			<TimelineSeparator>
				{#if option.pic}
					<img class="dotPic" src={option.pic.src} alt={option.pic.alt} />
				{:else}
					<TimelineDot />
				{/if}
				<TimelineConnector />
			</TimelineSeparator>
			<TimelineContent>
				<h3>{option.title}</h3>
			</TimelineContent>
		</TimelineItem>
	{/each}
</Timeline>

<style>
	h3 {
		font-family: 'Roboto', sans-serif;
		font-weight: 500;
		font-style: normal;
		margin: 0;
		padding: 0;
	}

	p {
		font-family: 'Roboto', sans-serif;
		font-weight: 400;
		font-style: normal;
		margin: 0;
		padding: 0;
	}

	.extra {
		margin-top: 8px;
	}
	.dotPic {
		width: 90px;
	}
</style>
