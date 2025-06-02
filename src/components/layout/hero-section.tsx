"use client";

import * as React from "react";

import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { motion } from "motion/react";

import { Section } from "@/components/layout/section";
import { SearchPromptExample } from "@/components/search-prompt-example";
import { Heading } from "@/components/typography/heading";
import { Text } from "@/components/typography/text";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const containreRef = React.useRef<HTMLHeadingElement>(null);

  React.useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containreRef.current) return;

      containreRef.current.style.visibility = "visible";

      const { words } = splitText(containreRef.current.querySelector("h1")!);

      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 2,
          bounce: 0,
          delay: stagger(0.1),
        }
      );
    });
  }, []);

  return (
    <Section>
      <div className="flex min-h-[70svh] flex-col items-center justify-center">
        <div
          className="mb-12 flex flex-col items-center gap-4 text-center"
          ref={containreRef}
        >
          <Heading
            className="max-w-3xl text-4xl font-bold md:text-5xl lg:text-6xl"
            element="h1"
          >
            O melhor Tutor para o seu Curso de Tecnologia!
          </Heading>

          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Heading
              className="max-w-2xl text-xl md:text-2xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              roleType="subtitle"
              asChild
            >
              <p>
                Estamos aqui para te guiar, garantindo que você tenha a melhor
                experiência possível no seu curso.
              </p>
            </Heading>
          </motion.div>
        </div>

        <motion.div
          className="flex w-full flex-col items-center justify-center gap-12"
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <SearchPromptExample
            prompts={[
              "",
              "Onde fica a sala de monitoria...",
              "Quem são os monitores de AEDS 1...",
              "Como me torno um monitor...",
              "Como apresentar um trabalho...",
              "O que é um vetor...",
              "Como centralizar uma <div>...",
            ]}
          />

          <div className="mx-auto flex max-w-2xl gap-4">
            <Button className="h-12 rounded-lg" size="lg">
              <Text size="lg">Explorar Conteúdos</Text>
            </Button>

            <Button className="h-12 rounded-lg" size="lg" variant="outline">
              <Text size="lg">Contribua</Text>
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
