import { applyMiddleware } from 'redux';

const logger = store => next => action => {
  // log every action / event to the console
  console.log(action);
  next(action);
};

const error = store => next => action => {
  try {
    next(action);
  } catch (error) {
    console.error('MIDLEWARE - ERROR', error);
  }
};

const middleware = applyMiddleware(logger, error);

export default middleware;