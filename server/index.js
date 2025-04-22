import dotenv from 'dotenv';
import express from 'express';
import sequelize from './db.js';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import router from './routes/index.js';
import errorHandler from './middleware/ErrorHandlingMiddleware.js';
import path from 'path';
import { fileURLToPath } from 'url';  // Импортируем fileURLToPath для преобразования URL в путь
import cookieParser from 'cookie-parser';

dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

// Для получения пути к текущей директории
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', cors(), router);
app.use(errorHandler);

app.use(cookieParser());

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};

start();
