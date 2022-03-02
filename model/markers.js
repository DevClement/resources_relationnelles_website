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
            `INSERT INTO markers(id_resource,id_user) VALUES (?, ?)`,
            [
                data.id_resource,
                data.id_user
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
            `SELECT id_markers, followed_at, checked_at, faved_at, consulted_at, id_resource, id_user FROM markers`,
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
            `SELECT id_markers, followed_at, checked_at, faved_at, consulted_at, id_resource, id_user FROM markers where id_markers = ?`,
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
            `delete from markers where id_markers = ?`,
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
            `update markers set followed_at = ? , checked_at = ?, faved_at = ?, consulted_at = ?  where id_markers = ?`,
            [
                data.followed_at,
                data.checked_at,
                data.faved_at,
                data.consulted_at,
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