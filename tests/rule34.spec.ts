import 'mocha';
import { assert, expect } from 'chai';

import { getImagesR34, getImagesBoru, 
    getImagesRule34Us, getImagesPaheal, 
    getImagesAllthefallen } from '../src/rule34.js';

import { getRandomImage } from '../src/random.js';

describe('Get image from rule34.xxx', () => {
    it('should be a function', () => {
        assert.isFunction(getImagesR34);
    });
  
    it('should return promise<imageList[]>', () => {
        expect(getImagesR34('rainbow six siege')).to.be.a('promise');
    });

    it('promise<imageList[]> should contain information about the image', async () => {
        const actual = await getImagesR34('rainbow six siege');
        expect(actual).to.be.a('array');

        expect(actual[0]).to.have.property('image');
        expect(actual[0]).to.have.property('title');
        expect(actual[0]).to.have.property('post');

        expect(actual[0].image).to.have.string('https://api-cdn.rule34.xxx/');
        expect(actual[0].title).to.have.string('rainbow_six_siege');
        expect(actual[0].post).to.have.string('rule34.xxx/');
    });

    it('promise<imageList[]> should contain information about the image if is only one page', async () => {
        const actual = await getImagesR34('vee');
        expect(actual).to.be.a('array');
        expect(actual[0]).to.have.property('image');
        expect(actual[0]).to.have.property('title');
        expect(actual[0]).to.have.property('post');

        expect(actual[0].image).to.have.string('https://api-cdn.rule34.xxx/');
        expect(actual[0].title).to.have.string('vee');
        expect(actual[0].post).to.have.string('rule34.xxx/');
    });

    it('promise<imageList[]> should contain none if it can\'t find an image', async () => {
        const actual = await getImagesBoru('asfraewtv5y5vsfsdwve');
        expect(actual).to.be.a('array');
        expect(actual[0]).to.have.property('image');
        expect(actual[0]).to.have.property('title');
        expect(actual[0]).to.have.property('post');

        expect(actual[0].image).to.have.string('none');
        expect(actual[0].title).to.have.string('none');
        expect(actual[0].post).to.have.string('none');
    });
});

describe('Get image from xbooru.com', () => {
    it('should be a function', () => {
        assert.isFunction(getImagesBoru);
    });
  
    it('should return promise<imageList[]>', () => {
        expect(getImagesBoru('rainbow six siege')).to.be.a('promise');
    }); 

    it('promise<imageList[]> should contain information about the image', async () => {
        const actual = await getImagesBoru('rainbow six siege');
        expect(actual).to.be.a('array');
        expect(actual[0]).to.have.property('image');
        expect(actual[0]).to.have.property('title');
        expect(actual[0]).to.have.property('post');

        expect(actual[0].image).to.have.string('https://img.xbooru.com/');
        expect(actual[0].title).to.have.string('rainbow_six_siege');
        expect(actual[0].post).to.have.string('https://xbooru.com/');
    });

    it('promise<imageList[]> should contain information about the image if is only one page', async () => {
        const actual = await getImagesBoru('andrias leviathan');
        expect(actual).to.be.a('array');
        expect(actual[0]).to.have.property('image');
        expect(actual[0]).to.have.property('title');
        expect(actual[0]).to.have.property('post');

        expect(actual[0].image).to.have.string('https://img.xbooru.com/');
        expect(actual[0].title).to.have.string('andrias_leviathan');
        expect(actual[0].post).to.have.string('https://xbooru.com/');
    });

    it('promise<imageList[]> should contain none if it can\'t find an image', async () => {
        const actual = await getImagesBoru('asfraewtv5y5vsfsdwve');
        expect(actual).to.be.a('array');
        expect(actual[0]).to.have.property('image');
        expect(actual[0]).to.have.property('title');
        expect(actual[0]).to.have.property('post');

        expect(actual[0].image).to.have.string('none');
        expect(actual[0].title).to.have.string('none');
        expect(actual[0].post).to.have.string('none');
    });
});

describe('Get image from rule34.us', () => {
    it ('should be a function', () => {
        assert.isFunction(getImagesRule34Us);
    });

    it('should return promise<imageList[]>', () => {
        expect(getImagesRule34Us('rainbow six siege')).to.be.a('promise');
    });

    it('promise<imageList[]> should contain information about the image', async () => {
        const actual = await getImagesRule34Us('rainbow six siege');
        expect(actual).to.be.a('array');
        expect(actual[0]).to.have.property('image');
        expect(actual[0]).to.have.property('title');
        expect(actual[0]).to.have.property('post');

        expect(actual[0].image).to.have.string('rule34.us/');
        expect(actual[0].title).to.have.string('rainbow_six_siege');
        expect(actual[0].post).to.have.string('rule34.us/');
    });

    it('promise<imageList[]> should contain information about the image if is only one page', async () => {
        const actual = await getImagesRule34Us('andrias leviathan');
        expect(actual).to.be.a('array');
        expect(actual[0]).to.have.property('image');
        expect(actual[0]).to.have.property('title');
        expect(actual[0]).to.have.property('post');

        expect(actual[0].image).to.have.string('https://img2.rule34.us/');
        expect(actual[0].title).to.have.string('andrias_leviathan');
        expect(actual[0].post).to.have.string('https://rule34.us/');
    });

    it('promise<imageList[]> should contain none if it can\'t find an image', async () => {
        const actual = await getImagesRule34Us('asfraewtv5y5vsfsdwve');
        expect(actual).to.be.a('array');
        expect(actual[0]).to.have.property('image');
        expect(actual[0]).to.have.property('title');
        expect(actual[0]).to.have.property('post');

        expect(actual[0].image).to.have.string('none');
        expect(actual[0].title).to.have.string('none');
        expect(actual[0].post).to.have.string('none');
    });
});

describe('Get image from rule34.paheal.net', () => {
    it ('should be a function', () => {
        assert.isFunction(getImagesPaheal);
    });

    it('should return promise<imageList[]>', () => {
        expect(getImagesPaheal('rainbow six siege')).to.be.a('promise');
    });

    it('promise<imageList[]> should contain information about the image', async () => {
        const actual = await getImagesPaheal("Tom Clancy's Rainbow Six Siege");
        expect(actual).to.be.a('array');
        expect(actual[0]).to.have.property('image');
        expect(actual[0]).to.have.property('title');
        expect(actual[0]).to.have.property('post');

        expect(actual[0].image).to.have.string('.paheal.net/');
        expect(actual[0].title).to.have.string("Tom_Clancy's_Rainbow_Six_Siege");
        expect(actual[0].post).to.have.string('.paheal.net/');
    });

    it('promise<imageList[]> should contain information about the image if is only one page', async () => {
        const actual = await getImagesPaheal('eberwolf');
        expect(actual).to.be.a('array');
        expect(actual[0]).to.have.property('image');
        expect(actual[0]).to.have.property('title');
        expect(actual[0]).to.have.property('post');

        expect(actual[0].image).to.have.string('paheal.net/');
        expect(actual[0].title).to.have.string('eberwolf');
        expect(actual[0].post).to.have.string('paheal.net/');
    });

    it('promise<imageList[]> should contain none if it can\'t find an image', async () => {
        const actual = await getImagesPaheal('asfraewtv5y5vsfsdwve');
        expect(actual).to.be.a('array');
        expect(actual[0]).to.have.property('image');
        expect(actual[0]).to.have.property('title');
        expect(actual[0]).to.have.property('post');

        expect(actual[0].image).to.have.string('none');
        expect(actual[0].title).to.have.string('none');
        expect(actual[0].post).to.have.string('none');
    });
});

describe('Get image from booru.allthefallen.moe', () => {
    it ('should be a function', () => {
        assert.isFunction(getImagesAllthefallen);
    });

    it('should return promise<imageList[]>', () => {
        expect(getImagesAllthefallen('rainbow six siege')).to.be.a('promise');
    });

    it('promise<imageList[]> should contain information about the image', async () => {
        const actual = await getImagesAllthefallen('rainbow six siege');
        expect(actual).to.be.a('array');
        expect(actual[0]).to.have.property('image');
        expect(actual[0]).to.have.property('title');
        expect(actual[0]).to.have.property('post');

        expect(actual[0].image).to.have.string('booru.allthefallen.moe/');
        expect(actual[0].title).to.have.string('rainbow_six_siege');
        expect(actual[0].post).to.have.string('booru.allthefallen.moe/');
    });

    it('promise<imageList[]> should contain information about the image if is only one page', async () => {
        const actual = await getImagesAllthefallen('eberwolf');
        expect(actual).to.be.a('array');
        expect(actual[0]).to.have.property('image');
        expect(actual[0]).to.have.property('title');
        expect(actual[0]).to.have.property('post');

        expect(actual[0].image).to.have.string('booru.allthefallen.moe/');
        expect(actual[0].title).to.have.string('eberwolf');
        expect(actual[0].post).to.have.string('booru.allthefallen.moe/');
    });

    it('promise<imageList[]> should contain none if it can\'t find an image', async () => {
        const actual = await getImagesAllthefallen('asfraewtv5y5vsfsdwve');
        expect(actual).to.be.a('array');
        expect(actual[0]).to.have.property('image');
        expect(actual[0]).to.have.property('title');
        expect(actual[0]).to.have.property('post');

        expect(actual[0].image).to.have.string('none');
        expect(actual[0].title).to.have.string('none');
        expect(actual[0].post).to.have.string('none');
    });
});

describe('Get random image', () => {
    it ('should be a function', () => {
        assert.isFunction(getRandomImage);
    });

    it('should return promise<imageList[]>', () => {
        expect(getRandomImage()).to.be.a('promise');
    });

    it('promise<imageList[]> should contain information about the image', async () => {
        const actual = await getRandomImage();
        expect(actual).to.be.a('array');
        expect(actual[0]).to.have.property('image');
        expect(actual[0]).to.have.property('title');
        expect(actual[0]).to.have.property('post');

        expect(actual[0].image).to.have.string('rule34.xxx/');
        expect(actual[0].post).to.have.string('rule34.xxx/');
    });
});