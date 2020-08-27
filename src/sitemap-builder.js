require('babel-register');
 
const router = require('./router').default;
const Sitemap = require('../').default;
 
(
    new Sitemap(router)
        .build('http://billssigns.com')
        .save('./sitemap.xml')
);