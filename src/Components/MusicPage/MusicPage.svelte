<script lang="ts">
    import MusicDB from '../../db/music';

    import MusicAlbum from './MusicAlbum/MusicAlbum.svelte';

    const { albums } = MusicDB;
</script>

<div class="text">
    <p>В этом разделе можно найти все наши музыкальные альбомы.</p>
    <p>
        Синглы здесь не публикуются, но их можно найти
        <a href="https://soundcloud.com/midipidemy/tracks" target="_blank" rel="nofollow noopener">на SoundCloud</a>
        или в нашем
        <a href="https://vk.com/audios-71897180" target="_blank" rel="nofollow noopener">сообществе в VK</a>
        .
    </p>
</div>

<hr />

<div class="music">
    {#each albums as album}
        <MusicAlbum {album} />
    {/each}
</div>
