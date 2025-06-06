import { Section } from "@/components/layout/section";
import { Heading } from "@/components/typography/heading";

export default function NotFoundPage() {
  return (
    <Section className="my-16">
      <Heading
        className="text-center text-4xl font-bold md:text-5xl lg:text-6xl"
        element="h1"
      >
        404 - Página não encontrada
      </Heading>
    </Section>
  );
}
