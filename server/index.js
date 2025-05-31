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

const allowedOrigins = [
    'https://tdumz.com',
    'https://admin.tdumz.com',
    'https://www.tdumz.com'
  ];
  
  const corsOptions = {
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
};


dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

// Для получения пути к текущей директории
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); 
app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));

// ====== РОУТЕР ПОСЛЕ CORS ========
app.use('/api', router);

// ====== ОБРАБОТЧИК ОШИБОК ========
app.use(errorHandler);

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
