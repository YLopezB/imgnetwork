import { Router } from "express";

const home = Router();

home.get("/", (req, res) => {
    res.render("partials/index")
});

export default home;
