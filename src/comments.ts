import fetch, { Response } from "node-fetch";
import cheerio from "cheerio";

import { commentList } from "./common/types.js";

/**
 * @param {number} id Image id
 * @returns {Promise<comment>} Object with comments list.
 * @description Get comments from rule34.xxx
 * @example getCommentsR34(123)
*/
export async function getCommentsR34(id: number): Promise<commentList[]> {
    const url: string = 'https://rule34.xxx/index.php?page=post&s=view&id=' + id;
    const settings: object = { method: 'GET' };

    const comments: commentList[] = [];

    let page: Response;
    try {
        page = await fetch(url, settings).catch((error: Error) => {
            throw new Error(error.message);
        });
    } catch (error) {
        comments.push({
            author: undefined,
            comment: undefined,
            date: undefined,
            score: undefined
        });
        return comments;
    }

    const body: string = await page.text();
    const $: cheerio.Root = cheerio.load(body);

    if($('#comment-list div').length != 0) {
        $('#comment-list div[id^=\'c\']').each((i, element) => {
            comments.push({
                author: $(element).find('.col1 a').first().text(),
                comment: $(element).find('.col2').text().replace(/(\r\n|\n|\r)/gm, ""),
                date: $(element).find('b').text().substring(11,30),
                score: parseInt($(element).find('.col1 b a').text())
            });
        });
    } else {
        comments.push({
            author: undefined,
            comment: undefined,
            date: undefined,
            score: undefined
        });
    }

    return comments;
}

/**
 * @param {number} id Image id
 * @returns {Promise<comment>} Object with comments list.
 * @description Get comments from xbooru.com
 * @example getCommentsE621(123)
*/
export async function getCommentsBoru(id: number): Promise<commentList[]> {
    const url: string = 'https://xbooru.com/index.php?page=post&s=view&id=' + id;
    const settings: object = { method: 'GET' };

    const comments: commentList[] = [];

    let page: Response;
    try {
        page = await fetch(url, settings).catch((error: Error) => {
            throw new Error(error.message);
        });
    } catch (error) {
        comments.push({
            author: undefined,
            comment: undefined,
            date: undefined,
            score: undefined
        });
        return comments;
    }

    const body: string = await page.text();
    const $: cheerio.Root = cheerio.load(body);

    console.log($('#right-col div').length);

    if($('.content div[id^=\'c\']').length != 0) { // TODO: Start here tomorrow !
        $('.content div[id^=\'c\']').each((i, element) => {
            comments.push({
                author: $(element).find('a').first().text(),
                comment: $(element).find('.col2').text().replace(/(\r\n|\n|\r)/gm, ""),
                date: $(element).find('b').text().substring(10,29),
                score: parseInt($(element).find('.col1 b a').text())
            });
        });
    } else {
        comments.push({
            author: undefined,
            comment: undefined,
            date: undefined,
            score: undefined
        });
    }

    return comments;
}