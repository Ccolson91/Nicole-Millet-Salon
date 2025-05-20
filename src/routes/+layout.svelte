<script lang="ts">
    import '../app.css';
    import Header from '$lib/components/Header.svelte';
    import ConnectWithUs from '$components/ConnectWithUs.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<div class="app">
    <Header />
    <slot />
    <ConnectWithUs />
    <Footer />
</div>



<style>
    .app {
        display: flex;
        flex-direction:column;
    }
</style>