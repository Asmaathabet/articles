import { createStore, applyMiddleware } from "redux"; 
import rootReducer from '../reducers/index.js';
import forbiddenWordsMiddleware from '../middlewares';

const store = createStore(
    rootReducer, 
    applyMiddleware(forbiddenWordsMiddleware)
    );

export default store; 

