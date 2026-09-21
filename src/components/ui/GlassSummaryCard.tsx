import React from "react";

interface GlassSummaryCardProps {
  id?: string;
  ariaLabelledby?: string;
  children: React.ReactNode;
  className?: string;
}

export function GlassSummaryCard({
  id,
  ariaLabelledby,
  children,
  className = "",
}: GlassSummaryCardProps) {
  return (
    <section 
      id={id}
      aria-labelledby={ariaLabelledby}
      className="relative w-full py-10 sm:py-16 bg-[#03111F] overflow-hidden flex items-center justify-center"
    >
      {/* Dynamic soft ambient golden light field centered behind the card */}
      <div 
        className="pointer-events-none absolute inset-0 m-auto w-[65%] sm:w-[75%] h-[50%] sm:h-[60%] rounded-full bg-[#D2BB79]/05 blur-3xl z-0"
        aria-hidden="true"
      />
      {/* Dynamic secondary steel blue ambient glow on the side */}
      <div 
        className="pointer-events-none absolute end-4 sm:end-12 top-1/2 -translate-y-1/2 w-[25%] max-w-[320px] h-[50%] rounded-full bg-[#5E96B7]/04 blur-3xl z-0"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Full-width transparent glassmorphic card container */}
        <div className={`relative z-10 w-full max-w-6xl lg:max-w-7xl mx-auto rounded-xl sm:rounded-2xl bg-[#03111F]/40 bg-[radial-gradient(ellipse_80%_80%_at_50%_0%,rgba(210,187,121,0.05),transparent_100%)] backdrop-blur-xl border border-white/15 p-5 sm:p-8 lg:p-10 shadow-xl text-center flex flex-col items-center justify-center space-y-3.5 ${className}`}>
          {children}
        </div>

      </div>
    </section>
  );
}
