<script lang="ts">
    let scroll = 0;
    $: opacity = scroll;
</script>

<svelte:window bind:scrollY={scroll}></svelte:window>

<header class="fixed top-0 w-full bg-[url('/src/lib/images/home-hero-bg.png')] bg-fixed bg-cover">
    <div class="h-16 bg-neutral bg-opacity-30">
        Header goes here.
    </div>
</header>