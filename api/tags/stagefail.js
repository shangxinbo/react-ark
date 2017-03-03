/**
 * NAME 2016/9/5
 * DATE 2016/9/5
 * AUTHOR shangxinbo
 */

var Mock = require('mockjs');
var Random = Mock.Random;
module.exports = function(req,res){
    var param = req.body;
    if(!param.id){
        return 'param id error';
    }
    if(!param.stage){
        return 'param stage error';
    }
    var d = {
        "summary": {
            "customers": 5,
            "conversion": "41.67"
        },
        "cycle": 1,
        "project": {
            "id":"12",
            "name":"项目1"
        },
        "fail_reason": [
            {
                "num": 0,
                "proportion": 50,
                "value": 1,
                "mark": "失败"
            },
            //{
            //    "num": 0,
            //    "proportion": 20,
            //    "value": 2,
            //    "mark": "空号"
            //},
            //{
            //    "num": 0,
            //    "proportion": 10,
            //    "value": 3,
            //    "mark": "无人接听"
            //},
            //{
            //    "num": 0,
            //    "proportion": 20,
            //    "value": 3,
            //    "mark": "无人接听"
            //},
            {
                "num": 0,
                "proportion": 50,
                "value": 4,
                "mark": "4444"
            }
        ]
    };

    //var d = {"user_id":1,"summary":{"customers":4,"conversion":"4.00"},"cycle":1,"project":{"id":18,"name":"\u6d4b\u8bd5\u961f\u5217\u6570\u636e"},"fail_reason":[{"num":1,"proportion":100,"value":1,"mark":"\u672a\u63d0\u4f9b"}]};
    return Mock.mock(d);
}