"use client";

import React, { useEffect, useRef } from 'react';

interface MatrixRainProps {
  color?: string;
  className?: string;
}

const MatrixRain: React.FC<MatrixRainProps> = ({
  color = '#60A5FA', // Un azul claro que complementa tu diseño
  className,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight;

    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const alphabet = katakana + latin + nums;

    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const rainDrops: number[] = [];

    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1;
    }

    const draw = () => {
      context.fillStyle = 'rgba(14, 24, 41, 0.05)'; // Fondo azul oscuro semi-transparente para el efecto de estela
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = color;
      context.font = `${fontSize}px monospace`;

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };

    const interval = setInterval(draw, 30);

    const handleResize = () => {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [color]);

  return <canvas ref={canvasRef} className={className} />;
};

export default MatrixRain;