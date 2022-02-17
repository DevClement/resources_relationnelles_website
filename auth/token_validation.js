const jwt = require("jsonwebtoken");
let JWT_KEY = "jwt1234"
module.exports = {
  checkToken: (req, res, next) => {
    let token = req.get("authorization");
    if (token) {
      // Remove Bearer from string      
      token = token.slice(7);
      jwt.verify(token, JWT_KEY, (err, decoded) => {
        if (err) {
          return res.json({
            success: 0,
            message: "Token inválido..."
          });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      return res.json({
        success: 0,
        message: "Acceso denegado, usuario no autorizado"
      });
    }
  }
};
