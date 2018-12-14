/*----------------------公共函数---------------------------------*/
//排序方法
//参数  array:排序数组 item:排序字段 flag:true 按照字符排序
function sortBy(array, item, flag) {
    return array.sort(function (a, b) {
        if (flag)
            return a[item] > b[item];
        return a[item] - b[item];
    });
}

//默认图替换错误图片
function showErrorImg(imgObj, maxErrorNum) {
    if (maxErrorNum > 0) {
        imgObj.onerror = function () {
            showErrorImg(imgObj, maxErrorNum - 1);
        }
        setTimeout(function () {
            imgObj.src = 'images/load_erro_icon.png';
        }, 500);
    } else {
        imgObj.onerror = null;
        imgObj.src = "";
    }
}

//判断是否加载完成
function Imagess(url, callback) {
    var img=new Image();

    img.onload=function(){
        if(img.complete==true){
            callback();
        }
    }
    img.src=url;
}

//获取URL中参数
//参数 name 链接中的参数名称
//返回 参数值
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var queryStr = decodeURI(window.location.search.substr(1));
    var matchStr = queryStr.match(reg);
    if (matchStr != null) {
        return (matchStr[2]);
    }
    return null;
}
