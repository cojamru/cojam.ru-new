<script>
    import { Link } from 'yrv';

    import APP_CONFIG from '../../../config';

    import FooterSocials from './FooterSocials.svelte';

    const { paths: AppPaths } = APP_CONFIG;
</script>

<style global lang="scss">
    @import './Footer';
</style>

<footer class="footer">
    <FooterSocials />

    <p class="footer__note">
        <Link href="{AppPaths.index}" rel="home">Коджем</Link>
        <span>, 2013 – {new Date().getFullYear()}</span>
    </p>
</footer>
