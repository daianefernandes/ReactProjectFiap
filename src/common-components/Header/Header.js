import styled from "styled-components";
import { Box } from "reflexbox";
import { Colors, Spaces } from "../../shared/DesignTokens";
import unionLogo from "../../assets/images/logo.svg";
import menu from "../../assets/icons/burguer-menu.svg";
import award from "../../assets/icons/award.svg";
import profile from "../../assets/icons/profile.svg";
import { SearchField } from "../../common-components/SearchField/SearchField";

const Container = styled.div`
  background-color: ${Colors.NEUTRAL_WHITE};
  padding-bottom: 20px;
`;

const Wrapper = styled.header`
  align-items: center;

  display: flex;
  height: 60px;
  justify-content: space-between;
  margin: 12px 0 16px 0px;
  padding: ${Spaces.FOUR};
  width: 100%;
  @media (min-width: 1024px) {
    height: 90px;
  }
`;

const Logo = styled.img.attrs({
  src: unionLogo,
  alt: "Logo do Union Project",
})`
  cursor: pointer;
  height: 58px;
`;

const Menu = styled.img.attrs({
  src: menu,
  alt: "Menu",
})`
  cursor: pointer;
  height: 22px;
`;

const Award = styled.img.attrs({
  src: award,
  alt: "Medalha",
})`
  cursor: pointer;
  height: 30px;
`;

const Profile = styled.img.attrs({
  src: profile,
  alt: "Profile",
})`
  cursor: pointer;
  height: 30px;
`;

export function Header() {
  return (
    <>
      <Container>
        <Wrapper>
          <Menu />
          <Logo />
          <Award />
          <Profile />
        </Wrapper>
        <Box flexGrow="1">
          <SearchField placeholder="Procure por funcionário" />
        </Box>
      </Container>
    </>
  );
}
