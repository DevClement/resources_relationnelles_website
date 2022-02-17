const {
    create,
    getById,
    deleteById,
    getUserByEmail,
} = require("../model/user");

const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

const bcrypt = require('bcrypt');

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
            return res.status(200).json(
                results
            );
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
};
