import express from 'express';
import { usersRouter } from '../../routes/users';

const app = express();

app.get('/', (_, res) => {
  res.send('Hello world');
});

app.listen(4000, () => console.log('Server is running!!!'));
app.use(usersRouter); // ユーザー側ルーティングを分離
