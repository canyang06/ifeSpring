var aqiData = [
    ["北京", 90],
    ["上海", 50],
    ["福州", 10],
    ["广州", 50],
    ["成都", 90],
    ["西安", 100]
];
(function () {
    /*
     在注释下方编写代码
     遍历读取aqiData中各个城市的数据
     将空气质量指数大于60的城市显示到aqi-list的列表中
     */
    var pos = 1,
        city = 0,
        arrRst = [],
        ul = document.getElementById("aqi-list"),
        str = "",
        lastRst = [];
    for (var i = 0; i < aqiData.length; i++) {
        if (aqiData[i][pos] > 60) {
            arrRst.push(aqiData[i][pos]);
        }
    }
    arrRst = arrRst.sort();
    console.log(arrRst);
    for (var i = 0; i < arrRst.length; i++) {
        for (var j = 0; j < aqiData.length; j++) {
            if (arrRst[i] == aqiData[j][pos]) {
                lastRst.push(aqiData[j]);
                aqiData.splice(j, 1); //删除当前元素
                j = aqiData.length; //跳出循环
            }
        }
    }
    for (var i = 0; i < lastRst.length; i++) {
        str += "<li>第" + (i + 1) + "名：" + lastRst[i][city] + "," + lastRst[i][pos] + "</li>";
    }
    ul.innerHTML = str;
})();