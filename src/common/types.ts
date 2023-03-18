/*
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
/*
 * @typedef {Object} linksList
 * @property {string} link link to image source
 * @property {string} post link to post
 * @description Object with image and post link.
 */
export interface linksList {
	link: string | undefined;
	post: string | undefined;
}
/*
 * @typedef {Object} postInfo
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
/*
 * @typedef {Object} artistInfo
 * @property {string} name name of artist
 * @property {number} id id of artist
 * @property {string[]} characters characters artist has drawn
 * @property {string[]} copyright copyright information
 * @property {number} posts number of posts artist has made
 * @property {string} url link to artist prifile
 * @property {string} lastPost link to last post artist made
 * @description Object with all artist information.
*/
export interface artistInfo {
  name: string | undefined;
  id: number | undefined;
  characters: string[] | undefined;
  copyright: string[] | undefined;
  posts: number | undefined;
  url: string | undefined;
  lastPost: string | undefined;
}
/*
 * @typedef {Object} comment
 * @property {string} comment comment
 * @property {string} author author of comment
 * @property {string} date date comment was posted
 * @description Object with comment information.
*/
export interface commentList {
	author: string | undefined;
	comment: string | undefined;
	date: string | undefined;
	score: number | undefined;
}