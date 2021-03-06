import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';

import avatarsRouter from '../src/router';

const app = express();
const port = Number(process.env.PORT) || 3002;

const faviconPath = path.join(__dirname, 'favicon.ico');
app.use(favicon(faviconPath));

app.use('/avatars', avatarsRouter);

app.listen(port, () =>
  console.log(`[Adorable Avatars] Running at: http://localhost:${port}`),
);

export default app;
