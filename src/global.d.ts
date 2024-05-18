declare namespace Express {
  interface Request {
    name?: string;
    userId?: string;
  }
}

declare namespace jsonwebtoken {
  interface JwtPayload {
    name: string;
    userId: string;
  }
}
