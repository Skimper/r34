import fetch, { Response } from 'node-fetch';
import cheerio from 'cheerio';

import { imageList } from './common/types.js';

/**
 * @returns {Promise<imageList[]>} Object with image and post link.
 * @description Get random image from rule34.xxx.
 * @example getRandomImage()
**/
export async function getRandomImage(): Promise<imageList[]> {
    const url: string = 'https://rule34.xxx/index.php?page=post&s=random';
    const settings: object = { method: "GET" };

    const imageList: imageList[] = [];

    let page: Response;
    try {
        page = await fetch(url, settings).catch((error: Error) => {
            throw new Error(error.message);
        });
    } catch (error) {
        imageList.push({
            image: 'none',
            title: 'none',
            post: 'none'
        });
        return imageList;
    }
    
    const body: string = await page.text();
    const $: cheerio.Root = cheerio.load(body);

    if($('#image').length !== 0) {
        const image: string | undefined = $('#image').attr('src');
        let title: string | undefined = $('.tag-type-character a').text().substring(1);
        if(title == '') {
            title='none';
        } else {
            title = title.split('?').join(' ');
        }
        const post: string | undefined = page.url;

        imageList.push({
            image: image,
            title: title,
            post: post
        });
    } else {
        imageList.push({
            image: 'none',
            title: 'none',
            post: 'none'
        });
    }

    return imageList;
}