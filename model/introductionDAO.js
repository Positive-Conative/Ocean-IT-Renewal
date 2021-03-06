'use strict';

var db = require("../config/kyjdb");
var logger = require('../config/logger');

function introduction_selectAll(parameters) {
    return new Promise(function (resolve, rejcet) {
        db.query(`SELECT * FROM Introduction`, function (error, db_data) {
            if (error) {
                logger.error(
                    "DB error [Introduction]"+
                    "\n \t" + `SELECT * FROM Research_Fields` +
                    "\n \t" + error);
                rejcet('DB ERR');
                //throw error;
            }
            if(db_data[0] === undefined)
                resolve("<script>" +
                "alert('No Data');" +
                "window.history.go(-1);"+
                "</script>");
            resolve(db_data);
        });
    })
}
module.exports = {
    introduction_selectAll
}
