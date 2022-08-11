import { PokemonList } from '../PokemonList';
import { PokemonStatus } from '../PokemonStatus';
import { Container } from './styles';

export function Dashboard() {
  return (
    <Container>
      <PokemonList />
      <PokemonStatus />
    </Container>
  );
}
