<script lang="ts">
    import { onMount } from 'svelte';
    import likely from 'ilyabirman-likely';
    import 'ilyabirman-likely/release/likely.css';

    onMount(() => {
        likely.initiate();
    });

    export let isOpen: boolean;
    export let className: string;
    export let id: string;
    export let heading: string;
    export let title: string;
    export let image: string;
    export let url: string;

    let _heading = heading ? `${heading} "${title}"` : title;
</script>

<style global lang="scss">
    @import './Modal';
</style>

<div class="modal modal--{className}" hidden="{!isOpen}">
    <button class="modal__close" aria-label="Закрыть">🗙</button>
    <div class="modal__container">
        <div class="modal__content">
            <slot />
        </div>
        <div class="modal__likely likely" data-url="{url}" data-title="{_heading}">
            <div class="vkontakte" data-description="{_heading}" data-image="{image}">Поделиться</div>
            <div class="telegram" data-text="{_heading}">Рассказать</div>
            <div class="twitter">Твитнуть</div>
            <div class="facebook">Шернуть</div>
        </div>
    </div>
</div>
