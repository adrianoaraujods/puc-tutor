import * as React from "react";
import { notFound } from "next/navigation";

import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page";

import {
  CONTENT_PATH,
  GITHUB_BRANCH,
  GITHUB_OWNER,
  GITHUB_REPO,
} from "@/lib/config";
import { source } from "@/lib/source";
import { getMDXComponents } from "@/components/typography/mdx-components";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage
      container={{ className: "-mt-[var(--navbar-height)]" }}
      toc={page.data.toc}
      full={page.data.full}
      editOnGithub={{
        owner: GITHUB_OWNER,
        repo: GITHUB_REPO,
        sha: GITHUB_BRANCH,
        path: `${CONTENT_PATH}/${page.file.path}`,
      }}
      lastUpdate={
        Number.isNaN(page.data.lastModified)
          ? undefined
          : page.data.lastModified
      }
      tableOfContent={{ style: "clerk" }}
      tableOfContentPopover={{ style: "clerk" }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>

      <DocsBody>
        <MDX components={getMDXComponents()} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: `${page.data.title} | PUC Tutor`,
    description: page.data.description,
  };
}
