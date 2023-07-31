<script lang="ts">
  import Charts from "$lib/charts/Charts.svelte";  
 import { onMount } from "svelte"
//   import { dataCharts } from "./data";
  export let data;

  

  function handleImageNotFound( index: number){
    let imageUrl = '/src/lib/img/favicon.png'
    data.universities[index].imgUrl = imageUrl
  }


onMount(()=> {
    for(let i = 0; i < data.universities.length; i++){
        const img = new Image();
        img.src = data.universities[i].imgUrl;

        img.onerror = () => {

            handleImageNotFound(i);
        }

      const ChartData = data.universities[i].chartData
    }
})

</script>

<div class=" pt-5 flex flex-row gap-5 pb-5 flex-wrap justify-center items-center =">
 {#each data.universities as univ, index }
        <div class=" w-96 h-[500] p-5 bg-white hover:bg-slate-200 rounded-md shadow-md flex flex-col items-center align-middle ">
            <img src={univ.imgUrl} width="100px" height="100px"  alt="img">
            <p class=" pt-3"> {univ.name}</p>
            <p>Country: {univ.country}({univ.alpha_two_code})</p>
            <p class="text-center">Domain: {#each univ.domains as domain}
            {domain}/
            {/each}</p>
            <p class="text-center pb-2">Web pages: {#each univ.web_pages as webpages}
             {webpages}
           {/each}</p>
           <p class="text-justify">
            {univ.paragrapgh}
           </p>    
           <canvas id={`chart-${index}`} width="100" height="100"></canvas>
           <Charts chartData={univ.chartData}/>
        </div>
      
    {/each}
</div>

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.100);
    }
</style>