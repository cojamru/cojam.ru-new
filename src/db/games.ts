'use strict';

import APP_CONFIG from '../config';

const { cdn_paths: AppCDNPaths } = APP_CONFIG;

const GamesDB = {
    our: [
        {
            title: 'Graveblood',
            id: 'graveblood',
            platform: 'gba',
            description:
                'Городские легенды говорят, что где-то здесь, в лесах Грейвблуда, есть старая проклятая библиотека. Вика и её новые друзья собираются найти это место.',
            release: 'TBD',
            img: {
                icon: '',
                poster: `${AppCDNPaths.games.posters}/graveblood.png`,
                screenshots: [],
            },
            links: {
                itch: 'https://cojam.itch.io/graveblood',
                trailer: 'https://www.youtube.com/watch?v=4tYuLbqQdw0',
            },
        },

        {
            title: 'Орёл или решка?',
            id: 'coin',
            contest: { name: 'Two Weeks Game 7', link: 'https://7.twg.host' },
            platform: 'flash',
            release: 2016,
            description:
                'За долгое время, проведённое в уютной комнатке, ты впервые выходишь на улицу. Судьба играет тобой, и ты попадаешь в таинственную организацию, теперь на твоих плечах лежит решение многих вещей для благополучия организации. А что, если в принятии решений положиться на монетку?',
            img: {
                icon: '',
                poster: `${AppCDNPaths.games.posters}/coin.png`,
                screenshots: [],
            },
            links: {
                dl: 'https://yadi.sk/d/_joaixCM3PJkDr',
            },
        },

        {
            title: 'Jicem: Ниже Нуля',
            id: 'jicem-zero',
            contest: { name: 'Gamiron №11', link: 'https://gcup.ru/forum/83-46421-1' },
            platform: 'flash',
            release: 2016,
            description:
                'Наши герои — исследовательская группа, задача которой — замораживать соседние земли для их дальнейшего изучения и населения. Однако на пути у группы встают другие цивилизации, которым не нравится их деятельность. Один маленький конфликт превращается в большое противостояние.',
            img: {
                icon: '',
                poster: `${AppCDNPaths.games.posters}/jicem-ltz.png`,
                screenshots: [],
            },
            links: {
                dl: 'https://yadi.sk/d/DEgEvZYKtiMPf',
                site: 'https://jicem.cojam.ru',
                itch: 'https://cojam.itch.io/jicem',
                soundtrack: 'jicem-zero',
            },
        },

        {
            title: 'Липкие Сладкие Лифчики',
            id: 'titty',
            contest: { name: 'Two Weeks Game 6', link: 'https://twoweeksgame6.blogspot.com' },
            platform: 'flash',
            release: 2015,
            description:
                'В день, когда наша героиня выбирает обновки для своего гардероба, покой в магазине нарушают пришельцы, пришедшие на Землю, чтобы уничтожить всё нижнее бельё.',
            img: {
                icon: '',
                poster: `${AppCDNPaths.games.posters}/titties.png`,
                screenshots: [],
            },
            links: {
                dl: 'https://yadi.sk/d/PwXrvPoaiUX9D',
                soundtrack: 'titty',
            },
        },

        {
            title: 'Лесси Крип',
            id: 'lessy',
            contest: { name: 'Two Weeks Game 5', link: 'https://twoweeks.github.io/games-db/?get=twg&comp=5' },
            platform: 'flash',
            release: 2015,
            description:
                'Перед отъездом из деревни Лампово Даня, главный герой игры, потерял в лесу свою камеру, подаренную ему родителями. Он отправляется на поиски дорогой игрушки, но вот только прогулка по лесу превращается в настоящий кошмар. Герой местных легенд, ужасный паукообразный монстр Лесси, оказывается реальным. Встреча с ним пугает Даню, отчего тот бросается в бег и попадает в таинственный Дом, ради которого он и посетил деревню; кладбище времени и мост между вселенными, обитель всех самых страшных существ.',
            img: {
                icon: '',
                poster: `${AppCDNPaths.games.posters}/lessy.png`,
                screenshots: [],
            },
            links: {
                dl: 'https://yadi.sk/d/M2dB_NQaeHSjj',
            },
        },

        {
            title: 'Jicem DM',
            id: 'jicem-dm',
            platform: 'flash',
            release: 2015,
            description:
                'Игра является концептуальной демкой игры «Jicem», разработка которой на данный момент отложена на неопределённый срок. Здесь можно поиграть в дезмач с компьютерными противниками на трёх различных уровнях.',
            img: {
                icon: '',
                poster: `${AppCDNPaths.games.posters}/jicem.png`,
                screenshots: [],
            },
            links: {
                dl: 'https://yadi.sk/d/boNVaSbrtiMJE',
                site: 'https://jicem.cojam.ru',
                soundtrack: 'jicem',
            },
        },

        {
            title: 'Creepy Lessons: Последний урок',
            id: 'cl-flash',
            platform: 'flash',
            release: 2013,
            description: 'Твой страх, насколько сильным он может быть? Скоро ты узнаешь об этом, но это будет твоим последним уроком.',
            description_more:
                'Дима гуляет со своей возлюбленной у заброшенной школы. Он долго готовился к этому моменту, но двор школы оказался не лучшим местом для признания в любви. Свет гаснет, и в темноте нечто крадёт Вику. Входящий звонок на телефоне Димы: Вика сообщает, что оказалась внутри школы. Сможет ли главный герой вывести горячо любимую девушку из кишащей нечистью школы?\nИгра представляет из себя 2D-хоррор с видом сверху-вниз. Задача Димы — добраться до Вики, похищенной и спрятанной в одном из классов и вывести её из школы. Казалось-бы, всё очень просто, вот только где она находится, нигде не сказано, а большая часть дверей заперта и нужно искать ключи, чтобы открыть их. Да ещё и сама школа кишит монстрами, единственное оружие против которых — фонарик. Но не вся живность здесь боится света, и от некоторых придётся просто убегать. Стафф, который можно найти по школе помимо дверных ключей, — ускоряющие яблоки и поломанные диски. Есть небольшая вероятность найти целый диск, но пока ещё никто не знает, что на нём. Есть возможность попасть в другое измерение, но это — сущий кошмар, выбраться из которого можно только по истечении определённого времени.',
            img: {
                icon: '',
                poster: `${AppCDNPaths.games.posters}/cl.png`,
                screenshots: [],
            },
            links: {
                dl: 'https://yadi.sk/d/dJD1a4OeCjF8q',
                itch: 'https://cojam.itch.io/cl-flash',
            },
        },

        {
            title: 'Full-3-Style 4',
            id: 'f3s4',
            platform: 'flash',
            release: 2011,
            description:
                'Простенькая игрушка про скейтбординг. Здесь было уделено много внимания кастомизации — здесь можно выбирать одежду, причёски своему скейтеру и даже изменять очертания мира прямо во время игры.',
            img: {
                icon: '',
                poster: `${AppCDNPaths.games.posters}/f3s.png`,
            },
            links: {
                dl: 'https://yadi.sk/d/b_DeNNNQ3PJkuC',
            },
        },
    ],
};

export default GamesDB;
