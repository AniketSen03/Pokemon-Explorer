const PokemonCard = ({ pokemon }) => {
    return (
      <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg shadow-lg p-6 flex flex-col items-center text-white">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-24 h-24 rounded-full border-4 border-white shadow-md bg-red-900"
        />
        <h2 className="capitalize font-extrabold text-xl mt-4">{pokemon.name}</h2>
        <p className="text-sm font-medium mt-1">ID: #{pokemon.id}</p>
        <div className="flex justify-center flex-wrap gap-2 mt-4">
          {pokemon.types.map((t) => (
            <span
              key={t.type.name}
              className="text-xs px-3 py-1 bg-white text-gray-800 rounded-full capitalize shadow-sm"
            >
              {t.type.name}
            </span>
          ))}
        </div>
      </div>
    );
  };
  
  export default PokemonCard;
  