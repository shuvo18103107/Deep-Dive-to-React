import styled from 'styled-components';
import Title from '../Title';

// eslint-disable-next-line import/prefer-default-export
export const StyledTitle = styled(Title)`
    color: ${(props) => props.color};
    //ekhn eta Title component e props.className akare recieve hobe pore amra className property er vitor amader pathano className diye dynamically change korte parbo
    //normally cg Title to ekhn kono html element na je chinbe styled , tai etake pass kore dei className name component e props e
`;
