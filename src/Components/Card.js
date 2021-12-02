import nerdImage from '../assets/images/illustration.png';
import Button from './Button';
// import Image from './Image';
// import { ButtonContainer, CardContainer, ContentContainer } from './styles/Container.styles';
// import { StyledTitle } from './styles/Custom.styles';
// import { H1, Image, P, Tag } from './styles/Elements';
import { ButtonContainer, CardContainer, ContentContainer } from './styles/Container.styles';
import { StyledTitle } from './styles/Custom.styles';
import { H1, Image, P, Tag } from './styles/Elements.styled';
// eslint-disable-next-line react/function-component-definition
export default function Card() {
    return (
        <CardContainer>
            <ContentContainer>
                <Tag>Exclusive</Tag>
                <H1>
                    <StyledTitle text="React Styled Components" />
                </H1>

                <P>
                    Exclusive React JS Tutorial on Styled Components where you will learn why we
                    need this & how to use it.
                </P>
                <ButtonContainer>
                    <Button link="https://lwsbd.link/rsc" text="Watch now" />
                    <Button link="https://lwsbd.link/react" text="Github repo" />
                </ButtonContainer>
                <Image src={nerdImage} alt="Nerd" width="300px" />
            </ContentContainer>
        </CardContainer>
    );
}
