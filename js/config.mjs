import { processRuleBlocks, initializeHighlightJSYaml, fetchLinterConfiguration, highlightLinterCode } from "https://logius-standaarden.github.io/publicatie/respec/plugins/adr.mjs";
import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";
import { generateMermaidFigures } from "https://logius-standaarden.github.io/publicatie/respec/plugins/mermaid.mjs";

loadRespecWithConfiguration({
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
      },
      { 
        "company" : "Logius",
        "companyURL" : "https://www.logius.nl",
        "name" : "Tim van der Lippe"
      }
    ],
  github: "https://github.com/Logius-standaarden/API-Design-Rules",
  pubDomain: "api",
  publishDate: "2026-09-29",
  publishVersion: "2.2.2",
  previousPublishDate: "2026-06-18",
  previousPublishVersion: "2.2.1",
  shortName: "adr",
  specStatus: "WV",
  specType: "ST",
  pluralize: true,
  spellcheck: false,

  preProcess: [
    initializeHighlightJSYaml,
    fetchLinterConfiguration,
  ],
  postProcess: [
    generateMermaidFigures,
    highlightLinterCode,
    processRuleBlocks,
  ],

  localBiblio: {
    "ADR-encryption": {
      authors: ["P. Haasnoot"],
      href: "https://gitdocumentatie.logius.nl/publicatie/api/mod-encryption/1.0/",
      publisher: "Logius",
      title: "API Design Rules Module: Encryption",
    },
    "ADR-signing": {
      authors: ["P. Haasnoot"],
      href: "https://gitdocumentatie.logius.nl/publicatie/api/mod-signing/1.0/",
      publisher: "Logius",
      title: "API Design Rules Module: Signing",
    },
  }
});
