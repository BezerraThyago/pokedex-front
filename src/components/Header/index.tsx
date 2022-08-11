import { Container } from './styles';

import logoImg from '../../assets/images/logo.png';

export function Header() {
  return (
    <Container>
      <img src={logoImg} alt='Pokedex' />
      <h1>Pokedex React JS</h1>
    </Container>
  );
}
