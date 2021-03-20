import express from 'express';
import appRouter from './src/routes';


const app = express();
const PORT = 8000;


app.use('/api', appRouter);


app.listen(PORT, () => {
  console.log(`Server is running at https://localhost:${PORT}`);
});