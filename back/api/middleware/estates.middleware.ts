import { Request, Response, NextFunction } from "express";

class EstatesMiddlewares {
  static processNewEstateRequest = (
    req: Request,
    _res: Response,
    next: NextFunction
  ) => {
    const { operation_type } = req.body;
    delete req.body.is_for_rent;
    delete req.body.is_for_sale;

    if (operation_type === "rent") {
      delete req.body.sale_price;
    } else if (operation_type === "sale") {
      delete req.body.rent_price;
    }

    next();
  };
}

export default EstatesMiddlewares;
