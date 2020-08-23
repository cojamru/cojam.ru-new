export type FeatTypeItemType = {
    nick: string;
    link: string;
};

export type FeatType = FeatTypeItemType[];

export type ImagesType = {
    cover: string;
    thumb: string;
};

export type TrackListItemType = {
    title: string;
    artist?: string;
    feat?: string[];
    description?: string;
};

export type TrackListType = TrackListItemType[];

export type EmbedType = {
    type: 'bc' | 'sc';
    ID: number;
};

export type LinksType = {
    game?: string;
    bc?: {
        user: string;
        album: string;
    };
    sc?: string;
    vk?: {
        com: string;
        ID: string;
    };
    yt?: string;
};

export type AlbumItemType = {
    title: string;
    id?: string;
    artist: string;
    feat?: FeatType;
    description?: string;
    type?: string;
    release?: string;
    img: ImagesType;
    tracklist: TrackListType;
    embed: EmbedType;
    links: LinksType;
};

export type SinglesItemType = any;

export type MusicDBType = {
    albums: AlbumItemType[];
    singles: SinglesItemType[];
};
