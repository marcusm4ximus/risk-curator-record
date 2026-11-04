import { notFound } from "next/navigation";
import { Dossier } from "@/components/dossier";
import { loadRegistry } from "@/lib/registry";

export function generateStaticParams() {
  return loadRegistry().curators.map((curator) => ({ slug: curator.slug }));
}

export default async function CuratorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const curator = loadRegistry().curators.find((item) => item.slug === slug);
  if (!curator) notFound();
  return <Dossier slug={slug} />;
}
