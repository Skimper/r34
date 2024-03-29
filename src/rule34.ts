import fetch, { Response } from 'node-fetch';
import cheerio from 'cheerio';

import { imageList, linksList } from './common/types.js';

/**
 * @param {string} title Image title
 * @param {number} [amount=1] Amount of images to get
 * @returns {Promise<imageList[]>} Object with image and post link.
 * @description Get random image from rule34.xxx
 * @example getImagesR34('your title'), getImagesR34('your_title')
*/
export async function getImagesR34(title: string, amount: number = 1): Promise<imageList[]> {
    const keyword: string = title.split(' ').join('_');
    const url: string = 'https://rule34.xxx/index.php?page=dapi&s=post&q=index&limit=1000&tags='+keyword+'&json=1';
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

    let json: object = {};
    try {
        json = await page.json() as object;
    }
    catch (error) {
        imageList.push({
            image: 'none',
            title: 'none',
            post: 'none'
        });
    }

    const count: number = Object.keys(json).length;

    if(amount > count) amount = count;

    if (count !== 0) {
        for(let i = 0; i < amount; i++) {
            const number: number = Math.floor(Math.random() * count);
            const image: string = json[number as keyof typeof json]['file_url'];
            const url: string = 'https://rule34.xxx/index.php?page=post&s=view&id='+json[number as keyof typeof json]['id'];
            
            imageList.push({
                image: image,
                title: keyword,
                post: url
            });
        }
    }

    return imageList;
}

/**
 * @param {string} title Image title
 * @param {number} [amount=1] Amount of images to get
 * @returns {Promise<imageList[]>} Object with image and post link.
 * @description Get random image from xbooru.com.
 * @example getImagesBoru('your title'), getImagesBoru('your_title')
*/
export async function getImagesBoru(title: string, amount: number = 1): Promise<imageList[]> {
    const keyword: string = title.split(' ').join('_');
    const url: string = 'https://xbooru.com/index.php?page=dapi&s=post&q=index&limit=100&tags='+keyword+'&json=1';
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

    let json: object = {};
    try {
        json = await page.json() as object;
    }
    catch (error) {
        imageList.push({
            image: 'none',
            title: 'none',
            post: 'none'
        });
    }

    const count: number = Object.keys(json).length;

    if(amount > count) amount = count;
    
    if (count !== 0) {
        for(let i = 0; i < amount; i++) {
            const number: number = Math.floor(Math.random() * count);
            const image: string = 'https://img.xbooru.com//images/'+json[number as keyof typeof json]['directory']+'/'+json[number as keyof typeof json]['image'];
            const post: string = 'https://xbooru.com/index.php?page=post&s=view&id='+json[number as keyof typeof json]['id'];
            
            imageList.push({
                image: image,
                title: keyword,
                post: post
            });
        }
    }

    return imageList;
}

/**
 * @param {string} title Image title
 * @param {number} [amount=1] Amount of images to get
 * @returns {Promise<imageList[]>} Object with image and post link.
 * @description Get random image from rule34.us.
 * @example getImagesRule34Us('your title'), getImagesRule34Us('your_title')
*/
export async function getImagesRule34Us(title: string, amount: number = 1): Promise<imageList[]> {
    const keyword: string = title.split(' ').join('_');
    let url: string = 'https://rule34.us/index.php?r=posts/index&q='+keyword;
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
    let body: string = await page.text();
    let $: cheerio.Root = cheerio.load(body);

    if($('.pagination a').length !== 0) {
        const last: string = $('.pagination').children('a').last()
                                                           .toString()
                                                           .replace(/\D/g, "");

        const randomPage: number = Math.floor(Math.random() * Number(last));

        url = 'https://rule34.us/index.php?r=posts/index&q='+keyword+'+&page='+randomPage;

        page = await fetch(url, settings).catch((error: Error) => {
            throw new Error(error.message);
        });
        body = await page.text();
        $ = cheerio.load(body);
    }

    const links: linksList[] = [];

    if($('.thumbail-container div').length !== 0) {
        $('.thumbail-container div').each((i, element) => {
            const post: string | undefined = $(element).find('a').attr('href');
            const image: string | undefined = $(element).find('img').attr('src');

            links.push({link: image, post: post});
        });

        if(amount > links.length) amount = links.length;

        for(let i = 0; i < amount; i++) {
            const rand: number = Math.floor(Math.random() * links.length);

            imageList.push({
                image: links[rand].link,
                title: keyword,
                post: links[rand].post
            });
        }
    } else {
        imageList.push({
            image: 'none',
            title: 'none',
            post: 'none'
        });
    }

    return imageList;
}

/**
 * @param {string} title Image title
 * @param {number} [amount=1] Amount of images to get
 * @returns {Promise<imageList[]>} Object with image and post link.
 * @description Get random image from rule34.paheal.net.
 * @example getImagesPaheal('your title'), getImagesPaheal('your_title')
**/
export async function getImagesPaheal(title: string, amount: number = 1): Promise<imageList[]> {
    const keyword: string = title.split(' ').join('_');
    let url: string = 'https://rule34.paheal.net/post/list/'+keyword+'/1';
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
    let body: string = await page.text();
    let $: cheerio.Root = cheerio.load(body);

    if($('.pagination').length !== 0) {
        const last: string = $('.blockbody').children('a').next().next()
                                                          .toString()
                                                          .replace(/\D/g, "");

        const randomPage = Math.floor(Math.random() * Number(last));

        url = 'https://rule34.paheal.net/post/list/'+keyword+'/'+randomPage;
        
        page = await fetch(url, settings).catch((error: Error) => {
            throw new Error(error.message);
        });
        body = await page.text();

        $ = cheerio.load(body);
    }

    const links: linksList[] = [];
    
    if($('.shm-image-list').length !== 0) {
        $('.shm-thumb').each((i, element) => {
            const post: string | undefined = $(element).find('a').attr('href');
            const image: string | undefined = $(element).find('img').attr('src');

            links.push({link: image, post: 'https://rule34.paheal.net'+post});
        });

        if(amount > links.length) amount = links.length;

        for(let i = 0; i < amount; i++) {
            const rand: number = Math.floor(Math.random() * links.length);

            imageList.push({
                image: links[rand].link,
                title: keyword,
                post: links[rand].post
            });
        }
    } else {
        imageList.push({
            image: 'none',
            title: 'none',
            post: 'none'
        });
    }

    return imageList;
}

/**
 * @param {string} title Image title
 * @param {number} [amount=1] Amount of images to get
 * @returns {Promise<imageList[]>} Object with image and post link.
 * @description Get random image from booru.allthefallen.moe.
 * @example getImagesAllthefallen('your title'), getImagesAllthefallen('your_title')
**/
export async function getImagesAllthefallen(title: string, amount: number = 1): Promise<imageList[]> {
    const keyword: string = title.split(' ').join('_');
    let url: string = 'https://booru.allthefallen.moe/posts?tags='+keyword;
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
    let body: string = await page.text();
    let $: cheerio.Root = cheerio.load(body);

    if($('.paginator a').length == 6) {
        const last: string = $('.paginator').children('a:nth-child(8)').text().toString()
                                                                       .replace(/\D/g, "");

        const randomPage: number = Math.floor(Math.random() * Number(last));

        url = 'https://booru.allthefallen.moe/posts?tags='+keyword+'&page='+randomPage;

        page = await fetch(url, settings).catch((error: Error) => {
            throw new Error(error.message);
        });
        body = await page.text();

        $ = cheerio.load(body);
    }

    const links: linksList[] = [];

    console.log($('.posts-container article').length);

    if($('.posts-container article').length != 0) {
        $('.post-preview').each((i, element) => {
            const post: string | undefined = $(element).find('a').attr('href');
            const image: string | undefined = $(element).find('source').attr('srcset')?.split(' ')[2];

            links.push({link: image, post: 'https://booru.allthefallen.moe'+post});
        });

        if(amount > links.length) amount = links.length;

        console.log(links.length + ' ' + amount);

        for(let i = 0; i < amount; i++) {
            const rand: number = Math.floor(Math.random() * links.length);

            imageList.push({
                image: links[rand].link,
                title: keyword,
                post: links[rand].post
            });
        }
    } else {
        imageList.push({
            image: 'none',
            title: 'none',
            post: 'none'
        });
    }

    return imageList;
}