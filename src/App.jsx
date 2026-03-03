import React, { useState, useEffect } from 'react';

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Busca o JSON que está na sua raiz ou pasta public
        const response = await fetch('/api.json');
        const data = await response.json();
        setProducts(data.products || data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
  );
};

export default App; // Resolve o erro de declaração duplicada