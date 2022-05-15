
import styled from "styled-components";
import { Button } from "../common-components/Button/Button";
import { Card } from "../common-components/Card/Card";
import { Heading } from "../common-components/Heading/Heading";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
`;

const HomeButton = styled(Button)`
  margin-top: 15px;
`;

export function Home() {

  let navigateAbout = useNavigate(); 
  const routeAbout = () =>{ 
    let path = `/sobre`; 
    navigateAbout(path);
  }

  let navigateFormation = useNavigate(); 
  const routeFormation = () =>{ 
    let path = `/formacao`; 
    navigateFormation(path);
  }

  let navigateExperience = useNavigate(); 
  const routeExperience = () =>{ 
    let path = `/experiencia`; 
    navigateExperience(path);
  }

  let navigateHobbie = useNavigate(); 
  const routeHobbie = () =>{ 
    let path = `/hobbies`; 
    navigateHobbie(path);
  }

  return (
    <>
      <Container>
        <Heading>Acesso Rápido:</Heading>
      </Container>

      <Card>
        <HomeButton onClick={routeAbout}>SOBRE VOCÊ</HomeButton>
        <HomeButton onClick={routeFormation}>FORMAÇÃO</HomeButton>
        <HomeButton onClick={routeExperience}>EXPERIÊNCIA</HomeButton>
        <HomeButton onClick={routeHobbie}>HOBBIES</HomeButton>
      </Card>
    </>
  );
}
