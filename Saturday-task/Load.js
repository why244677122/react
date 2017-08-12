/**
 * Created by dllo on 17/8/12.
 */
var fs = require('fs');
var download = require('./download');

fs.readFile('./arr.json','utf-8',function (error, data) {
    var array = data.split(',');
    array.forEach(function (itme, index) {

        download(itme,'img',index + ".jpg")
    })
});
