const { json } = require("express");
//const { getConnection } = require("../../config/database");
const pool = require("../config/database");
//const poolSync = require("../../config/databasesync");
//const axios = require("axios");

module.exports = {
  create: (data, callBack) => {

    pool.query(
      `insert into users (first_name, last_name, email, password, role, activate, country, created_at, remember_token, id_language) 
      values (?,?,?,?,?,?,?,?,?,?)`,
      [
        data.first_name,
        data.last_name,
        data.email,
        data.password,
        '',
        1,
        '',
        '2022-01-27',
        'TOKEN',
        1
      ],
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
      `select id_user, first_name, last_name, email, password, activate, created_at, remember_token, id_language from users where id_user = ?`,
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
      `delete from users where id_user = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },

  getUserByEmail: (email, callBack) => {
    pool.query(
      `select id_user, first_name, last_name, email, password, activate, created_at, remember_token, id_language from users where email=?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },

};
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;


// const userSchema = new Schema({
//     firstname: {
//         type: String,
//         required: true
//     },
//     lastname: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     role: {
//         type: String,
//         default: "citoyen",
//         enum: ['citoyen', 'moderateur', 'admin', 'superadmin']
//     },
//     activated: {
//         type: Boolean,
//         default: true
//     },
//     telephone: {
//         type: String,
//     },
//     country: {
//         type: String,
//     },
//     streetAddress: {
//         type: String,
//     },
//     zipCode: {
//         type: Number,
//     },
//     city: {
//         type: String,
//     },

// })


// const User = mongoose.model("User", userSchema);
// exports.User = User;
