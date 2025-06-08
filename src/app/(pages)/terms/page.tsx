import { notFound } from "next/navigation";

import type { Metadata } from "next";

export default function TermsPage() {
  notFound();
}

export const metadata: Metadata = {
  title: "Termos | PUC Tutor",
  description: "O melhor Tutor para o seu Curso de Tecnologia!",
};
