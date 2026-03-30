import { processRuleBlocks } from "https://logius-standaarden.github.io/publicatie/respec/plugins/adr.mjs";
import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";
import { generateMermaidFigures } from "https://logius-standaarden.github.io/publicatie/respec/plugins/mermaid.mjs";

async function initializeHighlightJSYaml() {
  //this is the function you call in 'preProcess', to load the highlighter
  const worker = await new Promise(resolve => {
    require(["core/worker"], ({ worker }) => resolve(worker));
  });
  const action = "highlight-load-lang-self-registration";
  const langURL = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/yaml.min.js";
  const lang = "yaml";
  worker.postMessage({ action, langURL, lang });
  return new Promise(resolve => {
    worker.addEventListener("message", function listener({ data }) {
      const { action: responseAction, lang: responseLang } = data;
      if (responseAction === action && responseLang === lang) {
        worker.removeEventListener("message", listener);
        resolve();
      }
    });
  });
}

const LINTER_CONFIGURATION_PATH = 'media/linter.yaml';
let linterConfiguration;
async function fetchLinterConfiguration() {
  const linterResponse = await fetch(LINTER_CONFIGURATION_PATH);
  linterConfiguration = await linterResponse.text();
}

async function highlightLinterCode(config, document) {
  //this is the function you call in 'postProcess', to load the highlighter
  const worker = await new Promise(resolve => {
    require(["core/worker"], ({ worker }) => resolve(worker));
  });

  const action = "highlight";
  const code = linterConfiguration;
  const lang = "yaml";
  worker.postMessage({ action, code, languages: [lang] });
  return new Promise(resolve => {
    worker.addEventListener("message", function listener({ data }) {
      const { action: responseAction, language: responseLang } = data;
      if (responseAction === action && responseLang === lang) {
        worker.removeEventListener("message", listener);

        const codeElement = document.querySelector('.linter-yaml code');
        codeElement.innerHTML = data.value;
        const linkToConfiguration = document.createElement('div');
        linkToConfiguration.innerHTML = `Open the above details to inspect the linter configuration. You can also <a href="${LINTER_CONFIGURATION_PATH}">open the configuration file in separate tab</a>`
        linkToConfiguration.style.marginTop = '1em';
        document.querySelector('.linter-yaml').after(linkToConfiguration);
        resolve();
      }
    });
  });
}

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
        "companyURL" : "https://logius.nl",
        "name" : "Alexander Green"
      },
      { 
        "company" : "Logius",
        "companyURL" : "https://logius.nl",
        "name" : "Martin van der Plas"
      },
      { 
        "company" : "Logius",
        "companyURL" : "https://logius.nl",
        "name" : "Tim van der Lippe"
      }
    ],
  github: "https://github.com/Logius-standaarden/API-Design-Rules",
  pubDomain: "api",
  publishDate: "2025-08-27",
  publishVersion: "2.1.0",
  previousPublishDate: "2025-02-17",
  previousPublishVersion: "2.0.2",
  shortName: "adr",
  specStatus: "WV",
  specType: "ST",
  pluralize: true,

  preProcess: [initializeHighlightJSYaml, fetchLinterConfiguration],
  postProcess: [generateMermaidFigures, highlightLinterCode, (config, document, utils) => processRuleBlocks(config, document, utils, linterConfiguration)],

  localBiblio: {
    "ADR-encryption": {
      authors: ["P. Haasnoot"],
      href: "https://logius-standaarden.github.io/API-mod-encryption/",
      publisher: "Logius",
      title: "API Design Rules Module: Encryption",
      // TODO: verwijder voor publicatie
      status: "Draft",
    },
    "ADR-signing": {
      authors: ["P. Haasnoot"],
      href: "https://logius-standaarden.github.io/API-mod-signing/",
      publisher: "Logius",
      title: "API Design Rules Module: Signing",
      // TODO: verwijder voor publicatie
      status: "Draft",
    },
  }
});
