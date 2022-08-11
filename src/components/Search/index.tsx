import { Container } from './styles';

import pokeballImg from '../../assets/images/pokeball-white.svg';

export function Search() {
  return (
    <Container>
      <input type='text' placeholder='Procure o seu Pokemon'/>
      <button type='button'>
        <img src={pokeballImg} alt='Buscar Pokemon' />
      </button>
    </Container>
  );
}
