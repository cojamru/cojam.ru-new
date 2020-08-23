<script lang="ts">
    import { router } from 'yrv';

    import Header from './Header/Header.svelte';
    import Footer from './Footer/Footer.svelte';
</script>

<div class="container" data-location="{$router.path}">
    <Header />
    <main class="content">
        <slot />
    </main>
    <Footer />
</div>
