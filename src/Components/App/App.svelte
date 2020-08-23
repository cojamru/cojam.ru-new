<script lang="ts">
    import { Router, Route } from 'svelte-routing';

    import APP_CONFIG from '../../config';

    import Container from '../Container/Container.svelte';
    import IndexPage from '../IndexPage/IndexPage.svelte';

    const { paths: AppPaths } = APP_CONFIG;
</script>

<style lang="scss">

</style>

<Router>
    <Container>
        <Route path="{AppPaths.index}">
            <IndexPage />
        </Route>
    </Container>
</Router>
