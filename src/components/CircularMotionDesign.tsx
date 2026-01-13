import logoMedicoNoBolso from "@/assets/logo-medico-no-bolso.png";

// Inner ring segments (6 segments)
const innerSegments = [
  "Hospitalar",
  "Operadora de\nPlanos de Saúde",
  "Saúde Pública",
  "Medicina\nDiagnóstica",
  "Clínica e\nConsultório",
];

// Middle ring segments
const middleSegments = [
  "Gestão Estratégica e Qualidade",
];

// Outer ring labels
const outerLabels = [
  { label: "Infraestrutura", angle: -60 },
  { label: "Saúde sem papel", angle: -20 },
  { label: "IOT", angle: 20 },
  { label: "Telemedicina", angle: 50 },
  { label: "Interoperabilidade", angle: 90 },
  { label: "Big Data", angle: 120 },
  { label: "Inteligência Artificial", angle: 150 },
  { label: "Mobilidade", angle: 190 },
  { label: "Cloud", angle: 220 },
  { label: "Rede de\nParceiros", angle: 250 },
  { label: "Gestão do\nConhecimento", angle: 290 },
];

const CircularMotionDesign = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Main container */}
      <div className="relative w-[900px] h-[900px] flex items-center justify-center">
        
        {/* Outer rotating ring with labels */}
        <div className="absolute w-[850px] h-[850px] animate-rotate-slow">
          {outerLabels.map((item, index) => (
            <div
              key={index}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `rotate(${item.angle}deg) translateY(-390px)`,
              }}
            >
              <div
                className="neumorphic px-4 py-2 rounded-xl whitespace-pre-line text-center text-sm font-medium text-circle-text"
                style={{
                  transform: `rotate(${-item.angle}deg)`,
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Second ring - rotates opposite direction */}
        <div className="absolute w-[650px] h-[650px] rounded-full neumorphic animate-rotate-reverse-medium flex items-center justify-center">
          <div className="absolute inset-4 rounded-full bg-background opacity-50" />
          
          {/* Text on this ring */}
          <div className="absolute w-full h-full">
            <svg viewBox="0 0 650 650" className="w-full h-full">
              <defs>
                <path
                  id="textCircle"
                  d="M 325,325 m -260,0 a 260,260 0 1,1 520,0 a 260,260 0 1,1 -520,0"
                />
              </defs>
              <text className="fill-circle-text text-sm font-light tracking-[0.3em]">
                <textPath href="#textCircle" startOffset="0%">
                  GESTÃO ESTRATÉGICA E QUALIDADE • GESTÃO ESTRATÉGICA E QUALIDADE •
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        {/* Inner segments ring */}
        <div className="absolute w-[480px] h-[480px] animate-rotate-medium">
          {innerSegments.map((segment, index) => {
            const angle = (index * 72) - 90; // 5 segments = 72 degrees each
            return (
              <div
                key={index}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `rotate(${angle}deg) translateY(-170px)`,
                }}
              >
                <div
                  className="neumorphic w-28 h-20 rounded-2xl flex items-center justify-center p-2"
                  style={{
                    transform: `rotate(${-angle}deg)`,
                  }}
                >
                  <span className="text-xs font-medium text-circle-text text-center whitespace-pre-line leading-tight">
                    {segment}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center logo container */}
        <div className="absolute w-[220px] h-[220px] rounded-full neumorphic-inset flex items-center justify-center animate-float z-10">
          <div className="w-[180px] h-[180px] rounded-full bg-card flex items-center justify-center shadow-2xl animate-pulse-glow">
            <img
              src={logoMedicoNoBolso}
              alt="Médico no Bolso"
              className="w-32 h-32 object-contain drop-shadow-lg"
            />
          </div>
        </div>

        {/* Decorative orbiting dots */}
        <div className="absolute w-[550px] h-[550px] animate-rotate-fast">
          {[0, 90, 180, 270].map((angle, i) => (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 w-3 h-3 -ml-1.5 -mt-1.5"
              style={{ transform: `rotate(${angle}deg) translateY(-275px)` }}
            >
              <div className="w-full h-full rounded-full bg-primary shadow-lg shadow-primary/50" />
            </div>
          ))}
        </div>

        {/* Another set of decorative dots */}
        <div className="absolute w-[750px] h-[750px] animate-rotate-reverse-slow">
          {[45, 135, 225, 315].map((angle, i) => (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 w-2 h-2 -ml-1 -mt-1"
              style={{ transform: `rotate(${angle}deg) translateY(-375px)` }}
            >
              <div className="w-full h-full rounded-full bg-primary-light shadow-md shadow-primary-light/50" />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CircularMotionDesign;
