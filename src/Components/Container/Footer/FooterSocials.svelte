<script>
    import FaVk from 'svelte-icons/fa/FaVk.svelte';
    import FaFacebookSquare from 'svelte-icons/fa/FaFacebookSquare.svelte';
    import FaBandcamp from 'svelte-icons/fa/FaBandcamp.svelte';
    import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte';
    import FaYoutube from 'svelte-icons/fa/FaYoutube.svelte';

    const Links = [
        {
            to: 'https://vk.com/tehcojam',
            icon: 'vk',
        },
        {
            to: 'https://www.facebook.com/cojamru',
            icon: 'facebook',
        },
        {
            to: 'https://cojam.bandcamp.com',
            icon: 'bandcamp',
        },
        {
            to: 'https://www.instagram.com/zcojam/',
            icon: 'insta',
        },
        {
            to: 'https://www.youtube.com/c/cojamru',
            icon: 'bandcamp',
        },
    ];
</script>

<ul class="footer__socials">
    {#each Links as Link}
        <li>
            <a href="{Link.to}" target="_blank" rel="nofollow noopener">
                {#if Link.icon === 'vk'}
                    <FaVk />
                {:else if Link.icon === 'facebook'}
                    <FaFacebookSquare />
                {:else if Link.icon === 'bandcamp'}
                    <FaBandcamp />
                {:else if Link.icon === 'insta'}
                    <FaInstagram />
                {:else if Link.icon === 'youtube'}
                    <FaYoutube />
                {/if}
            </a>
        </li>
    {/each}
</ul>
