import axios from 'axios';
import { NextResponse }  from 'next/server'

// const baseUrl = 'https://api.mangadex.org';
// const mangaID = 'a1c7c817-4e59-43b7-9365-09675a149a6f'

// export const getLatestOnePieceChapter = async () => {
//     return await axios({
//         method: 'GET',
//         url: `${baseUrl}/manga/${mangaID}/feed?order[chapter]=desc&limit=1`,
//     });
// }

const DATA_SOURCE_URL = 'https://api.mangadex.org/manga/a1c7c817-4e59-43b7-9365-09675a149a6f/feed?order[chapter]=desc&limit=1';

export async function GET() {
    const response = await fetch(DATA_SOURCE_URL);
    const data = await response.json();
    return NextResponse.json(data);
}