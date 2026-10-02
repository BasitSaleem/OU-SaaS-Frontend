"use client";

import { usePathname } from "next/navigation";
import JsonLd from "./JsonLd";
import { PAGE_SCHEMAS } from "@/constant/seoSchemas";

interface GraphSchema {
  "@context": string;
  "@graph": object[];
}

/** One standalone JSON-LD object per schema type: each @graph node becomes its own block, linked to the others by @id. */
const splitGraph = ({ "@context": context, "@graph": nodes }: GraphSchema) => nodes.map((node) => ({ "@context": context, ...node }));

/**
 * Renders the current route's JSON-LD, one <script> per schema type. It lives in the root layout's <head>
 * (a page can't write to <head> itself), and still runs on the server, so the scripts are in the HTML crawlers receive.
 */
const SchemaHead: React.FC = () => {
  const pathname = usePathname();
  const normalized = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  const schemas = (PAGE_SCHEMAS[normalized] ?? []).flatMap((schema) => splitGraph(schema as GraphSchema));

  return (
    <>
      {schemas.map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}
    </>
  );
};

export default SchemaHead;
