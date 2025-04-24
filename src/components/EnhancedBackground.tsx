import { useEffect, useRef } from 'react';

const EnhancedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isLightMode = document.documentElement.getAttribute('data-theme') === 'light';
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let stars: { x: number; y: number; size: number; speed: number }[] = [];
    let animationFrameId: number;
    
    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 3; // Make canvas taller than viewport
      generateStars();
    };
    
    // Generate stars
    const generateStars = () => {
      const starCount = Math.floor((canvas.width * canvas.height) / 5000);
      stars = [];
      
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5,
          speed: 0.05 + Math.random() * 0.1
        });
      }
    };
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      
      // Draw stars
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Move star based on scroll position
        star.y -= star.speed * (1 + window.scrollY * 0.0001);
        
        // If star goes off screen, reset it
        if (star.y < 0) {
          star.y = canvas.height;
          star.x = Math.random() * canvas.width;
        }
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Initial setup
    handleResize();
    window.addEventListener('resize', handleResize);
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient orbs that change color based on theme */}
      <div 
        className={`absolute top-20 right-[10%] w-64 h-64 rounded-full opacity-30 blur-3xl animate-float ${
          isLightMode ? 'bg-blue-300' : 'bg-cosmic-blue'
        }`} 
        style={{ animationDelay: '0.5s' }}
      ></div>
      
      <div 
        className={`absolute bottom-20 left-[5%] w-72 h-72 rounded-full opacity-20 blur-3xl animate-float ${
          isLightMode ? 'bg-indigo-200' : 'bg-cosmic-purple'
        }`} 
        style={{ animationDelay: '1.2s', animationDuration: '7s' }}
      ></div>
      
      {/* Add more elements with conditional styling */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none opacity-70 z-0"
      />
    </div>
  );
};

export default EnhancedBackground;