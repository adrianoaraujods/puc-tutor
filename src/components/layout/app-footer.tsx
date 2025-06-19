"use client";

import * as React from "react";
import Link from "next/link";

import { GITHUB_URL, NAVIGATION_LINKS } from "@/lib/config";
import { cn } from "@/lib/utils";
import { GithubIcon } from "@/components/icon/github-icon";
import { PUCTutorIcon } from "@/components/icon/puc-tutor-icon";
import { Section } from "@/components/layout/section";
import { Text } from "@/components/typography/text";
import { Button } from "@/components/ui/button";

export function AppFooter({
  className,
  ...props
}: React.ComponentProps<"footer">) {
  return (
    <Section asChild>
      <footer
        data-slot="app-footer"
        className={cn("bg-background border-t py-12", className)}
        {...props}
      >
        <nav className="mb-8 grid gap-8 sm:grid-cols-[auto_1fr]">
          <div className="grid size-fit max-w-xs">
            <PUCTutorIcon className="mb-4 h-12" />

            <Text variant="muted" className="mb-2">
              Feito de alunos para alunos, por melhores caminhos para todos!
            </Text>

            <div className="flex gap-2">
              <Button
                className="text-muted-foreground"
                size="icon"
                variant="ghost"
                asChild
              >
                <Link href={GITHUB_URL} target="_blank">
                  <GithubIcon className="size-6" />

                  <span className="sr-only">Repositório Github</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid justify-between gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-4">
              <Text size="lg">Conteúdo</Text>

              <ul className="text-muted-foreground flex flex-col gap-2">
                <li>
                  <Link href="/content/ajuda">Ajuda</Link>
                </li>
                <li>
                  <Link href="/content/campus">Campus</Link>
                </li>
                <li>
                  <Link href="/content/disciplinas">Disciplinas</Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <Text size="lg">Cursos</Text>

              <ul className="text-muted-foreground flex flex-col gap-2">
                <li>
                  <Link href="/content/cursos/ciencia-da-computacao">
                    Ciência da Computação
                  </Link>
                </li>
                <li>
                  <Link href="/content/cursos/ciencia-de-dados">
                    Ciência de Dados
                  </Link>
                </li>
                <li>
                  <Link href="/content/cursos/engenharia-da-computacao">
                    Engenharia da Computação
                  </Link>
                </li>
                <li>
                  <Link href="/content/cursos/engenharia-de-software">
                    Engenharia de Software
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <Text size="lg">Páginas</Text>

              <ul className="text-muted-foreground flex flex-col gap-2">
                {NAVIGATION_LINKS.map(({ title, href }, i) => (
                  <li key={i}>
                    <Link href={href}>{title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        <div className="border-t pt-4">
          <Text variant="muted">
            © {new Date().getFullYear()} PUC Tutor. Todos os direitos
            reservados.
          </Text>
        </div>
      </footer>
    </Section>
  );
}
