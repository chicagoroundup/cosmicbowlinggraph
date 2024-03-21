<script lang="ts">
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    import { base } from '$app/paths';

    import { BarChartSimple, MeterChart } from '@carbon/charts-svelte'
    import '@carbon/charts-svelte/styles.css'

    export let data;
    export let loaded = false;

    export const options = {
        "title": "Cosmic Bowling Donations by Team",
        "axes": {
            "left": {
            "mapsTo": "value"
            },
            "bottom": {
            "mapsTo": "group",
            "scaleType": "labels"
            }
        },
        "toolbar":  {
            "enabled": false,
        },
        "legend": {
            "enabled": false,
        },
        "height": "400px",
    }

    export let meterData = [
        {
            group: 'Current Donations',
            value: 0
        }
    ];

    export const meterOptions = {
        title: 'Cosmic Bowling - $15,000 Goal',
        meter: {
            peak: 100,
        },
        toolbar:  {
            enabled: false,
        },
        height: '100px'
    }

    onMount(async () => {
        if (browser) {
            let response = await fetch(`${base}/data.json`);
            const chartData = await response.json();
            data = chartData;
            meterData[0].value =  Math.ceil(data.reduce((partialSum, {value}) => partialSum + value, 0) / 15000 * 100);
            loaded = true;
        }
    });
</script>


{#if loaded}
    <MeterChart data={meterData} options={meterOptions} />
    <BarChartSimple {data} {options} />
    <small>Last updated: 3/14/2024</small>
{/if}
