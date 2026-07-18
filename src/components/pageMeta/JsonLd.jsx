import React from "react";
import { Helmet } from "react-helmet-async";

/**
 * Inject JSON-LD structured data for Google rich results.
 * @param {object|object[]} data
 */
export default function JsonLd({ data }) {
  if (!data) return null;
  const list = Array.isArray(data) ? data : [data];

  return (
    <Helmet>
      {list.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
