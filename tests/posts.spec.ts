import 'mocha';
import { assert, expect } from 'chai';

import {
    getPostR34,
} from '../src/posts.js';

describe('Get post from rule34.xxx', () => {
    it('should be a function', () => {
        assert.isFunction(getPostR34);
    });
  
    it('should return promise<postInfo>', () => {
        expect(getPostR34(1)).to.be.a('promise');
    });

    it('promise<postInfo> should contain information about the image', async () => {
        const actual = await getPostR34(1);
        expect(actual).to.be.a('object');

        expect(actual.id).to.be.equal('1');
        expect(actual.link).to.be.equal(1);
        expect(actual.character).to.be.equal('character request');
        expect(actual.artist).to.be.equal('Anonymous');
        expect(actual.posted).to.be.equal('2010-11-12 19:06:29');
        expect(actual.size).to.be.equal('2180x3035');
        expect(actual.rating).to.be.equal('Explicit');
        // ? points are not always the same
        // ? too many tags i think
    });

    it('promise<imageList[]> should contain none if it can\'t find an image', async () => {
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