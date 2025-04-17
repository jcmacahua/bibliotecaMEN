import express from "express";
import libroRoutes from "./libroRoutes.js";

const routes = (app)=>{
    app.get('/',(req,res)=>{
        res.status(200).send('Formacion node +Express + mongodb --desde express');
    });

    app.use(express.json(), libroRoutes);
}

export default routes;