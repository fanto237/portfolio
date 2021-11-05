import React from "react";
import { Helmet } from "react-helmet";

function Metadecoration({ title, description }) {
  return (
    <Helmet>
      <title>{title + " | Portfolio"}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}

export default Metadecoration;
