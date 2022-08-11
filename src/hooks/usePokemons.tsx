import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { api } from '../services/api';

// interface PokemonsProviderProps {
//   children: ReactNode;
// }

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

interface PokemonsContextData {
  pokemon: PokemonData;
  getPokemon: (name: string) => void;
}

const PokemonContext = createContext<PokemonsContextData>(
  {} as PokemonsContextData
);

// export function PokemonsProvider({
//   children,
// }: PokemonsProviderProps): JSX.Element {
//   const [pokemons, setPokemons] = useState<PokemonData[]>({} as PokemonData[]);

//   async function getPokemon(name: string) {
//     const response = await api.get<PokemonData>(`pokemon/${name}`);
//     const data = {
//       ...response.data,
//       image: response.data.sprites.other['official-artwork'].front_default,
//     };

//     const pokemonsGrounp = [...pokemons, data]

//     setPokemons(pokemonsGrounp);
//   }

//   return (
//     <PokemonContext.Provider value={{ pokemons, getPokemon }}>
//       {children}
//     </PokemonContext.Provider>
//   );
// }

export function usePokemons() {
  const context = useContext(PokemonContext);

  return context;
}
