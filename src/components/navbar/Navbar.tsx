import { Container, DivTitulo, TituloNavbar } from "./NavbarStyled";

function Navbar() {
  const TituloNavbarText: string = "learning how to speak english 1.0";
  return (
    <Container>
      <DivTitulo>
        <TituloNavbar> {TituloNavbarText} </TituloNavbar>
      </DivTitulo>
    </Container>
  );
}

export default Navbar;
