import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as MyTypes from "MyTypes";
import { actionTypes } from "../../actions";
import { RoundButton, Input } from "./style";
import { Row, Column, Button } from "../Commons/style";
import ICard from "../../interfaces/ICard";

interface Props {
    item: ICard;
    addCard: (qty: number) => void;
}

interface CounterState {
  quantity: number;
}

class Counter extends React.Component<Props, CounterState> {

    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            quantity: 0
        }
    }

    handleAddCard = () => {
        console.log("add")
        console.log(this.props.item)
        this.props.addCard(this.state.quantity);
    };

    handleAddQty = () => {
        let qty = this.state.quantity + 1;
        this.setState({
            quantity: qty,
        })
    };

    handleSubQty = () => {
        let qty = this.state.quantity - 1;
        this.setState({
            quantity: qty,
        })
    };

    render() {
        return (
            <Row>
                <Column mobile={12} tablet={7} smallDesktop={7} desktop={7}>
                    <RoundButton disabled={!(this.state.quantity > 0)} onClick={() => this.handleSubQty()}>-</RoundButton>
                    <Input type="text" value={this.state.quantity} disabled />
                    <RoundButton plus onClick={() => this.handleAddQty()}>+</RoundButton>
                </Column>
                <Column mobile={12} tablet={5} smallDesktop={5} desktop={5}>
                    <Button disabled={!(this.state.quantity > 0)} onClick={() => this.handleAddCard()}>ADD</Button>
                </Column>
            </Row>
        );
    };
}

export default Counter;
