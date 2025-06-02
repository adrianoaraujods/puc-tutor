"use client";

import * as React from "react";
import Link from "next/link";

import { motion } from "motion/react";

import { GITHUB_URL } from "@/lib/config";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/typography/heading";
import { Text } from "@/components/typography/text";

const steps: { title: string; description: React.ReactNode }[] = [
  {
    title: "Modifique ou Crie",
    description: (
      <>
        Utilize o formato{" "}
        <Link
          className="font-bold underline-offset-3 hover:underline"
          href="https://www.markdownguide.org/getting-started/#what-is-markdown"
          target="_blank"
        >
          Markdown
        </Link>{" "}
        para adicionar ou aprimorar nossos conteúdos.
      </>
    ),
  },
  {
    title: "Faça um Pull Request",
    description: (
      <>
        Envie suas contribuições ao{" "}
        <Link
          className="font-bold underline-offset-3 hover:underline"
          href={GITHUB_URL}
          target="_blank"
        >
          nosso repositório
        </Link>{" "}
        no GitHub.
      </>
    ),
  },
  {
    title: "Vistoria e Aprovação",
    description: (
      <>
        Por último, nossa equipe irá revisar seu conteúdo para garantir que ele
        siga{" "}
        <Link
          className="font-bold underline-offset-3 hover:underline"
          href="/terms"
        >
          nossas diretrizes
        </Link>
      </>
    ),
  },
];

export function ContributionSection() {
  return (
    <Section className="bg-primary/5 py-24">
      <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <Heading
            element="h2"
            variant="bold"
            className="text-3xl tracking-tighter sm:text-4xl md:text-5xl"
          >
            Como posso Contribuir?
          </Heading>

          <Text className="block max-w-4xl md:text-xl" variant="muted">
            Sua contribuição é valiosa para nós, acreditamos em que a união faz
            a força! Para enriquecermos ainda mais nossos conteúdos, siga os
            passos abaixo para adicionarmos sua contribuição:
          </Text>
        </div>
      </div>

      <ul className="grid items-start gap-6 lg:grid-cols-3 lg:gap-12">
        {steps.map(({ title, description }, i) => (
          <motion.li
            className="flex flex-col items-center text-center"
            key={i}
            initial={{ opacity: 0.3, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.5 + 0.25, duration: 0.5 }}
            viewport={{ once: true, margin: "-128px" }}
          >
            <div className="bg-primary text-primary-foreground mb-4 flex size-16 items-center justify-center rounded-full">
              <Text size="2xl" variant="mono">
                {i + 1}
              </Text>
            </div>

            <Heading element="h3" variant="bold">
              {title}
            </Heading>

            <Text size="xl" variant="muted">
              {description}
            </Text>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
