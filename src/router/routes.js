import { Router } from "express";
import { categoryRouter } from "./categoryRouter.js";
import { subCategoryRouter } from "./subCategoryRouter.js";
import { productsRouter } from "./productsRouter.js";
import { orderRouter } from "./orderRouter.js";

export const router = Router();
    router.use(categoryRouter);
    router.use(subCategoryRouter);
    router.use(productsRouter);
    router.use(orderRouter);
