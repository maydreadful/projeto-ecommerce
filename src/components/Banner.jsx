import React from 'react';

const Banner = ({ title, description, buttonText, image }) => {
  return (
    <section 
      className="relative w-full min-h-[500px] lg:h-[600px] flex items-center overflow-hidden border-b-4 border-purple-600 bg-[#0a0a0a]"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Camada de escurecimento (Overlay) para dar contraste ao texto */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="max-w-2xl text-left">
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)] uppercase italic tracking-tighter text-white">
            {title}
          </h1>
          
          <p className="text-zinc-200 text-lg md:text-xl mb-10 max-w-lg font-medium drop-shadow-md">
            {description}
          </p>
          
          <button className="bg-purple-600 hover:bg-purple-500 text-white font-black py-4 px-10 rounded-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_#9333ea] uppercase tracking-widest">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;