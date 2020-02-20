import styled from "styled-components";
import TextAreaAutosize from "react-autosize-textarea";

export const CardComponent = styled.div`
    padding: 16px;
    height: auto;
    border: 1px solid lightgray;
    border-radius: 4px;
    box-shadow: -1px 2px 4px 0 rgba(0,0,0,0.2);
    text-align: left;
    background-color: #FFFF;
    font-family: 'Helvetica';

    .section {
        height: 514px;
    }

    

    @media only screen and (min-width: 320px) and (max-width: 767px) {
        .section {
            height: auto;
        }
    }
`;

export const Header = styled(TextAreaAutosize)`
    font-family: 'Helvetica';
    resize: none !important;
    max-height: unset !important;
    width: 100%;
    overflow: visible;

    border: 0;
    font-size: 20px;
    font-weight: 700;
    color: #000;
    margin-block-start: .5em;
    margin-block-end: .1em;
`;

export const Legend = styled(TextAreaAutosize)`
    font-family: 'Helvetica';
    resize: none !important;
    max-height: unset !important;
    width: 100%;
    overflow: visible;

    border: 0;
    font-size: 20px;
    font-weight: 400;
    color: #848484;
    margin-block-start: 0;
    margin-block-end: .2em;
`;

export const Content = styled.div`
    display: grid;
    font-weight: 700;

    input {
        font-size: 1em;
        border: 0;
    }
`;

export const Media = styled.div`
    text-align: center;

    img {
        object-fit: cover;
        width: 180px;
        height: 260px;
    }
`;

export const Actions = styled.div`
    margin-block-start: 2em;
    /* display: flex; */
    bottom: 5px;
`;