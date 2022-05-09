const { json } = require("express");
//const { getConnection } = require("../../config/database");
const pool = require("../config/database");
//const poolSync = require("../../config/databasesync");
//const axios = require("axios");

module.exports = {
    create: (data, callBack) => {

        pool.query(
            `INSERT INTO resource(status, created_at, id_resource_types, id_categorie, id_language) VALUES (?,?,?,?,?)`,
            [                
                'Published',
                'NOW()',
                data.type,
                data.categorie,
                data.language
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
            `SELECT id_resource, status, created_at, id_resource_types, id_categorie, id_language FROM resource`,
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
            `SELECT id_resource, status, created_at, id_resource_types, id_categorie, id_language FROM resource where id_resource = ?`,
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
            `delete from resource where id_resource = ?`,
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
            `update resource set status=?, id_resource_types=?, id_categorie=? , id_language where id_resource=?`,
            [
                data.status,
                data.id_resource_types,
                data.id_categorie,
                data.id_resource
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