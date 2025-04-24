import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  blinkSpeed: number;
  timeOffset: number;
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  active: boolean;
  timeCreated: number;
  duration: number;
}

const StarBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const lastShootingStarRef = useRef<number>(0);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Colors that match the cosmic theme
    const starColors = [
      'rgba(255, 255, 255, 1)',      // White
      'rgba(230, 230, 255, 1)',      // Slightly blue white
      'rgba(255, 230, 230, 1)',      // Slightly red white
      'rgba(76, 201, 240, 1)',       // Cosmic blue
      'rgba(123, 44, 191, 1)',       // Cosmic purple
      'rgba(247, 37, 133, 1)',       // Cosmic pink
    ];

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      generateStars();
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();  // Initial setup

    // Generate stars
    function generateStars() {
      // More stars, but smaller
      const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 600);
      const stars: Star[] = [];
      
      for (let i = 0; i < numberOfStars; i++) {
        // Determine star color with probabilities
        let colorIndex = 0; // Default to white
        const colorRand = Math.random();
        
        // 80% white/near white, 20% colored stars
        if (colorRand > 0.8) {
          // Use theme colors for special stars
          colorIndex = Math.floor(Math.random() * 3) + 3; // Indices 3-5 are theme colors
        } else if (colorRand > 0.6) {
          // Slightly tinted whites
          colorIndex = Math.floor(Math.random() * 2) + 1; // Indices 1-2 are tinted whites
        }
        // Create smaller stars (reduced max size from 2.5 to 1.5)
        stars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 1.0 + 0.2, // Smaller size range (0.2 to 1.1)
          opacity: Math.random() * 0.8 + 0.2,
          blinkSpeed: Math.random() * 0.01 + 0.005,
          timeOffset: Math.random() * 2000,
          color: starColors[colorIndex],
        });
      }
      
      starsRef.current = stars;
      shootingStarsRef.current = [];
    }
    
    // Create a shooting star
    function createShootingStar(time: number) {
      const width = canvas.width;
      const height = canvas.height;
      
      // Create shooting star from a random edge of the screen
      const side = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
      let x, y, angle;
      
      // Determine start position and angle based on which side
      switch (side) {
        case 0: // top
          x = Math.random() * width;
          y = 0;
          angle = (Math.PI / 4) + (Math.random() * Math.PI / 2); // 45-135 degrees
          break;
        case 1: // right
          x = width;
          y = Math.random() * height;
          angle = (Math.PI * 3/4) + (Math.random() * Math.PI / 2); // 135-225 degrees
          break;
        case 2: // bottom
          x = Math.random() * width;
          y = height;
          angle = (Math.PI * 5/4) + (Math.random() * Math.PI / 2); // 225-315 degrees
          break;
        default: // left
          x = 0;
          y = Math.random() * height;
          angle = (Math.PI * 7/4) + (Math.random() * Math.PI / 2) % (Math.PI * 2); // 315-45 degrees
          break;
      }
      
      shootingStarsRef.current.push({
        x,
        y,
        length: 40 + Math.random() * 80, // Tail length
        speed: 5 + Math.random() * 10,
        angle,
        opacity: 0.7 + Math.random() * 0.3,
        active: true,
        timeCreated: time,
        duration: 1000 + Math.random() * 1000, // 1-2 seconds
      });
      
      lastShootingStarRef.current = time;
    }
    
    // Animation
    let animationId: number;
    let time = 0;

    const animate = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      time = timestamp / 1000; // Convert to seconds
      
      // Regular stars animation
      starsRef.current.forEach((star) => {
        // More complex twinkling pattern
        const currentOpacity = 
          star.opacity + 
          Math.sin((time + star.timeOffset) * star.blinkSpeed) * 0.3 + 
          Math.sin((time + star.timeOffset + 2) * star.blinkSpeed * 0.7) * 0.1;
        
        // No large glowing stars - just simple dots
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color.replace('1)', `${currentOpacity})`);
        ctx.fill();
      });
      
      // Add shooting stars randomly
      if (time * 1000 - lastShootingStarRef.current > 3000 + Math.random() * 5000) {
        createShootingStar(time * 1000);
      }
      
      // Animate shooting stars
      shootingStarsRef.current = shootingStarsRef.current.filter(star => {
        if (!star.active) return false;
        
        const timePassed = time * 1000 - star.timeCreated;
        if (timePassed > star.duration) {
          return false;
        }
        
        // Fade in/out animation
        let opacity = star.opacity;
        if (timePassed < 200) {
          // Fade in
          opacity = (timePassed / 200) * star.opacity;
        } else if (timePassed > star.duration - 200) {
          // Fade out
          opacity = ((star.duration - timePassed) / 200) * star.opacity;
        }
        
        // Calculate current position
        const distance = timePassed * star.speed / 50;
        const headX = star.x + Math.cos(star.angle) * distance;
        const headY = star.y + Math.sin(star.angle) * distance;
        
        // Check if we've gone off screen
        if (
          headX < -100 || headX > canvas.width + 100 || 
          headY < -100 || headY > canvas.height + 100
        ) {
          return false;
        }
        
        // Draw the shooting star
        const tailX = headX - Math.cos(star.angle) * star.length;
        const tailY = headY - Math.sin(star.angle) * star.length;
        
        // Create gradient for tail
        const gradient = ctx.createLinearGradient(headX, headY, tailX, tailY);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
        gradient.addColorStop(0.3, `rgba(76, 201, 240, ${opacity * 0.8})`);
        gradient.addColorStop(1, 'rgba(76, 201, 240, 0)');
        
        ctx.beginPath();
        ctx.moveTo(headX, headY);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5; // Slightly thinner shooting stars
        ctx.stroke();
        
        // Head glow - smaller
        ctx.beginPath();
        ctx.arc(headX, headY, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
        
        return true;
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default StarBackground;