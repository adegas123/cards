import * as React from "react";
import { CardComponent, Media, Header, Legend, Content } from "./style";
import Counter from "../Counter/Counter";
import ICard from "src/interfaces/ICard";

interface Props {
    children: React.ReactChild | NamedChildrenSlots;
}

interface NamedChildrenSlots {
    media?: React.ReactChild
    header: React.ReactChild
    legend?: React.ReactChild
    content?: React.ReactChild
    actions?: React.ReactChild
    itemRef?: ICard
}

export class Card extends React.Component<Props> {

    handleAddCard = (qty: number) => {
        console.log(qty)
    }

    render() {
        const { children } = this.props;

        if(!children) {
            throw new Error('children is required!');
        }

        if(isNamedSlots(children)) {
            const { media, header, legend, content, itemRef } = children;
            return (
                <CardComponent>
                    <div className="section">
                        { media ? <Media>{media}</Media> : null }
                        <Header rows={1} maxRows={2} maxLength="60" defaultValue={header} />
                        { legend ? <Legend rows={1} maxRows={2} maxLength="64" defaultValue={legend} /> : null }
                        { content ? <Content>{content}</Content> : null }
                    </div>
                    <Counter item={itemRef} addCard={this.handleAddCard}/>
                </CardComponent>
            );
        }

        return <div className="card">{children}</div>
    };
}

const isObject = <T extends object>(value: any): value is T => typeof value === 'object' && typeof value !== 'function' && value != undefined;
const isNamedSlots = (children: any): children is NamedChildrenSlots => isObject(children) && 'content' in children;

export default Card;
