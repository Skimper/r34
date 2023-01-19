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
/**
 * @typedef {Object} post
 * @property {string} link link to image source
 * @property {number} id id of post
 * @property {string} character character in image
 * @property {string} artist artist of image
 * @property {string} posted date posted
 * @property {string} size size of image
 * @property {string} rating rating of image
 * @property {string} score score of image
 * @property {string} tags tags of image
 * @description Object with all post information.
 */
export interface postInfo {
	link: string | undefined;
	id: number | undefined;
	character: string | undefined;
	artist: string | undefined;
	posted: string | undefined;
	size: string | undefined;
	rating: string | undefined;
	score: string | undefined;
	tags: string | undefined;
}