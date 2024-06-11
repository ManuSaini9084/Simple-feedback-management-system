import { Feedback } from '../models/feedback';

const feedbackEntries: Feedback[] = [];

export const getAllFeedback = (): Feedback[] => feedbackEntries;

export const addFeedback = (feedback: Feedback): void => {
  feedbackEntries.push(feedback);
};
