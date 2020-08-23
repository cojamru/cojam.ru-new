<script>
    import { link } from 'svelte-routing';

    import APP_CONFIG from '../../../config';

    import FooterSocials from './FooterSocials.svelte';

    const { paths: AppPaths } = APP_CONFIG;
</script>

<style>

</style>

<footer class="footer">
    <FooterSocials />

    <p class="footer__note">
        <a href="{AppPaths.index}" rel="home" use:link>Коджем</a>
        <span>, 2013 – {new Date().getFullYear()}</span>
    </p>
</footer>
