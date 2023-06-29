import { Request, Response } from "express";
import { Movie } from "../entities";
import { MovieCreate, MovieUpdate, Pagination } from "../interfaces";
import { moviesServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
    const payload: Movie = req.body;
    const movie: MovieCreate = await moviesServices.create(payload);

    return res.status(201).json(movie)
}

const read = async (req: Request, res: Response): Promise<Response> => {
    const pagination: Pagination = await moviesServices.read(res.locals.pagination);

    return res.status(200).json(pagination);
};

const update = async (req: Request, res: Response): Promise<Response> => {
    const payload: MovieUpdate = req.body;
    const foundMovie: Movie = res.locals.movie;
    
    const movie: Movie = await moviesServices.update(foundMovie, payload);

    return res.status(200).json(movie);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
    await moviesServices.destroy(res.locals.movie);
    return res.status(204).json();
};

export default { create, read, update, destroy };