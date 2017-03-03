/**
 * NAME 2016/8/8
 * DATE 2016/8/8
 * AUTHOR shangxinbo
 */
var Mock = require('mockjs');
var Random = Mock.Random;
module.exports = function(req, res) {
    var code = req.body.code;
    var level = req.body.level;
    var dataLength = 16;

    //resolve level
    if (level > 0) {
        dataLength = 5
    }

    //resolve code
    if (!code) {
        code = 10;
    }
    if (level == '0') {
        code = 100;
    } else {
        code = parseInt(code) * 10;
    }

    var d = [];
    for (var i = 1; i < dataLength; i++) {
        d.push({
            "code": code + i,
            "hasChildren": function() {
                return level < 2
            },
            "tagLevel": parseInt(level) + 1,
            "tagName": Random.cword(3, 6),
            "spritClass": function(j) {
                if (j < 10) {
                    return "icon0" + j;
                } else {
                    return "icon" + j;
                }
            }(i)
        });
    }
    return Mock.mock(d);
}