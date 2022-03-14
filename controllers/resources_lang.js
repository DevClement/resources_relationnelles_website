const {
    create,
    getAll,
    getById,
    deleteById,
    updateById
} = require("../model/resources_lang");

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

    editResource: (req, res) => {
        getAll((err, resource) => {
            if (err) {
                console.log(err);
                return res.status(500).json(
                    err
                );
            }
            return res.render('edit_resource', {resource});
        });
    },

    listResource: (req, res) => {
        getAll((err, resource) => {
            if (err) {
                console.log(err);
                return res.status(500).json(
                    err
                );
            }
            return res.render('list_resource', {resource});
        });
    },

    listResourceConnected: (req, res) => {
        getAll((err, resource) => {
            if (err) {
                console.log(err);
                return res.status(500).json(
                    err
                );
            }
            return res.render('list_resource_connected', {resource});
        });
    },

    listResourceAdmin: (req, res) => {
        getAll((err, resource) => {
            if (err) {
                console.log(err);
                return res.status(500).json(
                    err
                );
            }
            return res.render('list_resource_admin', {resource});
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

    resource: (req, res) => {
        res.render('resources');
    },

    creaResource: (req, res) => {
        res.render('crea_resource');
    },
};
