import React from 'react';
import Helmet from 'react-helmet';

/**
 * Generates dynamically populated `<meta>`, `<link>`, and/or `<title>` nodes in
 * the document `<head>` so that web crawlers are able to access the correct
 * metadata immediately on page load. This class is responsible for the features page
 * metadata
 * @returns {xml} The FeaturesHelmet component
 */
const FeaturesHelmet = () => (
  <Helmet>
    <title>Title</title>
  </Helmet>
);

export default FeaturesHelmet;
