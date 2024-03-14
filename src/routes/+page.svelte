<script lang="ts">
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    import { base } from '$app/paths';

    import { BarChartSimple } from '@carbon/charts-svelte'
    import '@carbon/charts-svelte/styles.css'

    export let data;
    export let loaded = false;

    export const options = {
        "title": "Cosmic Bowling Donations",
        "axes": {
            "left": {
            "mapsTo": "value"
            },
            "bottom": {
            "mapsTo": "group",
            "scaleType": "labels"
            }
        },
        "height": "400px",
    }

    onMount(async () => {
        if (browser) {
            let response = await fetch(`${base}/data.json`);
            const chartData = await response.json();
            data = chartData;
            loaded = true;
        }
    });
</script>


{#if loaded}
    <BarChartSimple {data} {options} />
    <small>Last updated: 3/14/2024</small>
{/if}
