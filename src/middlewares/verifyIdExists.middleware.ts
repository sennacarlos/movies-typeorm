import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { Movie } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";

const verifyIdExists = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const movieId: number = Number(req.params.id);

    const repo: Repository<Movie> = AppDataSource.getRepository(Movie);
    const movie: Movie | null = await repo.findOne({
        where: { id: movieId },
    })

    if (!movie) throw new AppError("Movie not found", 404);

    res.locals = { ...res.locals, movie};

    return next();
};

export default verifyIdExists