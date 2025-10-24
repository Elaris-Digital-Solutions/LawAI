
"use client";

import React from "react";
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

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  titleClassName?: string;
}

function DisplayCard({
  className,
  icon = <Sparkles className="w-5 h-5 text-blue-400" />,
  title = "Title",
  description = "Card description goes here.",
  titleClassName = "text-blue-600",
  showText = false,
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
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
  stacked?: boolean;
}

export default function DisplayCards({ cards, stacked = true }: DisplayCardsProps) {
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

  // stacking offsets (in px). These produce a diagonal layered layout descending left-to-right.
  // stepX moves each next card to the right by increasing the left offset. stepY moves each card down.
  // Make stack more compact horizontally by reducing stepX
  const stepX = 28; // horizontal shift per card (px) - reduced for compactness
  const stepY = 24; // vertical shift per card (px)
  const baseTop = 140; // base vertical offset to place the whole stack lower so hover doesn't overlap navbar
  const baseLeft = 80; // additional left offset to push the whole stack further to the right

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

  // stacked (diagonal) layout descending left-to-right, anchored to the left
  return (
  <div className="cards-container relative w-full h-[640px] mt-6 pl-32 lg:pl-40">
      {displayCards.map((c, i) => {
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
              <DisplayCard {...c} showText={i === displayCards.length - 1} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

