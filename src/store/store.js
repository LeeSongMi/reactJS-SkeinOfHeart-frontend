import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
const logger = createLogger();
export default createStore(/*reducer가 들어가 추가 될 곳,*/applyMiddleware(logger))
