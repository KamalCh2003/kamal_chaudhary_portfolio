import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import contactRoutes from './routes/contactRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10, // limit each IP to 10 requests per 15 min
});
app.use('/api/contact', limiter);

app.use(helmet());
app.use(cors());
app.use(express.json());

// Only contact routes now
app.use('/api/contact', contactRoutes);

app.get('/api/health', (req, res) => res.json({ status: 'OK' }));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});