import { useEffect } from 'react';

const FloatingParticles = () => {
  useEffect(() => {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const particleCount = 20;
    
    // Clear existing particles
    particlesContainer.innerHTML = '';

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute w-1 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full opacity-30';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 8 + 's';
      particle.style.animationDuration = (Math.random() * 6 + 8) + 's';
      particle.style.animation = 'float-elegant 12s ease-in-out infinite';
      particlesContainer.appendChild(particle);
    }
  }, []);

  return (
    <div 
      id="particles" 
      className="fixed inset-0 pointer-events-none z-0 opacity-20"
    />
  );
};

export default FloatingParticles;