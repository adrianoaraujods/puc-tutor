import { notFound } from "next/navigation";

import type { Metadata } from "next";

export default function AboutPage() {
  notFound();
}

export const metadata: Metadata = {
  title: "Sobre | PUC Tutor",
  description: "O melhor Tutor para o seu Curso de Tecnologia!",
};
