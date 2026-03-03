import React, { useRef } from 'react';

const ProductCarousel = ({ products }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = 300; // Ajuste conforme a largura do seu card
    if (direction === 'left') {
      current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group w-full max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-zinc-100 uppercase tracking-wider">
        New Arrivals
      </h2>

      {/* Botões de Navegação Customizados */}
      <button 
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-zinc-900/80 p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
      >
        &#10094;
      </button>

      {/* Container do Carrossel */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map((product) => (
          <div 
            key={product.id} 
            className="min-w-[280px] md:min-w-[320px] snap-start bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden hover:border-zinc-500 transition-colors"
          >
            <div className="relative h-80 w-full bg-zinc-800">
              <img 
                src={product.image} 
                alt={product.name} 
                className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="p-4">
              <h3 className="text-zinc-200 font-medium uppercase text-sm tracking-tighter">{product.name}</h3>
              <p className="text-zinc-400 mt-1 font-bold">R$ {product.price}</p>
            </div>
          </div>
        ))}
      </div>

      <button 
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-zinc-900/80 p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
      >
        &#10095;
      </button>
    </div>
  );
};

export default ProductCarousel;