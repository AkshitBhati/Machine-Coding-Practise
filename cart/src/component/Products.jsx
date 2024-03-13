import React, { useEffect, useState } from 'react';
import Card from './Card';

const Products = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setData(data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handlePageChange = newPage => {
    setPage(newPage);
  };

  const totalPages = Math.ceil(data.length / 10);

  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {data.slice(page * 10 - 10, page * 10).map((item, index) => (
        <Card key={index} data={item} />
      ))}
      {totalPages > 1 && (
        <div className='mt-10'>
          {page > 1 && <span onClick={() => handlePageChange(page - 1)}>◀️</span>}
          {[...Array(totalPages)].map((_, i) => (
            <span key={i} onClick={() => handlePageChange(i + 1)}>
              {i + 1}
            </span>
          ))}
          {page < totalPages && <span onClick={() => handlePageChange(page + 1)}>▶️</span>}
        </div>
      )}
    </div>
  );
};

export default Products;
