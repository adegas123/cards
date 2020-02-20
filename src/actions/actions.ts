import { action } from "typesafe-actions";
import ICard from "../interfaces/ICard";

export enum actionTypes {
  ADD_TO_CART = "ADD_TO_CART",
  DELETE_FROM_CART = "DELETE_FROM_CART",
}

export const cartActions = {
  addCard: (item: ICard) => action(actionTypes.ADD_TO_CART, item),
  deleteCard: (item: ICard) => action(actionTypes.DELETE_FROM_CART, item)
};
