<script lang="ts">
    import { Link } from 'yrv';

    import APP_CONFIG from '../../../config';

    const { paths: AppPaths, titles: AppTitles } = APP_CONFIG;

    const Links = Object.keys(AppTitles).map(TitleKey => ({
        to: AppPaths[TitleKey],
        text: AppTitles[TitleKey],
    }));
</script>

<style global lang="scss">
    @import './Header';
</style>

<header class="header">
    <h1>
        <Link href="{AppPaths.index}" rel="home">Coffee Jam Party</Link>
    </h1>
    <nav>
        <ul>
            {#each Links as LinkItem}
                <li>
                    <Link href="{LinkItem.to}">
                        <span>{LinkItem.text}</span>
                    </Link>
                </li>
            {/each}
        </ul>
    </nav>
</header>
