import styled from "styled-components";
import { Box } from "reflexbox";
import { Card } from "../../common-components/Card/Card";
import { ButtonLink } from "../../common-components/ButtonLink/ButtonLink";
import { Subtitle } from "../../common-components/Subtitle/Subtitle";
import { Heading } from "../../common-components/Heading/Heading";
import { Colors, FontSizes } from "../../shared/DesignTokens";

const Thing = styled.div`
  color: ${Colors.GRAY_FONT};
  font-size: ${FontSizes.ONE_HALF};
  margin-top: 16px;

  .something {
    display: block;
    margin: 0 0 0 10px;
  }
`;

const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "0.8em",
}))`
  font-size: 1em;
  border: 1px solid ${Colors.GRAY_200};
  border-radius: 4px;
  margin: 3px;
  padding: ${(props) => props.size};
  width: 326px;
`;

const Container = styled.div`
  width: 100%;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px 0 26px 20px;
`;

export function AboutYou() {
  return (
    <>
      <Container>
        <Heading>&lsaquo; Sobre você</Heading>
      </Container>
      <Card>
        <Subtitle>PERFIL</Subtitle>
        <Form>
          <Thing>
            <label htmlFor="foo-button" className="something">
              Nome
            </label>
            <Input className="teste" placeholder="Mariane" />
          </Thing>
          <Thing>
            <label htmlFor="foo-button" className="something">
              Sobrenome
            </label>
            <Input placeholder="Martins" />
          </Thing>
          <Thing>
            <label htmlFor="foo-button" className="something">
              Email
            </label>
            <Input placeholder="email@exemplo.com.br" type="email" />
          </Thing>
          <Thing>
            <label htmlFor="foo-button" className="something">
              Telefone
            </label>
            <Input placeholder="+55 11 9090-8983" type="number" />
          </Thing>
        </Form>
        <Box width="100%">
          <ButtonLink to={`/detalhes/`}>Editar</ButtonLink>
        </Box>
      </Card>
    </>
  );
}
