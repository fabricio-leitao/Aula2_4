import mongoose from 'mongoose';
import express from 'express';
import { studentRouter } from './routes/studentRouter.js';

//Conectar ao DB pelo mongoose
(async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://<user>:<password>@cluster0.rsnjg.mongodb.net/grades?retryWrites=true&w=majority',
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

app.listen(3000, () => console.log('API iniciada'));
