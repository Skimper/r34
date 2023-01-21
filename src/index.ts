import { getImagesR34, 
         getImagesBoru, 
         getImagesRule34Us, 
         getImagesPaheal,
         getImagesAllthefallen } from './rule34.js';
         
import { getPostR34,
         getPostBoru,
         getPostRule34Us,
         getPostPaheal,
         getPostAllthefallen } from './posts.js';

import { getRandomImage } from './random.js';

export function helloWorld(): string {
    const msg = 'Rule #34 There is porn of it. No exceptions!';
    return msg;
}

export default {
    helloWorld, 
    getImagesR34,
    getImagesBoru,
    getImagesRule34Us,
    getImagesPaheal,
    getImagesAllthefallen,

    getPostR34,
    getPostBoru,
    getPostRule34Us,
    getPostPaheal,
    getPostAllthefallen,

    getRandomImage
};