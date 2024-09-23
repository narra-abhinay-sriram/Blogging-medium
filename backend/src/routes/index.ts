import { Hono } from "hono";
import { userouter } from "./user";
import { blogrouter } from "./blog";

export const router=new Hono()

router.route("/user",userouter)
router.route("/blog",blogrouter)

