interface JsonLdProps {
  data: object | null | undefined;
}

/** Renders a JSON-LD structured-data block. Server-rendered, so crawlers read it straight from the HTML. */
const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  if (!data) return null;

  return (
    <script
      type="application/ld+json"
      // "<" is escaped so content can never close the script tag early.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
};

export default JsonLd;
