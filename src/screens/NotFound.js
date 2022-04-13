import styled from 'styled-components';
import error404 from "../assets/images/404.jpg";

const Error = styled.img.attrs({
  src: error404,
  alt: "Página não encontrada",
})`
  height: 100%;
`;

export function NotFound() {
  return (
    <>
      <Error />
    </>
  );
}
