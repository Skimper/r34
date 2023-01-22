import fetch, { Response } from 'node-fetch';
import cheerio from 'cheerio';

import { postInfo } from './common/types.js';

/**
 * @param {number} id Image id
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
        let rating: string;
        if($('#stats ul li').length == 5){
            rating = $('#stats ul li:nth-child(3)').next().text().replace('Rating: ', '');
        } else {
            rating = $('#stats ul li:nth-child(4)').next().text().replace('Rating: ', '');
        }

        postInfo = {
            link: url,
            id: id,
            character: $('.tag-type-character a').text().substring(1).replace(/\?/gd, " "),
            artist: $('.tag-type-artist a').text().substring(1).replace(/\?/gd, " "),
            posted: $('#stats ul li:nth-child(1)').next().text().substring(9,28),
            size: $('#stats ul li:nth-child(2)').next().text().replace('Size: ', ''),
            rating: rating,
            score: $('#stats li span').text(),

            tags: $('#image').attr('alt') 
        };
    }

    return postInfo;
}

/**
 * @param {number} id Image id
 * @returns {Promise<postInfo>} Object with image and post information.
 * @description Get post info from xbooru.com
 * @example getPostBoru(123)
*/
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

/**
 * @param {number} id Image id
 * @returns {Promise<postInfo>} Object with image and post information.
 * @description Get post info from rule34.us
 * @example getPostRule34Us(123)
*/
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
            tags: $('.content_push img').attr('alt')?.replace(/,/g, "")
        };
    }

    return postInfo;
}

/**
 * @param {number} id Image id
 * @returns {Promise<postInfo>} Object with image and post information.
 * @description Get post info from rule34.paheal.net
 * @example getPostPaheal(123)
*/
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
        const size: string = $('.image_info tr:nth-child(5) td').text();
        postInfo = {
            link: url,
            id: id,
            character: undefined,
            artist: undefined,
            posted: $('.image_info time').attr('datetime')?.substring(0, 19).replace('T', ' '), // ? /(^\d{4}-\d{2}-\d{1,2} \d{2}:\d{2}:\d{2}).*/
            size: size.substring(0, size.indexOf(' ')),
            rating: undefined,
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
        const size: string | undefined = $('#post-info-size').text();
        const res = size.split('(').pop()?.split(')')[0];

        postInfo = {
            link: url,
            id: id,
            character: $('.tag-type-4').attr('data-tag-name'),
            artist: $('.tag-type-1 a').next().text(),
            posted: $('#post-info-date time').attr('datetime')?.substring(0, 19).replace('T', ' '),
            size: res,
            rating: $('#post-info-rating').text().replace('Rating: ', ''),
            score: $('.post-score').text(),
            tags: $('.tag-type-0').attr('data-tag-name') // ! Trzeba to rozdzielić spacją
        };
    }

    return postInfo;
}