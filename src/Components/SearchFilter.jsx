const types = [
    'All', 'Fire', 'Water', 'Grass', 'Electric', 'Bug',
    'Normal', 'Poison', 'Ground', 'Fairy', 'Fighting',
    'Psychic', 'Rock', 'Ghost', 'Ice', 'Dragon', 'Dark', 'Steel', 'Flying'
];

const SearchFilter = ({ search, setSearch, typeFilter, setTypeFilter }) => (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-6 bg-white p-6 rounded-lg shadow-md">
        <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg bg-white w-full sm:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
            {types.map((type) => (
                <option key={type} value={type}>{type}</option>
            ))}
        </select>
    </div>
);

export default SearchFilter;
