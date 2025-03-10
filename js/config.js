function highlightSpectralYaml(config, document) {
  // const highlightScript = document.createElement('script');
  // highlightScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js';
  // document.head.appendChild(highlightScript);
  const yamlConfiguration = document.createElement('script');
  yamlConfiguration.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/yaml.min.js';
  document.head.appendChild(yamlConfiguration);
  // window.hljs.highlightElement(document.querySelector('.spectral-yaml'));
  console.log(window.hljs);
}

var respecConfig = {
  alternateFormats: [ { 
        "label" : "pdf",
        "uri" : "API-Design-Rules.pdf"
      } ],
  authors: [ 
      { 
        "company" : "Het Kadaster",
        "companyURL" : "https://www.kadaster.nl",
        "name" : "Jasper Roes"
      },
      { 
        "company" : "Het Kadaster",
        "companyURL" : "https://www.kadaster.nl",
        "name" : "Joost Farla"
      }
    ],
  editors: [ 
      { 
        "company" : "Geonovum",
        "companyURL" : "https://www.geonovum.nl",
        "name" : "Frank Terpstra"
      },
      { 
        "company" : "Geonovum",
        "companyURL" : "https://www.geonovum.nl",
        "name" : "Jan van Gelder"
      },
      { 
        "company" : "Logius",
        "companyURL" : "https://www.logius.nl",
        "name" : "Alexander Green"
      },
      { 
        "company" : "Logius",
        "companyURL" : "https://www.logius.nl",
        "name" : "Martin van der Plas"
      }
    ],
  github: "https://github.com/Logius-standaarden/API-Design-Rules",
  pubDomain: "api",
  publishDate: "2025-01-07",
  publishVersion: "2.0.1",
  previousPublishDate: "2024-03-07",
  previousPublishVersion: "2.0.0",
  shortName: "adr",
  specStatus: "WV",
  specType: "ST",
  pluralize: true,

  postProcess: [highlightSpectralYaml],
};
