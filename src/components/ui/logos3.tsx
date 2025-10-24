"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Built with these technologies",
  logos = [
    {
      id: "logo-1",
      description: "React",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      className: "h-12.5 w-auto",
    },
    {
      id: "logo-2",
      description: "Next.js",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      className: "h-12.5 w-auto",
    },
    {
      id: "logo-3",
      description: "TypeScript",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      className: "h-12.5 w-auto",
    },
    {
      id: "logo-4",
      description: "Tailwind CSS",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      className: "h-12.5 w-auto",
    },
    {
      id: "logo-5",
      description: "shadcn/ui",
      image: "https://images.seeklogo.com/logo-png/51/2/shadcn-ui-logo-png_seeklogo-519786.png",
      className: "h-12.5 w-auto",
    },
    {
      id: "logo-6",
      description: "Framer Motion",
      image: "https://www.ejable.com/wp-content/uploads/2022/04/Framer-Motion-1200x900.webp",
      className: "h-12.5 w-auto",
    },
    {
      id: "logo-7",
      description: "Supabase",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
      className: "h-12.5 w-auto",
    },
    {
      id: "logo-8",
      description: "PostgreSQL",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      className: "h-12.5 w-auto",
    },
    {
      id: "logo-9",
      description: "OpenAI",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
      className: "h-12.5 w-auto",
    },
    {
      id: "logo-10",
      description: "Python",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      className: "h-12.5 w-auto",
    },
    {
      id: "logo-11",
      description: "TensorFlow",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      className: "h-12.5 w-auto",
    },
    {
      id: "logo-12",
      description: "Docker",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      className: "h-12.5 w-auto",
    },
    {
      id: "logo-13",
      description: "Vercel",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
      className: "h-12.5 w-auto",
    },
    {
      id: "logo-14",
      description: "Cloudflare",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg",
      className: "h-12.5 w-auto",
    },
    {
      id: "logo-15",
      description: "Figma",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      className: "h-12.5 w-auto",
    },
    {
      id: "logo-16",
      description: "Three.js",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
      className: "h-12.5 w-auto",
    },
    {
      id: "logo-17",
      description: "Firebase",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      className: "h-12.5 w-auto",
    },
    {
      id: "logo-18",
      description: "AWS",
      image: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/aws-icon.png",
      className: "h-12.5 w-auto",
    },
    {
      id: "logo-19",
      description: "Stripe",
      image: "https://www.svgrepo.com/show/331592/stripe-v2.svg",
      className: "h-12.5 w-auto",
    },
    {
      id: "logo-20",
      description: "Prisma",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
      className: "h-12.5 w-auto",
    },
  ],
  className,
}: Logos3Props) => {
  return (
    <section className={cn("py-24 sm:py-32", className)}>
      <div className="container flex flex-col items-center text-center">
        <h1 className="my-6 text-2xl font-bold lg:text-4xl">{heading}</h1>
      </div>
      <div className="pt-10 md:pt-16 lg:pt-20">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-7xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true, speed: 2 })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/6 justify-center pl-0"
                >
                  <div className="mx-0.5 flex shrink-0 flex-row items-center justify-center gap-4 py-4">
                    <div className="flex items-center justify-center h-16 w-16">
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className={logo.className}
                      />
                    </div>
                      <span className="text-base font-bold text-foreground text-left leading-tight whitespace-nowrap tracking-wide">
                      {logo.description}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
