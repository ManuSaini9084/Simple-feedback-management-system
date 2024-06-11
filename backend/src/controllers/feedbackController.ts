import { Request, Response } from 'express';
import { getAllFeedback, addFeedback } from '../services/feedbackService';

export const getFeedback = (req: Request, res: Response): void => {
  res.json(getAllFeedback());
};

export const postFeedback = (req: Request, res: Response): void => {
  const { name, feedback } = req.body;
  if (name && feedback) {
    addFeedback({ name, feedback });
    res.status(201).send('Feedback added');
    alert("Feedback added successfully")
  } else {
    res.status(400).send('Invalid input');
  }
};
