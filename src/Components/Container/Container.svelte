<script lang="ts">
    import Header from './Header/Header.svelte';
    import Footer from './Footer/Footer.svelte';
</script>

<div class="container">
    <Header />
    <main>
        <slot />
    </main>
    <Footer />
</div>
