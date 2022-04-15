const {
    create,
    getAllType,
    getById,
    deleteById,
    updateById
} = require("../model/resource_type");

const { sign } = require("jsonwebtoken");

const bcrypt = require('bcrypt');

module.exports = {
    create: (req, res) => {
        const body = req.body;
        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json(
                    err
                );
            }
            return res.status(200).json(
                results
            );
        });
    },

    getAll: (req, res) => {
        getAllType((err, type) => {
            if (err) {
                console.log(err);
                return res.status(500).json(
                    err
                );
            }
            return res.render('crea_resource', {type});
        });
    },

    getById: (req, res) => {
        const id = req.params.id;
        getById(id, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json(
                    err
                );
            }
            return res.status(200).json(
                results
            );
        });
    },

    deleteById: (req, res) => {
        const id = req.params.id;
        deleteById(id, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json(
                    err
                );
            }
            return res.status(200).json(
                results
            );
        });
    },

    updateById: (req, res) => {
        const body = req.body;
        updateById(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: "Actualización satisfactoria"
            });
        });
    },
    
};
