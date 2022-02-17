const { json } = require("express");
//const { getConnection } = require("../../config/database");
const pool = require("../config/database");
//const poolSync = require("../../config/databasesync");
//const axios = require("axios");
var moment = require('moment');

module.exports = {
    create: (data, callBack) => {
        let date = moment().format("YYYY-MM-DD");
        pool.query(
            `INSERT INTO comment(id_resource, id_user, content, created_at) VALUES (?, ?, ?, ?)`,
            [
                data.id_resource,
                data.id_user,
                data.content,
                date
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    getAll: callBack => {
        console.log('getAll');
        pool.query(
            `SELECT id_resource, id_user, id_comment, content, created_at FROM comment`,
            [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    getById: (id, callBack) => {
        pool.query(
            `SELECT id_resource, id_user, id_comment, created_at, content FROM comment where id_comment = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },

    deleteById: (id, callBack) => {
        pool.query(
            `delete from comment where id_comment = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    updateById: (data, callBack) => {
        pool.query(
            `update comment set content =? where id_comment = ?`,
            [
                data.content,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },

};