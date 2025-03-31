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

function processRuleBlocks(config, document) {
  const functionalRules = [];
  const technicalRules = [];
  for (const rule of document.querySelectorAll('.rule')) {
    if (!rule.id) {
      throw new Error(`Missing id for rule: ${rule.outerHTML}`);
    }
    const ruleId = rule.id;

    const ruleLabElement = rule.querySelector('.rulelab');
    ruleLabElement.innerText = `: ${ruleLabElement.innerText}`;
    const ruleLinkElement = document.createElement('a');
    ruleLinkElement.href = `#${ruleId}`;
    ruleLinkElement.innerText = ruleId;
    ruleLabElement.prepend(ruleLinkElement);

    let flagTitle;
    const flagType = rule.dataset.type;
    if (flagType === 'technical') {
      flagTitle = 'This is a technical design rule and hence should be tested automatically.';
      technicalRules.push(ruleLabElement);

      if (spectralConfiguration.includes(`#${ruleId}`)) {
        const lastDataListItem = rule.querySelector('dt:last-of-type');
        if (lastDataListItem.textContent !== 'How to test') {
          throw new Error(`Last element should be the "How to test" section. Found ${lastDataListItem.outerHTML}`);
        }
        const howToTest = rule.querySelector('dd:last-of-type');
        howToTest.innerHTML += `This rule can be automatically checked and an example test is shown in the <a href="#:~:text=${encodeURIComponent(`#${ruleId}`).replaceAll('-', '%2D')}">linter configuration</a>.`;
      }
    } else if (flagType === 'functional') {
      flagTitle = 'This is a functional design rule and hence cannot be tested automatically.';
      functionalRules.push(ruleLabElement);
    } else {
      throw new Error(`Missing type for rule: ${rule.outerHTML}`);
    }

    const flagElement = document.createElement('div');
    flagElement.title = flagTitle;
    flagElement.innerText = flagType;
    flagElement.classList.add('flag');
    rule.prepend(flagElement);
  }

  for (const [list, elementId] of [[functionalRules, '#functionalList'], [technicalRules, '#technicalList']]) {
    const listElement = document.querySelector(elementId);

    for (const ruleLabElement of list) {
      const listItem = document.createElement('li');
      listItem.innerHTML = ruleLabElement.innerHTML;
      listElement.append(listItem);
    }
  }
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
      },
      { 
        "company" : "Logius",
        "companyURL" : "https://www.logius.nl",
        "name" : "Tim van der Lippe"
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

  preProcess: [initializeHighlightJSYaml, fetchSpectralConfiguration],
  postProcess: [highlightSpectralCode, processRuleBlocks],
};
