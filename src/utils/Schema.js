// components/SchemaMarkup.js
import React from "react";

const SchemaMarkup = () => (
  <>
    <script type="application/ld+json">
      {{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "GTS Recruitment",
        url: "https://www.yourwebsite.com",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.yourwebsite.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
        hasPart: [
          {
            "@type": "WebPage",
            "@id": "https://www.yourwebsite.com/about-us",
            name: "About Us",
            url: "https://www.yourwebsite.com/about-us",
          },
          {
            "@type": "WebPage",
            "@id": "https://www.yourwebsite.com/join-us",
            name: "Join Us",
            url: "https://www.yourwebsite.com/join-us",
          },
          {
            "@type": "WebPage",
            "@id": "https://www.yourwebsite.com/contact-us",
            name: "Contact Us",
            url: "https://www.yourwebsite.com/contact-us",
          },
        ],
      }}
    </script>
  </>
);

export default SchemaMarkup;
