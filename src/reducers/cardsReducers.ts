import * as MyTypes from "MyTypes";
import ICard from "../interfaces/ICard";
import { actionTypes } from "../actions";

interface ICardModel {
  list: ICard[],
  cartList: ICard[],
  item: {name: string, qty: number},
}

export const initialState: ICardModel = {
  list: [{
    media: "https://qa-m1-dr.abi-sandbox.net/media/catalog/product/-/R/-R002151.png",
    header: "Modelo Negra",
    legend: "12 Unit - 33oz Bottle",
    price: "RD$32.00/Unit",
    promo: "Buy 3, get 1 free.",
  }, {
    media: "https://cdn.minibardelivery.com/products/146165/product/lPresident.jpg",
    header: "Presidente Light",
    legend: "16 Unit - 330ml Bottle",
    price: "RD$43.00/Unit",
    promo: "Buy 3, get 1 free Red Bull or 2 Pepsi Black.",
  }, {
    media: "https://www.colmapp.com.do/media/catalog/product/cache/1/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/b/o/botella_1_1.png",
    header: "Brahma Light very very light 33 Onz - Caja [12 Botellas]",
    legend: "16 Unit - 330ml Bottle",
    price: "RD$43.00/Unit",
    promo: "For every 5 you buy, get up 2 free.",
  }, {
    media: "https://images-americanas.b2w.io/produtos/01/00/img/104983/5/104983536_1GG.jpg",
    header: "Budweiser",
    legend: "16 Unit - 330ml Bottle and extra long summary on multiple lines",
    price: "RD$26.00/Unit",
    promo: "For every 5 you buy, get up to 3 free Red Bull or 2 free Pepsi Black.",
  }],
  cartList: [],
  item: null,
};

export const cardsReducer = (state: ICardModel = initialState, action: MyTypes.RootAction) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      const item = {item: action.payload};
      return {
        ...state,
        cartList: [...state.cartList, item]
      };
    }
    case actionTypes.DELETE_FROM_CART: {
      let oldList = [...state.cartList];
      oldList = oldList.filter(it => it !== action.payload);
      const newList = oldList;

      return {
        ...state,
        cartList: newList
      };
    }
    default:
      return state;
  }
};
