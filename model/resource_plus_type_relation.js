const { json } = require("express");
//const { getConnection } = require("../../config/database");
const pool = require("../config/database");
//const poolSync = require("../../config/databasesync");
//const axios = require("axios");

module.exports = {
    create: (data, callBack) => {

        pool.query(
            `INSERT INTO resource_plus_type_relation(name) VALUES (?)`,
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

    create_resource_plus_type_relation: (data, callBack) => {

        pool.query(
            `INSERT INTO resource_plus_type_relation(id_resource, id_relationships_types) VALUES ?`,
            [
                data
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    getAllTypeRelation: callBack => {
        console.log('getAll');
        pool.query(
            `SELECT id_resource_plus_type_relation, name FROM resource_plus_type_relation`,
            [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    getAll_resource_plus_type_relation: callBack => {
        console.log('getAll');
        pool.query(
            `SELECT id_resource_plus_type_relation, id_resource, id_relationships_types FROM resource_plus_type_relation`,
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
            `SELECT id_resource_plus_type_relation, name FROM resource_plus_type_relation where id_relationships_types = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },

    getById_Resource_plus_type_relation: (id, callBack) => {
        pool.query(
            `SELECT id_resource_plus_type_relation, id_resource, id_relationships_types FROM resource_plus_type_relation where id_resource = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    deleteById: (id, callBack) => {
        pool.query(
            `delete from resource_plus_type_relation where id_resource_plus_type_relation = ?`,
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
            `update resource_plus_type_relation set name=? where id_resource_plus_type_relation = ?`,
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