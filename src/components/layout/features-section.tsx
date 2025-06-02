"use client";

import * as React from "react";

import { motion } from "motion/react";

import { Section } from "@/components/layout/section";
import { Heading } from "@/components/typography/heading";
import { Text } from "@/components/typography/text";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  BookCopyIcon,
  FilePenLineIcon,
  InfoIcon,
  LockKeyholeOpenIcon,
} from "lucide-react";

import type { LucideProps } from "lucide-react";

const cards: FeatureCard[] = [
  {
    icon: BookCopyIcon,
    color: "rgba(249, 115, 22, 0.5)",
    title: "Conteúdo Detalhado",
    description:
      "Materiais de estudo, resumos e dicas essenciais para cada disciplina, te ajudando a focar no que realmente importa.",
  },
  {
    icon: InfoIcon,
    color: "rgba(168, 85, 247, 0.5)",
    title: "Dicas importantes",
    description:
      "Orientações valiosas sobre os desafios e oportunidades de cada período do seu curso.",
  },
  {
    icon: FilePenLineIcon,
    color: "rgba(16, 185, 129, 0.5)",
    title: "Preparação para Provas e Trabalhos",
    description:
      "Veja questões de provas e trabalhos passados e suas resoluções, para você se preparar de verdade.",
  },
  {
    icon: LockKeyholeOpenIcon,
    color: "rgba(132, 204, 22, 0.5)",
    title: "Material aberto",
    description:
      "Nossos conteúdos são completamente Open-Source, possibilitando que qualquer um contribua com mais informações.",
  },
];

export function FeaturesSection() {
  return (
    <Section className="bg-background border-y py-24">
      <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <Heading
            element="h2"
            variant="bold"
            className="text-3xl tracking-tighter sm:text-4xl md:text-5xl"
          >
            O que Oferecemos?
          </Heading>

          <Text className="block max-w-2xl md:text-xl" variant="muted">
            Feito por alunos para alunos, com o PUC Tutor, você terá acesso a um
            universo de conhecimento feito sob medida para o seu sucesso
            acadêmico.
          </Text>
        </div>
      </div>

      <ul className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cards.map((feature, i) => (
          <li key={i} className="h-full">
            <CardFeature feature={feature} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

export type FeatureCard = {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
  color?: string;
};

export function CardFeature({
  feature: { description, icon, title, color },
}: {
  feature: FeatureCard;
}) {
  const Icon = icon;

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-128px" }}
    >
      <Card className="bg-background h-full gap-1 border backdrop-blur-sm">
        <CardHeader className="grid grid-cols-[auto_1fr] gap-2">
          <Icon stroke={color} className="size-8" />

          <CardTitle>
            <Heading element="h3" size="xl" variant="bold">
              {title}
            </Heading>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <Text variant="muted" size="lg">
            {description}
          </Text>
        </CardContent>

        {/* Always visible animated gradient background */}
        <motion.div
          className="absolute inset-0 z-0 opacity-20 dark:opacity-30"
          initial={{ opacity: 0 }}
          animate={{
            background: [
              `radial-gradient(circle at 30% 30%, ${color} 0%, transparent 60%)`,
              `radial-gradient(circle at 70% 70%, ${color} 0%, transparent 60%)`,
            ],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </Card>
    </motion.div>
  );
}
