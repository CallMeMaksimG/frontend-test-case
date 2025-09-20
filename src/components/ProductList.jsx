import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, useMemo } from 'react';
import Filters from './Filters';
import { ProductCard } from './ProductCard';
import { useDebounce } from '../hooks/useDebounce';
import { selectLoading, selectProducts } from '../store/productsSlice';
import { fetchProducts } from '../store/productsSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const loading = useSelector(selectLoading);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesSearch = product.name
          .toLowerCase()
          .includes(debouncedSearch.toLowerCase());
        const matchesCategory =
          selectedCategory === 'all' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        if (sortBy === 'price') return a.price - b.price;
        return 0;
      });
  }, [products, debouncedSearch, selectedCategory, sortBy]);

  if (loading) {
    return <div className="loading">Загрузка товаров...</div>;
  }

  return (
    <div className="product-list">
      <Filters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
      />
      <div className="products">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
