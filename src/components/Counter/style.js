import styled from "styled-components";
import { Button } from "../Commons/style";

export const RoundButton = styled(Button)`
    width: initial !important;
    height: initial !important;
    margin: 0 5px 0 5px;
    padding: 10px 15px !important;
    border-radius: 50% !important;
    font-size: 20px;
    line-height: 17px;
    ${({ plus }) => plus && `padding-left: 13px !important`}
`;

export const Input = styled.input`
    max-width: 50px;
    height: 30px;
    background: #FFFF;
    text-align: center;
    fonxt-size: 1rem;
    border: 1px solid lightgray;
    border-radius: 4px;
`;