import { CATEGORIES } from '../data/categories.data';
import { SORT_OPTIONS } from '../data/sort-options.data';
import Search from './Search';
import Select from './Select';

const Filters = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  showFilters,
  setShowFilters,
}) => {
  return (
    <div className="filters">
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="filter-controls">
        <Select
          options={CATEGORIES}
          value={selectedCategory}
          onChange={setSelectedCategory}
        />
        <Select options={SORT_OPTIONS} value={sortBy} onChange={setSortBy} />
        <button onClick={() => setShowFilters(!showFilters)}>
          {showFilters ? 'Скрыть фильтры' : 'Показать фильтры'}
        </button>
      </div>
    </div>
  );
};

export default Filters;
