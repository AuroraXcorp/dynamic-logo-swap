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

// Helper function to convert degrees to radians
function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

// Generate outer labels
function generateOuterLabels() {
  const container = document.getElementById('outerLabels');
  
  outerLabels.forEach((item) => {
    const radians = toRadians(item.angle - 90);
    const x = Math.cos(radians) * 390;
    const y = Math.sin(radians) * 390;
    
    const card = document.createElement('div');
    card.className = 'label-card';
    card.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    card.textContent = item.label;
    
    container.appendChild(card);
  });
}

// Generate inner labels
function generateInnerLabels() {
  const container = document.getElementById('innerLabels');
  
  innerSegments.forEach((segment) => {
    const radians = toRadians(segment.angle);
    const x = Math.cos(radians) * 180;
    const y = Math.sin(radians) * 180;
    
    const card = document.createElement('div');
    card.className = 'label-card inner';
    card.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    card.textContent = segment.label;
    
    container.appendChild(card);
  });
}

// Generate fast orbiting dots
function generateFastDots() {
  const container = document.getElementById('dotsFast');
  const angles = [0, 90, 180, 270];
  
  angles.forEach((angle) => {
    const dot = document.createElement('div');
    dot.className = 'dot large';
    dot.style.transform = `rotate(${angle}deg) translateY(-275px)`;
    container.appendChild(dot);
  });
}

// Generate slow orbiting dots
function generateSlowDots() {
  const container = document.getElementById('dotsSlow');
  const angles = [45, 135, 225, 315];
  
  angles.forEach((angle) => {
    const dot = document.createElement('div');
    dot.className = 'dot small';
    dot.style.transform = `rotate(${angle}deg) translateY(-375px)`;
    container.appendChild(dot);
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  generateOuterLabels();
  generateInnerLabels();
  generateFastDots();
  generateSlowDots();
});
