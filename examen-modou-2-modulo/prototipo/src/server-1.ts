// server1.ts

// Importar las dependencias necesarias
import express from 'express'; // Express.js para crear el servidor
import { mockProducts } from './mockproducto.ts'; // Importar el mock de productos
import type { Request, Response } from 'express';

// Crear una instancia de Express
const app = express();

// Middleware para parsear el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Almacenar los productos en memoria
let products = [...mockProducts];
