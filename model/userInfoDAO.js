var db = require("../config/kyjdb");
var logger = require('../config/logger');

function search_UserDetail(parameters) {
    return new Promise(function (resolve, rejcet) {
        db.query(`SELECT * FROM UserInfo where user_id="${parameters.user_id}"`, function (error, db_data) {
            if (error) {
                logger.error(
                    "DB error [UserInfo]"+
                    "\n \t" + `SELECT * FROM UserInfo where user_id="${parameters.user_id}"` +
                    "\n \t" + error);
                rejcet('DB ERR');
                //throw error;
            }
            resolve(db_data);
        });
    })
}
module.exports.userInfoFunc = {
    search_UserDetail
}
