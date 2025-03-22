'use client';

import { useEffect, useState } from 'react';

interface Star {
  x: number;
  y: number;
  size: string;
  animation: string;
  delay: number;
}

interface StarCluster {
  x: number;
  y: number;
  scale: number;
  opacity: number;
}

export default function StarryBackground() {
  const [stars, setStars] = useState<Star[]>([]);
  const [clusters, setClusters] = useState<StarCluster[]>([]);

  useEffect(() => {
    // Создаем звезды
    const newStars = Array.from({ length: 50 }, () => {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const rand = Math.random();
      
      let size = '';
      let animation = '';
      
      if (rand > 0.9) {
        size = 'star-bright';
        animation = 'twinkle-fast';
      } else if (rand > 0.7) {
        size = 'star-bright';
        animation = 'twinkle-medium';
      } else {
        size = '';
        animation = 'twinkle-slow';
      }

      return {
        x,
        y,
        size,
        animation,
        delay: Math.random() * 4
      };
    });

    // Создаем скопления звезд
    const newClusters = Array.from({ length: 3 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      scale: 0.5 + Math.random() * 1.5,
      opacity: 0.05 + Math.random() * 0.1
    }));

    setStars(newStars);
    setClusters(newClusters);
  }, []);

  return (
    <div className="starry-background">
      {/* Скопления звезд */}
      {clusters.map((cluster, index) => (
        <div
          key={`cluster-${index}`}
          className="star-cluster float-effect"
          style={{
            left: `${cluster.x}%`,
            top: `${cluster.y}%`,
            transform: `scale(${cluster.scale})`,
            opacity: cluster.opacity,
            animationDelay: `${index * -5}s`
          }}
        />
      ))}

      {/* Отдельные звезды */}
      {stars.map((star, index) => (
        <div
          key={`star-${index}`}
          className={`star ${star.size} ${star.animation}`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDelay: `${star.delay}s`
          }}
        />
      ))}
    </div>
  );
} 