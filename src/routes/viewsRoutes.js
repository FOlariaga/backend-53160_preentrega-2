import { Router } from "express";
// import productsModel from "../dao/models/products.model.js"
// import chatModel from "../dao/models/chat.model.js";
import ProductsManager from "../dao/productsManager.js";
import CartsManager from "../dao/cartsManager.js";

const productsManager = new ProductsManager()
const cartsManager = new CartsManager()

const router = Router()

router.get("/products", async (req, res) => {
    const products = await productsManager.get({limit: req.query.limit || 10, page: req.query.page || 1, query : req.query.query || {}})
    console.log(products);
    res.render("products", { data: products })
})

router.get("/products/:pid", async (req, res) => {
    const pid = req.params.pid
    const product = await productsManager.getById(pid)

    res.render("oneProduct", { data: product })
})


router.get("/chat", async (req, res) => {
    res.render("chat", {})
})

router.get("/cart/:cid", async (req, res) => {
    const cid = req.params.cid
    const cart = await cartsManager.getById(cid)
    console.log(cart);
    res.render("cart", {})
})

export default router