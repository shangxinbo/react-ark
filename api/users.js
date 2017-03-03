/**
 * NAME 2016/8/9
 * DATE 2016/8/9
 * AUTHOR shangxinbo
 */

var Mock = require('mockjs');
var Random = Mock.Random;
module.exports = function (req, res) {
    console.log(req.header('api_token'));
    return {
        "user": {
            "id": 1,
            "username": "admin",
            "nickname": "",
            "phone": "13488888888",
            "email": "zhangshilong@geotmt.com",
            "type": 1,
            "status": 1,
            "deleted_at": null,
            "created_at": "2016-08-22 18:16:54",
            "updated_at": "2016-08-22 18:16:54"
        }
    }
};