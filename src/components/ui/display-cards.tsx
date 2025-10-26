"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Sparkles,
  Briefcase,
  BookOpen,
  FileEdit,
  FolderLock,
  ShieldCheck,
  Bot,
  BarChart3,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  titleClassName?: string;
  cardIndex?: number; // Índice para mostrar el número de la tarjeta
}

function DisplayCard({
  className,
  icon = <Sparkles className="w-5 h-5 text-blue-400" />,
  title = "Title",
  description = "Card description goes here.",
  titleClassName = "text-blue-600",
  showText = false,
  cardIndex,
}: DisplayCardProps & { showText?: boolean }) {
  return (
    <div
      className={cn(
        "relative flex h-56 w-[20rem] select-none flex-col justify-start rounded-xl border border-border bg-white px-6 pt-4 pb-5",
        className
      )}
    >
      <div className="flex flex-col items-start gap-2">
        <div className="flex items-center gap-3">
          <span className="p-2 rounded-full bg-blue-900/5">{icon}</span>
          <h3 className={cn("text-lg font-semibold text-black", titleClassName)}>{title}</h3>
        </div>
        <p className={cn("text-sm text-black/80 leading-snug transition-opacity duration-300", showText ? 'opacity-100' : 'opacity-0 group-hover:opacity-100')}>{description}</p>
      </div>
      {/* Número de tarjeta en círculo */}
      {cardIndex !== undefined && (
        <div className="absolute bottom-3 right-3 w-5 h-5 rounded-full bg-blue-900/5 flex items-center justify-center">
          <span className="text-xs font-medium text-blue-500">{cardIndex + 1}</span>
        </div>
      )}
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
  stacked?: boolean;
}

export default function DisplayCards({ cards, stacked = true }: DisplayCardsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // default data (7 cards) if none provided
  const defaultCards: DisplayCardProps[] = [
    {
      title: "Entrenamiento de practicantes",
      description:
        "Asistente que guía y capacita a nuevos abogados usando documentación interna.",
      icon: <Briefcase className="w-5 h-5 text-blue-500" />,
      titleClassName: "text-black",
    },
    {
      title: "Biblioteca jurídica virtual",
      description:
        "Organiza documentos y casos, con buscador inteligente y filtros temáticos.",
      icon: <BookOpen className="w-5 h-5 text-blue-500" />,
      titleClassName: "text-black",
    },
    {
      title: "Desarrollo rápido de plantillas",
      description:
        "Crea borradores de contratos y demandas a partir de modelos existentes.",
      icon: <FileEdit className="w-5 h-5 text-blue-500" />,
      titleClassName: "text-black",
    },
    {
      title: "Repositorio legal unificado",
      description:
        "Almacena, etiqueta y versiona documentos internos con acceso seguro.",
      icon: <FolderLock className="w-5 h-5 text-blue-500" />,
      titleClassName: "text-black",
    },
    {
      title: "Seguridad y privacidad on-premise",
      description: "Despliegue local sin exponer datos al exterior.",
      icon: <ShieldCheck className="w-5 h-5 text-blue-500" />,
      titleClassName: "text-black",
    },
    {
      title: "Chatbot jurídico inteligente",
      description:
        "Responde preguntas, cita jurisprudencia y asiste en redacción jurídica.",
      icon: <Bot className="w-5 h-5 text-blue-500" />,
      titleClassName: "text-black",
    },
    {
      title: "Análisis de productividad",
      description:
        "Mide rendimiento de practicantes y eficiencia en creación de documentos.",
      icon: <BarChart3 className="w-5 h-5 text-blue-500" />,
      titleClassName: "text-black",
    },
  ];

  const displayCards = cards && cards.length === 7 ? cards : defaultCards;
  const [currentCards, setCurrentCards] = useState<(DisplayCardProps & { originalIndex: number })[]>(
    displayCards.map((card, idx) => ({ ...card, originalIndex: idx }))
  );

  // Rotate cards: move active card to the back of the stack
  const handleCardClick = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Update active index and rotate cards
    setActiveIndex((prev) => (prev + 1) % currentCards.length);
    
    setCurrentCards((cards) => {
      const newCards = [...cards];
      const [clicked] = newCards.splice(index, 1);
      newCards.push(clicked);
      return newCards;
    });

    // Reset animation lock after transition
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Constants for card presentation
  const CARD_SCALE_STEP = 0.03; // Each card is 3% smaller than the previous
  const CARD_OFFSET_Y = 20; // Vertical offset between cards (px)
  const MAX_CARDS_VISIBLE = 5; // Show only top 5 cards in stack
  
  // Card appearance calculations based on position in stack
  const getCardStyle = (index: number) => {
    const positionFromTop = index;
    const scale = 1 - positionFromTop * CARD_SCALE_STEP;
    const y = positionFromTop * CARD_OFFSET_Y;
    const opacity = index < MAX_CARDS_VISIBLE ? 1 : 0;
    
    return {
      scale,
      y,
      opacity,
      zIndex: 1000 - index, // Higher cards in visual stack have higher z-index
    };
  };

  // Desktop layout constants
  const stepX = 28; // horizontal shift per card (px)
  const stepY = 24; // vertical shift per card (px)
  const baseTop = 140; // base vertical offset
  const baseLeft = 80; // additional left offset

  // If stacked === false, render a plain responsive grid (useful for demos or mobile).
  if (!stacked) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayCards.map((c, i) => (
          <DisplayCard key={i} {...c} />
        ))}
      </div>
    );
  }

  // stacked (diagonal) layout descending left-to-right, anchored to the left on large screens.
  // For small screens we render a centered vertical stack so cards are fully visible and
  // don't get cut off by left padding / absolute positioning.
  return (
    <>
      {/* Mobile: Continuous carousel stack */}
      <div className="lg:hidden w-full flex flex-col items-center space-y-4 mt-8">
        <div className="relative h-[450px] w-[20rem]">
          <AnimatePresence mode="popLayout">
            {currentCards.slice(0, MAX_CARDS_VISIBLE).map((card, index) => {
              const style = getCardStyle(index);
              return (
                <motion.div
                  key={card.title}
                  className="absolute w-full cursor-pointer origin-top"
                  initial={style}
                  animate={style}
                  exit={{ scale: 0.5, y: -100, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    mass: 1,
                  }}
                  onClick={() => !isAnimating && handleCardClick(index)}
                  whileHover={{ scale: style.scale + 0.02 }}
                  style={{ 
                    zIndex: style.zIndex,
                    transformOrigin: "center top"
                  }}
                >
                  <DisplayCard {...card} showText={index === 0} cardIndex={card.originalIndex} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Large screens: original diagonal stacked absolute layout */}
      <div className="hidden lg:block cards-container relative w-full h-[640px] mt-6 pl-32 lg:pl-40">
        {displayCards.map((c: DisplayCardProps, i: number) => {
          const left = baseLeft + i * stepX; // increase left offset per index (with baseLeft)
          const top = baseTop + i * stepY; // move whole stack down and stagger vertically
          return (
            <div
              key={i}
              className="absolute group"
              style={{ left: `${left}px`, top: `${top}px`, zIndex: 10 + i }}
            >
              {/* static hover zone is this wrapper (group). The inner card will translate on group-hover
                  so the hover area doesn't move with the card (prevents chasing) */}
              <div className="transform transition-transform duration-300 ease-out group-hover:-translate-y-[130px] group-hover:z-50 group-hover:shadow-2xl">
                <DisplayCard {...c} showText={i === displayCards.length - 1} cardIndex={c.originalIndex} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
