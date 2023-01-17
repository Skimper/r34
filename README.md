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

Install module
```
npm i r34
```
How to use
```js
import r34 from "r34";

// Find by name / tags / author

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

//  Random image

const data = await r34.getRandomImage();
console.log(data[0]);

/* All of the above return an array
[
  {
    image: 'imageLink'
    title: 'title/character',
    post: 'postLink'
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

## Development plans
* If I find out about any popular site from beyond the list I will add it

## To do
- [ ] Posts information
- [ ] Author's information
- [ ] Images ranking
- [ ] Image comments

## Important information
It's a good idea to familiarize yourself with the rules for using images from each site. You use at your own risk.
