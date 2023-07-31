<script>
  import { onMount } from 'svelte';
  import Chart from 'chart.js/auto';

  /**
   * @type {any}
   */
   export let chartData;

  /**
   * @type {HTMLCanvasElement}
   */
  let canvas;

  let myChart;

  onMount(() => {
    const labels = ['Januari', 'Februari', 'Maret', 'April', 'Mei'];
    const ctx = canvas.getContext('2d');
    // @ts-ignore
    myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Data ',
          data: chartData,
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  });
</script>

<canvas bind:this={canvas}></canvas>