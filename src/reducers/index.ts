import { combineReducers } from "redux";
import { cardsReducer } from "./cardsReducers";

const rootReducer = combineReducers({
  cards: cardsReducer,
});

export default rootReducer;
