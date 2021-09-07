import jwt from "jsonwebtoken";
import { config } from "../config"

export const requireJwt = async (req, res, next) => {

  const authHeader = req.get('Authorization');
  
  if (!authHeader) {
    res.status(401);
    res.json({
      message: 'Missing access token'
    });
    return;
  }
  
  const accessToken = authHeader.split(' ')[1];

  if (!accessToken) {
    res.status(401);
    res.json({
      message: 'Missing access token'
    });
    return;
  }

  try {
    const decoded = jwt.verify(accessToken, config.auth.secret);
    req.data.id = decoded.id;
  } catch(err) {
    res.status(403);
    res.json({
      message: 'forbidden'
    });
  }

  next();
};

