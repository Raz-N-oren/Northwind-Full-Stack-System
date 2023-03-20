import express from "express";
import cors from "cors";
import appConfig from "./2-utils/app-config";
import catchAll from "./3-middleware/catch-all";
import routeNotFound from "./3-middleware/route-not-found";
import productsController from "./6-controllers/products-controller";

// Create express server:
const server = express();

// Allow only this site to access our backend: 
server.use(cors({ origin: "http://localhost:3000" }));

// Creates request.body object if exists
server.use(express.json());

// Binding our middleware:

// Tell the server to listen to any router written in our controller:
server.use("/api", productsController);

// Route not found middleware
server.use("*", routeNotFound);

// Catch all middleware:
server.use(catchAll)

// Run the server:
server.listen(appConfig.port, () => console.log(`Listening on http://localhost:${appConfig.port}`));
