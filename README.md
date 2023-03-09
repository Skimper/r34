# 🔥 R34 for JavaScript
**Tool for getting rule34 images from the most popular sites**<br />
Written for one discord bot but may be useful to someone else. If something stops working I will fix it.

## ⚙️ Features
Search and download
* Random images
* Find images by name/tag/author

from ...
* rule34.xxx
* rule34.us
* rule34.paheal.net
* booru.allthefallen.moe
* xbooru.com

## 🎓 How to use

### Install module
```
npm i r34
```

### Find by name / tags / author
```js
import r34 from "r34";

const data = await r34.getImagesR34("title");
console.log(data[0]);

const data = await r34.getImagesBoru("title");
console.log(data[0]);

const data = await r34.getImagesRule34Us("title");
console.log(data[0]);

const data = await r34.getImagesRule34Paheal("title");
console.log(data[0]);

// This site has huge load times
const data = await r34.getImagesAllthefallen("title");
console.log(data[0]);

/* All of the above return an array
[
  {
    image: 'link to the image'
    title: 'title or character',
    post: 'post link'
  }
]
// If nothing is found or fails to connect to the site
[
  {
    image: 'none',
    title: 'none',
    post: 'none'
  }
]
*/
```

### Random image
```js
const data = await r34.getRandomImage();
console.log(data[0]);

/* Returns an array
[
  {
    image: 'link to the image'
    title: 'title or character',
    post: 'post link'
  }
]
*/
```

### Post information
```js
const data = await r34.getPostR34(1);
console.log(data);

const data = await r34.getPostBoru(1);
console.log(data);

const data = await r34.getPostRule34Us(1);
console.log(data);

const data = await r34.getPostPaheal(1);
console.log(data);

const data = await r34.getPostAllthefallen(1);
console.log(data);

/* All of the above return an object
{
  {
    link: 'link to the image',
    id: image id,
    character: 'character name (getPostPaheal() returns undefined)',
    artist: 'artist name (getPostPaheal() returns undefined)',
    posted: 'posted date (getPostAllthefallen() returns how long ago the image was uploaded)',
    size: 'image resolution',
    rating: 'image rating' (getPostPaheal() returns undefined),
    score: 'image score' (getPostPaheal() returns undefined),
    tags: 'tags'
  }
}
*/
```

## Development plans
* If I find out about any popular site from beyond the list I will add it

## To do
- [x] Posts information
- [ ] Multiple images at once (in 1.2.0)
- [ ] Images ranking
- [ ] Image comments

## Important information
It's a good idea to familiarize yourself with the rules for using images from each site. You use at your own risk.
