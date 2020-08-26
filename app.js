//IMPORTS
import mongoose from 'mongoose';
import express from 'express';
import { studentRouter } from './routes/studentRouter.js';

require('dotenv').config();
//Conectar ao DB pelo mongoose
(async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://{$process.env.USERDB}:{$process.env.PWDDB}@cluster0.rsnjg.mongodb.net/grades?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('Conectado ao MongoDB com sucesso!');
  } catch (error) {
    console.log('Erro ao conectar ao MongoDB' + error);
  }
})();

const app = express();

app.use(express.json());
app.use(studentRouter);

app.listen(process.env.PORT, () => console.log('API iniciada'));
