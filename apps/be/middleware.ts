import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    console.error('No authorization header present');
    res.status(401).json({ message: "Unauthorized - No auth header" });
    return;
  }

  if (!authHeader.startsWith('Bearer ')) {
    console.error('Authorization header is not in Bearer format');
    res.status(401).json({ message: "Unauthorized - Invalid auth format" });
    return;
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    console.error('No token found in authorization header');
    res.status(401).json({ message: "Unauthorized - No token" });
    return;
  }

  try {

    const publicKey = process.env.JWT_PUBLIC_KEY?.replace(/\\n/g, '\n');

    if (!publicKey) {
      console.error('JWT_PUBLIC_KEY is not set in environment variables');
      res.status(500).json({ message: "Server configuration error" });
      return;
    }

    const decoded = jwt.verify(token, publicKey, {
      algorithms: ["RS256"]
    });

    const userId = (decoded as any).sub;

    if (!userId) {
      console.error('No user ID found in token payload');
      res.status(401).json({ message: "Unauthorized - Invalid token payload" });
      return;
    }

    req.userId = userId;
    next();
  } catch (error) {

    res.status(401).json({ message: `Unauthorized` });
    return;
  }
}
