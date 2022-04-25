import express from "express";

const app = express();

app.use(express.static("../client/dist"));

app.use(express.static("../client/dist"));
