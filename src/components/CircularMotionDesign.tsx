import logoMedicoNoBolso from "@/assets/logo-medico-no-bolso.png";

// Inner ring segments (5 segments)
const innerSegments = [
  { label: "Inteligência\nArtificial", angle: -90 },
  { label: "Controle Financeiro\ne NFS-e", angle: -18 },
  { label: "Receituário\nIntegrado", angle: 54 },
  { label: "Medicina\nDiagnóstica", angle: 126 },
  { label: "Clínica e\nConsultório", angle: 198 },
];

// Outer ring labels
const outerLabels = [
  { label: "Chat com\npaciente", angle: -70 },
  { label: "Saúde sem papel", angle: -35 },
  { label: "Agenda\nOtimizada", angle: 0 },
  { label: "Telemedicina", angle: 35 },
  { label: "Gestão de\nTis e Glosas", angle: 70 },
  { label: "Relatórios\nAvançados", angle: 105 },
  { label: "LGPD\nCriptografado", angle: 140 },
  { label: "App mobile\ne desktop", angle: 175 },
  { label: "Migração\nExpress", angle: 210 },
  { label: "Multi -\nEspecialidades", angle: 245 },
  { label: "Gestão de\nPacientes", angle: 280 },
];

const CircularMotionDesign = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background py-8">
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
        
        {/* Outer decorative ring - ANIMATED */}
        <div className="absolute w-[820px] h-[820px] rounded-full border-2 border-dashed border-circle-border animate-rotate-slow opacity-40" />
        
        {/* Outer labels - FIXED (not animated) */}
        <div className="absolute w-[850px] h-[850px]">
          {outerLabels.map((item, index) => {
            const radians = (item.angle - 90) * (Math.PI / 180);
            const x = Math.cos(radians) * 390;
            const y = Math.sin(radians) * 390;
            return (
              <div
                key={index}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                }}
              >
                <div className="neumorphic px-4 py-2.5 rounded-xl whitespace-pre-line text-center text-sm font-medium text-circle-text min-w-[90px]">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Middle decorative ring - ANIMATED */}
        <div className="absolute w-[650px] h-[650px] rounded-full neumorphic animate-rotate-reverse-medium">
          <div className="absolute inset-4 rounded-full bg-background opacity-50" />
        </div>
        
        {/* Text on middle ring - FIXED (not animated) */}
        <div className="absolute w-[650px] h-[650px]">
          <svg viewBox="0 0 650 650" className="w-full h-full">
            <defs>
              <path
                id="textCircle"
                d="M 325,325 m -260,0 a 260,260 0 1,1 520,0 a 260,260 0 1,1 -520,0"
              />
            </defs>
            <text className="fill-muted-foreground text-sm font-light tracking-[0.25em]">
              <textPath href="#textCircle" startOffset="0%">
                MÉDICOS E IA IMPULSIONAM O ATENDIMENTO AO PACIENTE • MÉDICOS E IA IMPULSIONAM O ATENDIMENTO AO PACIENTE •
              </textPath>
            </text>
          </svg>
        </div>

        {/* Inner decorative ring - ANIMATED */}
        <div className="absolute w-[480px] h-[480px] rounded-full border border-circle-border animate-rotate-medium opacity-60" />

        {/* Inner segment labels - FIXED (not animated) */}
        <div className="absolute w-[480px] h-[480px]">
          {innerSegments.map((segment, index) => {
            const radians = (segment.angle) * (Math.PI / 180);
            const x = Math.cos(radians) * 180;
            const y = Math.sin(radians) * 180;
            return (
              <div
                key={index}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                }}
              >
                <div className="neumorphic w-32 min-h-[70px] rounded-2xl flex items-center justify-center p-3">
                  <span className="text-sm font-medium text-circle-text text-center whitespace-pre-line leading-tight">
                    {segment.label}
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

        {/* Decorative orbiting dots - ANIMATED */}
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

        {/* Another set of decorative dots - ANIMATED */}
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

        {/* Small orbiting ring - ANIMATED */}
        <div className="absolute w-[320px] h-[320px] rounded-full border border-primary/20 animate-rotate-reverse-medium" />

      </div>
    </div>
  );
};

export default CircularMotionDesign;
