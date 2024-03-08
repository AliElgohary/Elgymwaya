import jwt from "jsonwebtoken";
export const auth = (req, res, next) => {
  let { token } = req.headers;
  jwt.verify(token, "ITI", (err, decoded) => {
    if (err) return res.json({ message: "token err", err });
    // what about copying the whole user object to the request ???
    // req.user = Object.assign({}, decoded);
    req.userID = decoded.id;
    next();
  });
};
