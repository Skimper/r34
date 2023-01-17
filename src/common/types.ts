/**
 * @typedef {Object} imageList
 * @property {string} image link to image source
 * @property {string} title title of image
 * @property {string} post link to post
 * @description Object with image and post link.
 */
export interface imageList {
	image: string | undefined;
	title: string | undefined;
	post: string | undefined;
}
/**
 * @typedef {Object} linksList
 * @property {string} link link to image source
 * @property {string} post link to post
 * @description Object with image and post link.
 */
export interface linksList {
	link: string | undefined;
	post: string | undefined;
}
