/**
 * Created by dllo on 17/8/12.
 */
var webpage = require('webpage');
var page    = webpage.create();
phantom.outputEncoding = 'utf-8';
/*************************分割线************************/
var fs      = require('fs');

page.onConsoleMessage = function(msg, lineNum, sourceId) {
    console.log('CONSOLE: ' + msg);
};
/*************************分割线************************/
page.open('http://daily.zhihu.com/',function (status) {
    if (status === 'success'){
        console.log('成功');
        console.log(page.title);

        page.includeJs('https://code.jquery.com/jquery-3.2.1.min.js',function () {

            setTimeout(function () {
                var arrString = page.evaluate(function () {
                    var arr = [];
                    //通过jq获取对应的src
                    $('img').each(function (index, element) {

                        //添加到数组中
                        var b = $(element).attr('src');
                        arr.push(b);
                    });
                    return arr; //将数组返回

                });
                //写入文件
                fs.write('./arr.json',arrString,'w');
                phantom.exit(0);
            },1000);

        });

    }else {
        console.log('失败');
        phantom.exit(0)
    }
});