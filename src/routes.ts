import { Router, Request, Response, response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";

const router = Router();
router.get("/test", (request: Request, response: Response) => {
  return response.json({ ok: true });
});

// User Routes
router.post("/user", new CreateUserController().handle);

export { router };
