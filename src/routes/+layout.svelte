<script>
  import Navbar from '$lib/nav/Navbar.svelte';
    import '../app.css'

    export const ssr=false;
</script>

<Navbar />
<slot />