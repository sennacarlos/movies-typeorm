import { Router } from "express";
import middlewares from "../middlewares";
import { movieCreateSchema, movieUpdateSchema } from "../schemas";
import { moviesControllers } from "../controllers";
import { MovieUpdate } from "../interfaces";

export const moviesRouter: Router = Router();

moviesRouter.post(
    "",
    middlewares.validateBody(movieCreateSchema),
    middlewares.verifyName,
    moviesControllers.create
);

moviesRouter.get(
    "",
    middlewares.pagination,
    moviesControllers.read
);

moviesRouter.patch(
    "/:id",
    middlewares.validateBody(movieUpdateSchema),
    middlewares.verifyIdExists,
    middlewares.verifyName,
    moviesControllers.update
);

moviesRouter.delete(
    "/:id",
    middlewares.verifyIdExists,
    moviesControllers.destroy
);