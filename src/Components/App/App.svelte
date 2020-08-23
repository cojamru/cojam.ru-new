<script lang="ts">
    import { Router, Link, Route } from 'svelte-routing';

    import IndexPage from '../IndexPage/IndexPage.svelte';
</script>

<style lang="scss">

</style>

<Router>
    <Route path="/">
        <IndexPage />
    </Route>
</Router>
