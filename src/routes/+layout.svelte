<script>
  import Navbar from "$lib/Navbar.svelte";

</script>


<Navbar/>
<main>
    <slot/>
</main>


<svelte:head>
    <style>
        body{
            margin:0;
        }
    </style>
</svelte:head>



<style>
    main{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>