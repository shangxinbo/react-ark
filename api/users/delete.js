/**
 * NAME 2016/8/9
 * DATE 2016/8/9
 * AUTHOR shangxinbo
 */

var Mock = require('mockjs');
var Random = Mock.Random;
module.exports = function(req,res){
    var param = req.body;
    if (!param.id) {
        return 'id null'
    }
    return '';
}