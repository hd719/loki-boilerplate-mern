import * as React from 'react';
import Helmet from 'react-helmet';

/**
 * Generates dynamically populated `<meta>`, `<link>`, and/or `<title>` nodes in
 * the document `<head>` so that web crawlers are able to access the correct
 * metadata immediately on page load. This class is responsible for the passwordReset page
 * metadata
 * @returns {xml} The PasswordResetHelmet component
 */
class PasswordResetHelmet extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>TODO</title>
          <link href="TODO" rel="canonical" />
        </Helmet>
      </div>
    );
  }
}

export default PasswordResetHelmet;
