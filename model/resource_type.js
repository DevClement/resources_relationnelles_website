const { json } = require("express");
//const { getConnection } = require("../../config/database");
const pool = require("../config/database");
//const poolSync = require("../../config/databasesync");
//const axios = require("axios");

module.exports = {
    create: (data, callBack) => {

        pool.query(
            `INSERT INTO resource_type(name) VALUES (?)`,
            [
                data.name
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
            `SELECT id_resource_types, name FROM resource_type`,
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
            `SELECT id_resource_types, name FROM resource_type where id_resource_types = ?`,
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
            `delete from resource_type where id_resource_types = ?`,
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
            `update resource_type set name=? where id_resource_types = ?`,
            [
                data.name,
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