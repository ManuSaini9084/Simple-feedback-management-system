import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

interface Feedback {
  name: string;
  feedback: string;
}

const feedbackFile = path.join(__dirname, 'feedbacks.json');

// Read feedbacks from file
const readFeedbacks = (): Feedback[] => {
  if (!fs.existsSync(feedbackFile)) {
    return [];
  }
  const data = fs.readFileSync(feedbackFile, 'utf-8');
  return JSON.parse(data) as Feedback[];
};

// Write feedbacks to file
const writeFeedbacks = (feedbacks: Feedback[]) => {
  fs.writeFileSync(feedbackFile, JSON.stringify(feedbacks, null, 2));
};

router.get('/', (req, res) => {
  const feedbacks = readFeedbacks();
  res.json(feedbacks);
});

router.post('/', (req, res) => {
  const feedbacks = readFeedbacks();
  const newFeedback: Feedback = req.body;
  feedbacks.push(newFeedback);
  writeFeedbacks(feedbacks);
  res.status(201).send();
});

export default router;
