import axios from 'axios';

const baseUrl = 'https://api.mangadex.org';
const title = 'One Piece';
const mangaID = 'a1c7c817-4e59-43b7-9365-09675a149a6f'

export const getLatestOnePieceChapter = async () => {
    return await axios({
        method: 'GET',
        url: `${baseUrl}/manga/${mangaID}/feed?order[chapter]=desc&limit=1`,
    });
}
