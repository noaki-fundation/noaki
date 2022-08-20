import type { NextApiRequest, NextApiResponse } from 'next';

type Platform = {
    id: string;
    name: string;
    logo: string;
    label: string;
    bgColor: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Platform[]>
) {
    const spotify = {
        id: 'spotify',
        name: 'Spotify',
        logo: '/spotify.png',
        label: 'Spotify',
        bgColor: '#084B20'
    };

    const appleMusic = {
        id: 'appleMusic',
        name: 'Apple Music',
        logo: '/apple_music.svg',
        label: 'Apple Music',
        bgColor: '#6B141F'
    };

    res.status(200).json([spotify, appleMusic]);
}