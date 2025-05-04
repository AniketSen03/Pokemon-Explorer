import React, { useEffect, useState } from 'react';
import Header from './Components/Header'
import SearchFilter from './SearchFilter';
import PokemonCard from './PokemonCard';
const App = () => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
        const data = await res.json();

        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return await res.json();
          })
        );

        setAllPokemon(pokemonDetails);
        setFilteredPokemon(pokemonDetails);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch Pokémon. Please try again later.');
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  useEffect(() => {
    let filtered = allPokemon;

    if (search) {
      filtered = filtered.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (typeFilter !== 'All') {
      filtered = filtered.filter(p =>
        p.types.some(t => t.type.name === typeFilter.toLowerCase())
      );
    }

    setFilteredPokemon(filtered);
  }, [search, typeFilter, allPokemon]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-4">
        <SearchFilter
          search={search}
          setSearch={setSearch}
          typeFilter={typeFilter}
          setTypeFilter={setTypeFilter}
        />
        {loading ? (
          <p className="text-center mt-10">Loading Pokémon...</p>
        ) : error ? (
          <p className="text-center text-red-500 mt-10">{error}</p>
        ) : filteredPokemon.length === 0 ? (
          <p className="text-center mt-10">No Pokémon found.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
            {filteredPokemon.map(pokemon => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
