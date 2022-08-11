import { type } from 'os';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

interface Type {
  type: {
    name: string;
  };
}

interface Types {
  types: Type[];
}

interface PokemonData {
  id: number;
  name: string;
  types: Type[];
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  image: string;
}

interface PokemonProps {
  name: string;
}

export function Pokemon({ name }: PokemonProps) {
  const [pokemon, setPokemon] = useState<PokemonData>({} as PokemonData);
  const [types, setTypes] = useState<Type[]>([
    {
      type: {
        name: '',
      },
    },
  ]);

  useEffect(() => {
    async function getPokemon() {
      const response = await api.get<PokemonData>(`pokemon/${name}`);

      const data = {
        ...response.data,
        image: response.data.sprites.other['official-artwork'].front_default,
      };

      await setPokemon(data);
    }

    getPokemon();
  }, []);


  return (
    <Container onClick={() => console.log(name)}>
      <img src={pokemon.image} alt={pokemon.name} />
      <div className='number'>Nº {pokemon.id}</div>
      <div className='name'>{pokemon.name}</div>
      <div className='types'>
        {pokemon.types !== undefined &&
          pokemon.types.map((type, index) => {
            return (
              <span key={index} className={type.type.name}>
                {type.type.name}
              </span>
            );
          })}
      </div>
    </Container>
  );
}
