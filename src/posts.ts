import fetch, { Response } from 'node-fetch';
import cheerio from 'cheerio';

import { postInfo } from './common/types.js';

/**
 * @param {number} title Image id
 * @returns {Promise<postInfo>} Object with image and post information.
 * @description Get post info from rule34.xxx
 * @example getPostR34(123)
*/
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
            link: url,
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

export async function getPostBoru(id: number): Promise<postInfo> {
    const url: string = 'https://xbooru.com/index.php?page=post&s=view&id=' + id; 
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
            link: url,
            id: id,
            character: $('.tag-type-character a').text(),
            artist: $('.tag-type-artist a').text(),
            posted: $('#stats ul li:nth-child(1)').next().text().substring(8,27), // ? /(^\d{4}-\d{2}-\d{1,2} \d{2}:\d{2}:\d{2}).*/
            size: $('#stats ul li:nth-child(2)').next().text().replace('Size: ', ''),
            rating: $('#stats ul li:nth-child(3)').next().text().replace('Rating: ', ''),
            score: $('#stats li span').text(),
            tags: $('#image').attr('alt') 
        };
    }

    return postInfo;
}

export async function getPostRule34Us(id: number): Promise<postInfo> {
    const url: string = 'https://rule34.us/index.php?r=posts/view&id=' + id;
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

    if($('.content_push').length != 0) {
        postInfo = {
            link: id.toString(),
            id: id,
            character: $('.character-tag a').first().text(),//substring(1)
            artist: $('.artist-tag a').text(),
            posted: $('.general-tag span').first().text(),
            size: $('.general-tag').last().text().replace(/Size: | |w|h/g, ""),
            rating: 'Explicit',
            score: $('.general-tag span').last().text(),
            tags: $('.general-tag a').text()
        };
    }

    return postInfo;
}

export async function getPostPaheal(id: number): Promise<postInfo> {
    const url: string = 'https://rule34.paheal.net/post/view/' + id;
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

    if($('#main_image').length != 0) {
        postInfo = {
            link: url,
            id: id,
            character: undefined,
            artist: $('.username').text(),
            posted: $('.image_info time').attr('datetime')?.substring(0, 19).replace('T', ' '), // ? /(^\d{4}-\d{2}-\d{1,2} \d{2}:\d{2}:\d{2}).*/
            size: $('.image_info tr:nth-child(5) td').text().substring(0, 9),
            rating: 'Explicit',
            score: undefined,
            tags: $('.image_info input').attr('value') 
        };
    }

    return postInfo;
}

export async function getPostAllthefallen(id: number): Promise<postInfo> {
    const url: string = 'https://booru.allthefallen.moe/posts/' + id;
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
            link: url,
            id: id,
            character: $('.tag-type-4').attr('data-tag-name'),
            artist: $('.tag-type-1 a').next().text(),
            posted: $('#post-info-date time').attr('datetime')?.substring(0, 19).replace('T', ' '),
            size: $('#post-info-size').text().slice(-13, -4), // ! Nie będzie działać jeśli wymiary będą większe lub mniejsze niż {4}x{4}
            rating: $('#post-info-rating').text().replace('Rating: ', ''),
            score: $('.post-score').text(),
            tags: $('.search-tag').text() // ! Trzeba to rozdzielić spacją
        };
    }

    return postInfo;
}