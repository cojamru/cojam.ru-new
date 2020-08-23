<script lang="ts">
    import type { AlbumItemType } from '../MusicTypes';

    export let album: AlbumItemType;

    const { id, type, title, artist, feat, description, release } = album;
    const { tracklist, embed, img, links } = album;
</script>

<style lang="scss">
    @import './MusicAlbum';
</style>

<div class="music__album">
    <img class="music__album--cover" src="{img.cover}" alt="{id} cover" />
    <div class="music__album--about">
        <h3>{title}</h3>
        <p>Треков в альбоме: {tracklist.length}</p>
    </div>
</div>
