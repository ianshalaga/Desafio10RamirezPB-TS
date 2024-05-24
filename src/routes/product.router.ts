import { Router } from "express";
import productController from "../controllers/product.controller";
import endpointAuth from "../middlewares/endpointAuth";

const productsRouter: Router = Router();

/** GET ENDPOINTS */
productsRouter.get("/", productController.getAllProducts);
productsRouter.get("/:pid", productController.getProductById);

/** POST ENDPOINT */
productsRouter.post(
  "/",
  endpointAuth("admin"),
  productController.createProduct
);

/** PUT ENDPOINT */
productsRouter.put(
  "/:pid",
  endpointAuth("admin"),
  productController.updateProduct
);

/** DELETE ENDPOINT */
productsRouter.delete(
  "/:pid",
  endpointAuth("admin"),
  productController.deleteProduct
);

export default productsRouter;
