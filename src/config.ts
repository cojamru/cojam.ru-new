const CDN = 'https://cdn.blyat.science/cojam';

const CONFIG = {
    version: '4.0.0',

    paths: {
        index: '/',
        music: '/music',
        games: '/games',
    },

    titles: {
        music: 'Музыка',
        games: 'Игры',
    },

    cdn: CDN,

    cdn_paths: {
        music: {
            covers: `${CDN}/music/covers`,
        },
        games: {
            posters: `${CDN}/games/posters`,
        },
    },
};

export default CONFIG;
