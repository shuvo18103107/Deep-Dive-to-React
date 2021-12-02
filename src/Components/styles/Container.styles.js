import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    background: ${({ theme }) => theme.wrapper};
    width: 100%;
    height: 100vh;
`;
export const CardContainer = styled.div`
    position: relative;
    background: ${({ theme }) => theme.card};
    height: 350px;
    width: 550px;
    overflow: hidden;
    display: flex;
    align-items: center;
`;
export const ContentContainer = styled.div`
    width: 215px;
    position: absolute;
    left: 20px;
    z-index: 3;
`;
export const ButtonContainer = styled.div`
    width: fit-content;
    height: fit-content;
    margin-top: 10px;
    & a {
        display: inline-block;
        overflow: hidden;
        position: relative;
        font-size: 11px;
        color: ${({ theme }) => theme.buttonsA};
        text-decoration: none;
        padding: 10px 15px;
        border: 1px solid ${({ theme }) => theme.buttonsABorder};
        font-weight: bold;
        &:hover {
            color: ${({ theme }) => theme.buttonsAhover};
            transition: all 0.5s ease;
            &:after {
                width: 150%;
                left: -10px;
                transform-origin: left;
            }
        }

        & :after {
            content: '';
            position: absolute;
            top: 0;
            right: -10px;
            width: 0%;
            background: ${({ theme }) => theme.buttonsAAfter};
            height: 100%;
            z-index: -1;
            transition: width 0.3s ease-in-out;
            transform: skew(-25deg);
            transform-origin: right;
        }
        &:nth-of-type(1) {
            border-radius: 50px 0 0 50px;
            border-right: none;
        }
        &:nth-of-type(2) {
            border-radius: 0px 50px 50px 0;

            border-right: none;
        }
    }
`;
