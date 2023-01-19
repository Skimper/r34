import fetch, { Response } from 'node-fetch';
import cheerio from 'cheerio';

import { postInfo } from './common/types.js';

export async function getPostR34(id: number): Promise<postInfo> {
    const url: string = 'https://rule34.xxx/index.php?page=post&s=view&id=' + id;
    const settings: object = { method: 'GET' };

    let postInfo: postInfo = {
        link: undefined,
        id: undefined,
        character: undefined,
        artist: undefined,
        posted: undefined,
        size: undefined,
        rating: undefined,
        score: undefined,
        tags: undefined
    };

    let page: Response;
    try {
        page = await fetch(url, settings).catch((error: Error) => {
            throw new Error(error.message);
        });
    } catch (error) {
        return postInfo;
    }

    const body: string = await page.text();
    const $: cheerio.Root = cheerio.load(body);

    if($('#image').length != 0) {
        postInfo = {
            link: id.toString(),
            id: id,
            character: $('.tag-type-character a').text().substring(1),
            artist: $('.tag-type-artist a').next().text(),
            posted: $('#stats ul li:nth-child(1)').next().text().substring(9,28), // ? /(^\d{4}-\d{2}-\d{1,2} \d{2}:\d{2}:\d{2}).*/
            size: $('#stats ul li:nth-child(2)').next().text().replace('Size: ', ''),
            rating: $('#stats ul li:nth-child(3)').next().text().replace('Rating: ', ''),
            score: $('#stats li span').text(),
            tags: $('#image').attr('alt') 
        };
    }

    return postInfo;
}