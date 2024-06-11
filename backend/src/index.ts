import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import feedbackRoutes from './routes/feedbackRoutes';

const app = express();
const port = 5000;  // Ensure this port matches your proxy configuration

app.use(cors());
app.use(bodyParser.json());

app.use('/api/feedback', feedbackRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
