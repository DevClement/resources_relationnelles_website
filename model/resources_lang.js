const { json } = require("express");
//const { getConnection } = require("../../config/database");
const pool = require("../config/database");
//const poolSync = require("../../config/databasesync");
//const axios = require("axios");

module.exports = {
    create: (data, callBack) => {

        pool.query(
            `INSERT INTO resources_lang(id_resource,title,content) VALUES (?,?,?)`,
            [
                data.id_resource,
                data.title,
                data.content
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    create_resources_lang: (data, callBack) => {
        
        pool.query(
            `INSERT INTO resources_lang(id_resource,title,content) VALUES (?,?,?)`,
            [
                data.id_resource,
                data.title,
                data.content
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
            `SELECT id_resources_lang, id_resource, title, content FROM resources_lang`,
            [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    getAll_resources_lang: callBack => {
        console.log('getAll');
        pool.query(
            `SELECT id_resources_lang, id_resource, title, content FROM resources_lang`,
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
            `SELECT id_resources_lang, id_resource, title, content FROM resources_lang where id_resources_lang = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },

    getById_Resource_lang: (id, callBack) => {
        pool.query(
            `SELECT id_resources_lang, id_resource, title, content FROM resources_lang where id_resource = ?`,
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
            `delete from resources_lang where id_resources_lang = ?`,
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
            `update resources_lang set title = ?, content = ? where id_resources_lang = ?`,
            [
                data.title,
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