import 'mocha';
import { assert, expect } from 'chai';

import {
    getPostR34,
    getPostBoru,
    getPostRule34Us,
    getPostPaheal,
    getPostAllthefallen
} from '../src/posts.js';

describe('Get post from rule34.xxx', () => {
    it('should be a function', () => {
        assert.isFunction(getPostR34);
    });
  
    it('should return promise<postInfo>', () => {
        expect(getPostR34(5982073)).to.be.a('promise');
    });

    it('promise<postInfo> should contain information about the post', async () => {
        const actual = await getPostR34(5982073); // Random img from main page
        expect(actual).to.be.a('object');

        expect(actual.id).to.be.equal(5982073);
        expect(actual.link).to.be.equal('https://rule34.xxx/index.php?page=post&s=view&id=5982073');
        expect(actual.character).to.be.equal('original character');
        expect(actual.artist).to.be.equal('nethuum');
        expect(actual.posted).to.be.equal('2022-04-23 03:10:57');
        expect(actual.size).to.be.equal('1439x1754');
        expect(actual.rating).to.be.equal('Questionable');
        // ? points are not always the same
        // ? too many tags i think
    });

    it('promise<imageList[]> should contain none if it can\'t find an post', async () => {
        const actual = await getPostR34(2137021370);

        expect(actual.id).to.be.equal(undefined);
        expect(actual.link).to.be.equal(undefined);
        expect(actual.character).to.be.equal(undefined);
        expect(actual.artist).to.be.equal(undefined);
        expect(actual.posted).to.be.equal(undefined);
        expect(actual.size).to.be.equal(undefined);
        expect(actual.rating).to.be.equal(undefined);
        expect(actual.score).to.be.equal(undefined);
        expect(actual.tags).to.be.equal(undefined);
    });
});

describe('Get post from xbooru.com', () => {
    it('should be a function', () => {
        assert.isFunction(getPostBoru);
    });
  
    it('should return promise<postInfo>', () => {
        expect(getPostBoru(478706)).to.be.a('promise');
    });

    it('promise<postInfo> should contain information about the post', async () => {
        const actual = await getPostBoru(478706); // Random img from main page
        expect(actual).to.be.a('object');

        expect(actual.id).to.be.equal(478706);
        expect(actual.link).to.be.equal('https://xbooru.com/index.php?page=post&s=view&id=478706');
        expect(actual.character).to.be.equal('elizabeth "betty" rossjennifer waltersred she-hulkshe-hulk');
        expect(actual.artist).to.be.equal('glassfish');
        expect(actual.posted).to.be.equal('2014-04-26 19:41:51');
        expect(actual.size).to.be.equal('870x1036');
        expect(actual.rating).to.be.equal('Explicit');
        // ? points are not always the same
        // ? too many tags i think
    });

    it('promise<imageList[]> should contain none if it can\'t find an post', async () => {
        const actual = await getPostR34(2137021370);

        expect(actual.id).to.be.equal(undefined);
        expect(actual.link).to.be.equal(undefined);
        expect(actual.character).to.be.equal(undefined);
        expect(actual.artist).to.be.equal(undefined);
        expect(actual.posted).to.be.equal(undefined);
        expect(actual.size).to.be.equal(undefined);
        expect(actual.rating).to.be.equal(undefined);
        expect(actual.score).to.be.equal(undefined);
        expect(actual.tags).to.be.equal(undefined);
    });
});

describe('Get post from rule34.paheal.net', () => {
    it('should be a function', () => {
        assert.isFunction(getPostPaheal);
    });
  
    it('should return promise<postInfo>', () => {
        expect(getPostPaheal(5462917)).to.be.a('promise');
    });

    it('promise<postInfo> should contain information about the post', async () => {
        const actual = await getPostPaheal(5462917); // Random img from main page
        expect(actual).to.be.a('object');

        expect(actual.id).to.be.equal(5462917);
        expect(actual.link).to.be.equal('https://rule34.paheal.net/post/view/5462917');
        expect(actual.character).to.be.equal(undefined);
        expect(actual.artist).to.be.equal(undefined);
        expect(actual.posted).to.be.equal('2023-01-22 23:05:54');
        expect(actual.size).to.be.equal('1920x1080');
        expect(actual.rating).to.be.equal(undefined);
        expect(actual.score).to.be.equal(undefined);
        // ? too many tags i think
    });

    it('promise<imageList[]> should contain none if it can\'t find an post', async () => {
        const actual = await getPostR34(2137021370);

        expect(actual.id).to.be.equal(undefined);
        expect(actual.link).to.be.equal(undefined);
        expect(actual.character).to.be.equal(undefined);
        expect(actual.artist).to.be.equal(undefined);
        expect(actual.posted).to.be.equal(undefined);
        expect(actual.size).to.be.equal(undefined);
        expect(actual.rating).to.be.equal(undefined);
        expect(actual.score).to.be.equal(undefined);
        expect(actual.tags).to.be.equal(undefined);
    });
});

describe('Get post from rule34.us', () => {
    it('should be a function', () => {
        assert.isFunction(getPostRule34Us);
    });
  
    it('should return promise<postInfo>', () => {
        expect(getPostRule34Us(6510951)).to.be.a('promise');
    });

    it('promise<postInfo> should contain information about the post', async () => {
        const actual = await getPostRule34Us(6510951); // Random img from main page
        expect(actual).to.be.a('object');

        expect(actual.id).to.be.equal(6510951);
        expect(actual.link).to.be.equal('https://rule34.us/index.php?r=posts/view&id=6510951');
        expect(actual.character).to.be.equal('toph bei fong');
        expect(actual.artist).to.be.equal('superspoe');
        // ? shitty date format
        expect(actual.size).to.be.equal('2229x3106');
        expect(actual.rating).to.be.equal('Explicit');
        // ? points are not always the same
        // ? too many tags i think
    });

    it('promise<imageList[]> should contain none if it can\'t find an post', async () => {
        const actual = await getPostR34(2137021370);

        expect(actual.id).to.be.equal(undefined);
        expect(actual.link).to.be.equal(undefined);
        expect(actual.character).to.be.equal(undefined);
        expect(actual.artist).to.be.equal(undefined);
        expect(actual.posted).to.be.equal(undefined);
        expect(actual.size).to.be.equal(undefined);
        expect(actual.rating).to.be.equal(undefined);
        expect(actual.score).to.be.equal(undefined);
        expect(actual.tags).to.be.equal(undefined);
    });
});

describe('Get post from booru.allthefallen.moe', () => {
    it('should be a function', () => {
        assert.isFunction(getPostAllthefallen);
    });
  
    it('should return promise<postInfo>', () => {
        expect(getPostAllthefallen(445262)).to.be.a('promise');
    });

    it('promise<postInfo> should contain information about the post', async () => {
        const actual = await getPostAllthefallen(445262); // Random img from main page
        expect(actual).to.be.a('object');

        expect(actual.id).to.be.equal(445262);
        expect(actual.link).to.be.equal('https://booru.allthefallen.moe/posts/445262');
        expect(actual.character).to.be.equal('marcy_wu');
        expect(actual.artist).to.be.equal('fluuzoid94');
        expect(actual.posted).to.be.equal('2023-01-22 17:24-05');
        expect(actual.size).to.be.equal('1390x1195');
        expect(actual.rating).to.be.equal('Explicit');
        // ? points are not always the same
        // ? too many tags i think
    });

    it('promise<imageList[]> should contain none if it can\'t find an post', async () => {
        const actual = await getPostR34(2137021370);

        expect(actual.id).to.be.equal(undefined);
        expect(actual.link).to.be.equal(undefined);
        expect(actual.character).to.be.equal(undefined);
        expect(actual.artist).to.be.equal(undefined);
        expect(actual.posted).to.be.equal(undefined);
        expect(actual.size).to.be.equal(undefined);
        expect(actual.rating).to.be.equal(undefined);
        expect(actual.score).to.be.equal(undefined);
        expect(actual.tags).to.be.equal(undefined);
    });
});