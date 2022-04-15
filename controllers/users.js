const {
    create,
    getById,
    deleteById,
    getUserByEmail,
    getAll
} = require("../model/user");

const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

const bcrypt = require('bcrypt');
const { create_resource_plus_type_relation } = require("../model/resource_plus_type_relation");

module.exports = {
    create: (req, res) => {
        const body = req.body;
        console.log(body);
        const saltRounds = genSaltSync(10);
        body.password = hashSync(body.password, saltRounds);
        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json(
                    err
                );
            }
            return res.render('login');
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

    login: (req, res) => {
        const body = req.body;
        getUserByEmail(body.email, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json(
                    err
                );
            }

            if (!results) {
                return res.json({
                    success: false,
                    message: "Email ou mot de passe incorrects."
                })
            }

            const match = compareSync(body.password, results.password);

            if (match) {
                // le mot de passe est correct, on fait le login
                results.password = null;
                return res.json({
                    success: true,                    
                    user: results
                })
            } else {
                // le mot de passe envoyé depuis le front n'est pas correct, on envoie une erreur
                return res.json({
                    success: false,
                    message: "Email ou mot de passe incorrects."
                })
            }
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
    signIN: (req, res) => {
        return res.render('login');
    },
    signINPost: (req, res) => {
        const body = req.body;
        getUserByEmail(body.email, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json(
                    err
                );
            }

            if (!results) {
                return res.render('error_login');
            }

            const match = compareSync(body.password, results.password);

            if (match) {
                // le mot de passe est correct, on fait le login
                return res.render('index');
                
            } else {
                // le mot de passe envoyé depuis le front n'est pas correct, on envoie une erreur
                return res.render('error_login');
            }
        });                
    },
    register: (req, res) => {
        return res.render('register');
    },
    registerPost: (req, res) => {
        return res.render('register');
    },
    superAdminRegister: (req, res) => {
        return res.render('register_super_admin');
    },
    editCitoyen: (req, res) => {
        getAll((err, users) => {
            if (err) {
                console.log(err);
                return res.status(500).json(
                    err
                );
            }

            if (!users) {
                return res.render('login');
            }
            return res.render('edit_citoyen');
       });
    },
    listCitoyen: (req, res) => {
        getAll((err, users) => {
            if (err) {
                console.log(err);
                return res.status(500).json(
                    err
                );
            }

            if (!users) {
                return res.render('login');
            }

            return res.render('list_citoyen', {users});
        });
    },

};
