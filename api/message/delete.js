/**
 * NAME 2016/8/9
 * DATE 2016/8/9
 * AUTHOR shangxinbo
 */

var Mock = require('mockjs');
var Random = Mock.Random;
module.exports = function(req,res){
    var page = req.body.page?req.body.page:1;
    var rows = req.body.rows?req.body.rows:20;
    var d = {
    };
    return Mock.mock(d);
}