import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as MyTypes from "MyTypes";
import { actionTypes } from "../actions";
import ICard from "../interfaces/ICard";
import { Card } from "../components";
import { Container, Row, Column, PriceInput, PromoInput } from "../components/Commons/style";

interface CardContainerState {
  selectedItem: string;
}

interface CardContainerProps {
  cardsList: ICard[];
  cartList: ICard[];
}

class CardContainer extends React.Component<CardContainerProps, CardContainerState> {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null
    };
  }

  render() {
    let cartJSX: JSX.Element[] | JSX.Element;
    if (!this.props.cartList.length || this.props.cartList[0] === null) {
      cartJSX = <p>Cart is under construction!</p>;
    } else {
      cartJSX = this.props.cartList.map((item, idx) => {
        return (
          <li key={idx}>
            {item.header}
          </li>
        );
      });
    }

    return (
      <Container>
        <Row>
          <h2>Meu carrinho</h2>
          <ul>
            {cartJSX}
          </ul>
        </Row>
        <Row>
          { this.props.cardsList.length && 
            this.props.cardsList.map((item, idx) => {
              return (
              <Column parent mobile={12} tablet={6} smallDesktop={4} desktop={3} key={idx}>
                <Card>
                  {{
                    media: <img src={item.media} />,
                    header: item.header,
                    legend: item.legend,
                    itemRef: item,
                    content: (
                      <>
                      <PriceInput rows={1} maxRows={2} maxLength="20" defaultValue={item.price} />
                      <PromoInput rows={1} maxRows={2} maxLength="69" defaultValue={item.promo} />
                      <a href="#">View details</a>
                      </>
                    ),
                  }}
                </Card>
              </Column>)
            })
          }
        </Row>
      </Container>
    );
  }
}

const MapStateToProps = (store: MyTypes.ReducerState) => {
  return {
    cardsList: store.cards.list,
    cartList: store.cards.cartList
  };
};

export default connect(
  MapStateToProps,
)(CardContainer);
