import { getImagesR34, 
         getImagesBoru, 
         getImagesRule34Us, 
         getImagesPaheal,
         getImagesAllthefallen,
         getRandomImage } from './rule34.js';
         
import {
    getPostR34, } from './posts.js';

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
    getRandomImage,

    getPostR34,
};