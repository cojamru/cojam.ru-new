<script>
    import { link, links } from 'svelte-routing';

    import APP_CONFIG from '../../../config';

    const { paths: AppPaths, titles: AppTitles } = APP_CONFIG;

    const Links = Object.keys(AppTitles).map(TitleKey => ({
        to: AppPaths[TitleKey],
        text: AppTitles[TitleKey],
    }));
</script>

<style>

</style>

<header class="header">
    <h1>
        <a href="{AppPaths.index}" rel="home" use:link>Coffee Jam Party</a>
    </h1>
    <nav>
        <ul use:links>
            {#each Links as Link}
                <li>
                    <a href="{Link.to}">
                        <span>{Link.text}</span>
                    </a>
                </li>
            {/each}
        </ul>
    </nav>
</header>
