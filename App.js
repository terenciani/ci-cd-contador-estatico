"use strict";

const express = require("express");
const cors = require("cors");
const porta = process.env.PORT || 3000;

class App {
    static async init() {
        let app = new express();
        app.use(cors());
        app.use(express.json());

        const ContadorRota = require("./src/rota/ContadorRota");
        new ContadorRota(app)

        // Rota básica da aplicação
        app.get("/", (req, res) => {
            res.json({
                name: "ci-cd-contador-estatico",
                version: "1.0.0",
                description: "Projeto para fins didáticos",
                author: "Marcelo F. Terenciani"
            })
        })

        app.get("/ping", (req, res) => {
            res.json({ "Resposta": "pong" })
        })

        // disponibilização do servidor
        app.listen(porta, () => {
            console.log(`Servidor inicializado na porta: ${porta}`)
        })
    }
}
App.init();