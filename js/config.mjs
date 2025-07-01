import {processRuleBlocks} from "./adr.mjs";
import { loadRespecWithConfiguration } from "./organisation-config.mjs";

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

let spectralConfiguration;
async function fetchSpectralConfiguration() {
  const spectralResponse = await fetch('linter/spectral.yml');
  spectralConfiguration = await spectralResponse.text();
}

async function highlightSpectralCode(config, document) {
  //this is the function you call in 'postProcess', to load the highlighter
  const worker = await new Promise(resolve => {
    require(["core/worker"], ({ worker }) => resolve(worker));
  });

  const action = "highlight";
  const code = spectralConfiguration;
  const lang = "yaml";
  worker.postMessage({ action, code, languages: [lang] });
  return new Promise(resolve => {
    worker.addEventListener("message", function listener({ data }) {
      const { action: responseAction, language: responseLang } = data;
      if (responseAction === action && responseLang === lang) {
        worker.removeEventListener("message", listener);

        const codeElement = document.querySelector('.spectral-yaml code');
        codeElement.innerHTML = data.value;
        resolve();
      }
    });
  });
}

loadRespecWithConfiguration({
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
      },
      { 
        "company" : "Logius",
        "companyURL" : "https://www.logius.nl",
        "name" : "Tim van der Lippe"
      }
    ],
  github: "https://github.com/Logius-standaarden/API-Design-Rules",
  pubDomain: "api",
  publishDate: "2025-02-17",
  publishVersion: "2.0.2",
  previousPublishDate: "2025-01-07",
  previousPublishVersion: "2.0.1",
  shortName: "adr",
  specStatus: "WV",
  specType: "ST",
  pluralize: true,

  preProcess: [initializeHighlightJSYaml, fetchSpectralConfiguration],
  postProcess: [highlightSpectralCode, (config, document, utils) => processRuleBlocks(config, document, utils, spectralConfiguration)],
});
