<script lang="ts">
    import { Router, Route } from 'yrv';

    import APP_CONFIG from '../../config';

    import Container from '../Container/Container.svelte';
    import IndexPage from '../IndexPage/IndexPage.svelte';

    const MusicPage = () => import('../MusicPage/MusicPage.svelte');
    const GamesPage = () => import('../GamesPage/GamesPage.svelte');

    const { paths: AppPaths } = APP_CONFIG;
</script>

<style global lang="scss">
    @import './App';
</style>

<Router>
    <Container>
        <Route exact path="{AppPaths.index}" component="{IndexPage}" />
        <Route exact path="{AppPaths.music}" component="{MusicPage}" />
        <Route exact path="{AppPaths.games}" component="{GamesPage}" />
    </Container>
</Router>
