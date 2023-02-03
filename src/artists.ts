import fetch, { Response } from 'node-fetch';
import cheerio from 'cheerio';

import { artistinfo, artistInfo } from './common/types.js';

/*
 * @param {name} Artist name
 * @returns {Promise<artistInfo>} Information about artist
 * @description ...
 * @example getArtistR34('name or id')
*/
export async function getArtistR34(artist: String | number): Promise<artistinfo>{
    if (artist typeof String) {
      const url = 'https://rule34.xxx/index.php?page=artist&s=list&search=' + artist;
    } else {
      const url: string = 'https://rule34.xxx/index.php?page=artist&s=view&id' + artist;
    }
    const settings: object = { method: 'GET' }; 

    let artistInfo: artistinfo = {
      name = undefined,
      id = undefined,
      characters = undefined,
      copyright: undefined,
      posts: undefined,
      posts: undefined,
      url: undefined,
      lastPost: undefined
    } 

    let page: Response;
    try {
      page = await fetch(url, settings).catch((error: Error) => {
        throw new Error(error.message)
      });
    } catch (error) {
        return artistInfo; 
    }
    
    const body: string = await page.text();
    const $: cheerio.Root = cheerio.load(body);

    
  }
}
