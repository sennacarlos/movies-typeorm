import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { Movie } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";

const verifyName = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const repo: Repository<Movie> = AppDataSource.getRepository(Movie);
    const name: string = req.body.name;

    if (!name) return next();

    const nameExists: boolean = await repo.exist({ where: { name } });
    if (nameExists) throw new AppError("Movie already exists.", 409);

    return next();
};

export default verifyName;