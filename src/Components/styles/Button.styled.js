import styled from 'styled-components';
import ButtonComponent from '../ButtonComponent';

const Button = styled(ButtonComponent)`
    //ei component er overall css ekhane , jodi alada dynamic css thake tahole seta className akare dore use korbo , echara state ba other props e kono jamela nai seta oi component e emnei jabe styled-component e dile, just css ta jodi chai bosabo taile ekhane kaj korbo
    width: 10vw;
    padding: 10px;
    border-radius: 2em;
    background-color: ${({ background }) => background};
`;
export default Button;
