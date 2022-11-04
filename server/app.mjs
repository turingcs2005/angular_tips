import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

// handle __dirname and __filename for ES module
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'dist')));
app.all('/*', (req, res, next) => {
    res.sendFile('index.html', {root: path.join(__dirname, 'dist')});
});

const PORT = process.env.PORT || 5005;

app.listen(PORT, (req, res) => {
    console.log(`Server is listening on port ${PORT}...`);
});




