import styled from "styled-components";
import TextAreaAutosize from "react-autosize-textarea";

export const Container = styled.div`
    max-width: 1360px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;

    &:before,
    &:after {
        content: "";
        display: table;
    }

    &:after {
        clear: both;
    }
`;

export const Row = styled.div`
    width: 100%;
    height: auto;
    box-sizing: border-box;

    &:before,
    &:after {
        content: " ";
        display: table;
    }

    &:after {
        clear: both;
    }
`;

export const Column = styled.div`
    float: left;
    min-height: 1px;
    box-sizing: border-box;
    ${({ parent }) => parent && `padding: .25rem;`}

    @media only screen and (min-width: 320px) and (max-width: 767px) {
        text-align: center;
        margin-bottom: 15px;
        ${({ mobile }) => mobile && getWidthGrid(mobile)}
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        ${({ tablet }) => tablet && getWidthGrid(tablet)}
    }

    @media only screen and (min-width: 1025px) and (max-width: 1280px) {
        ${({ smallDesktop }) => smallDesktop && getWidthGrid(smallDesktop)}
    }

    @media only screen and (min-width: 1281px) {
        ${({ desktop }) => desktop && getWidthGrid(desktop)}
    }
`;

export const Button = styled.button`
    /* margin: 0 5px; */
    /* padding: 10px 40px; */
    width: 100%;
    height: 40px;
    background: #FFFF;
    color: #3f51b5;
    cursor: pointer;
    border: 1px solid #3f51b5;
    border-radius: 4px;
    box-shadow: -1px 2px 4px 0 rgba(0,0,0,0.2);
    outline: 0;
    font-weight: 700;

    &:hover {
        opacity: 0.8;
    }

    :disabled {
        background: lightgray;
        color: gray;
        border: none;
        box-shadow: none;
        cursor: default;

        &:hover {
            opacity: 1;
        }
    }
`;

const Input = styled(TextAreaAutosize)`
    border: 0;
    font-family: 'Helvetica';
    resize: none !important;
    max-height: unset !important;
    width: 100%;
    overflow: visible;

    font-weight: 700;
    font-size: 1em;
`;

export const PriceInput = styled(Input)`
    margin-block-start: 1em;
    margin-block-end: 1em;
`;

export const PromoInput = styled(Input)`
    color: green;
`;


function getWidthGrid(value) {
    if(!value) return;

    let width = value / 12 * 100;
    return `width: ${width}%;`;
}