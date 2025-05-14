import React from "react";

const GloryLogo = () => {
  return (
    <div className="relative flex items-center justify-center gap-4 select-none text-[#f9f6f1] font-[Cinzel_Decorative]">
      <div aria-hidden="true" className="absolute top-[-70px] left-0 right-0 flex justify-between w-full pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className="w-[2px] h-[60px] bg-gradient-to-b from-[#b22222cc] to-transparent drop-shadow-[0_0_2px_rgba(128,0,0,0.8)] shadow-red-700 animate-swing" 
            style={{ 
              animationDelay: `${i * 0.4}s`, 
              transformOrigin: 'top center' 
            }} 
          />
        ))}
      </div>
      
      {/* Logo text */}
      <div className="text-6xl font-extrabold tracking-[0.2em] drop-shadow-lg text-[hsl(250_47%_60%)]">
        Glory
      </div>
    </div>
  );
};

export default GloryLogo;