import styled from "styled-components";
import { Card } from "../common-components/Card/Card";
import { Heading } from "../common-components/Heading/Heading";
import { Subtitle } from "../common-components/Subtitle/Subtitle";

const Container = styled.div`
  width: 100%;
`;

export function Home() {
  return (
    <>
      <Container>
        <Heading>Acesso Rápido:</Heading>
      </Container>

      <Card>
        <Subtitle>SOBRE VOCÊ</Subtitle>
        <Subtitle>FORMAÇÃO</Subtitle>
        <Subtitle>EXPERIÊNCIA</Subtitle>
        <Subtitle>HOBBIES</Subtitle>
      </Card>
    </>
  );
}
