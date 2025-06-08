import { notFound } from "next/navigation";

import type { Metadata } from "next";

export default function ContactPage() {
  notFound();
}

export const metadata: Metadata = {
  title: "Contato | PUC Tutor",
  description: "O melhor Tutor para o seu Curso de Tecnologia!",
};
