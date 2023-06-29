import { z } from "zod";
import { movieCreateSchema, movieSchema } from "../schemas";
import { DeepPartial } from "typeorm";

type Movie = z.infer<typeof movieSchema>;
type MovieCreate = z.infer<typeof movieCreateSchema>;
type MovieUpdate = DeepPartial<MovieCreate>;

export { Movie, MovieCreate, MovieUpdate };