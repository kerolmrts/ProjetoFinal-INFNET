import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import jobRoutes from './routes/job.routes'
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'
import cors from 'cors';

require("dotenv").config()

const app = express()
const PORT = 3300;

const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Disposition'],
};

app.use(bodyParser.json())
app.use(cors(corsOptions))

mongoose.connect(process.env.DB_URI as string, {
    family: 4
})
mongoose.connection.on("connected", () => {
    console.log("Conexão com o MongoDB estabelecida com sucesso!")
})
mongoose.connection.on("error", (err) => {
    console.error("Erro na conexão com o MongoDB:", err)
})
app.use(express.static('uploads'));

app.use('/jobs', jobRoutes)
app.use('/users', userRoutes);
app.use('/auth', authRoutes);

app.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost:'+PORT)
});