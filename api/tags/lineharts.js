/**
 * NAME 2016/9/5
 * DATE 2016/9/5
 * AUTHOR shangxinbo
 */

var Mock = require('mockjs');
var Random = Mock.Random;
module.exports = function(req,res){
    var param = req.body;
    if(!param.project_id){
        return 'param project_id error';
    }
    var d = {
        date:[],
        change_score:[],
        ciclyName:[]
    };
    for(var i=0;i<7;i++){
        d.date.push(Random.date('yyyyMMdd'));
        var a = [];
        for(var j=0;j<3;j++){
            a.push(Random.integer(0,100));

        }
        d.change_score.push(a)
    }
    for(var m=0;m<3;m++){
        d.ciclyName.push(Random.csentence(3,6));
    }
    //var d = {"user_id":1,"ciclyName":["\u8f6c\u5316\u9636\u6bb5\u4e00","\u8f6c\u5316\u9636\u6bb5\u4e8c"]};
    return Mock.mock(d);
}