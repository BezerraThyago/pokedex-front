import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Filter } from '../Filter';
import { Pokemon } from '../Pokemon';
import { Container } from './styles';

interface Pokemon {
  name: string;
}

export function PokemonList() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    api.get('pokemon').then((response) => setPokemons(response.data.results));
  }, []);

  return (
    <Container>
      <Filter />

      {pokemons.map((pokemon) => {
        return <Pokemon key={pokemon.name} name={pokemon.name} />;
      })}
    </Container>
  );
}
