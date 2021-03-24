var respecConfig = {
  // this template doesn't use all possible config parameters
  // see https://github.com/Logius-standaarden/respec/wiki for all options

  // specStatus currently supported
  // WW, GN-WV: Werkversie
  // CV, GN-CV: Consultatie versie
  // VV, GN-VV: Vastgestelde versie (of Versie ter vaststelling)
  // DEF, GN-DEF: Definitieve versie
  // EO: Einde ondersteuning, verouderde versie, vervangen door nieuwe versie
  // TG: Versie teruggetrokken
  // BASIS, GN-BASIS: 'geen status'
  specStatus: "DEF",

  // SpecType currently supported
  // NO: "Norm"
  // ST: "Standaard"
  // IM: "Informatiemodel"
  // PR: "Praktijkrichtlijn"
  // HR: "Handreiking"
  // WA: "Werkafspraak"
  // AL: "Algemeen"
  // BD: "Beheerdocumentatie"
  // BP: "Best Practice"
  specType: "ST",

  // subtitle will be shown below title, can be omitted 
  // subtitle: "",

  
  // A YYYY-MM-DD date. The publication date of the present document. 
  // Als er geen publishDate is opgegeven, genereert ReSpec de dataum o.b.v. de laatste wijzigingen
  // Belangrijk: als publishDate niet opgegeven is, wordt bij de link "Laatst gepubliceerde versie" "geen" gezet. Anders wordt een link opgebouwd voor de laatste versie, met het formaat:
  publishDate: "2018-10-07",

  // A YYYY-MM-DD date. When there is a previous release of a given specification, (W3C)
  // previousPublishDate: "2017-10-12",

  // The actual version preferably in SEMVER notation
  // for Logius specifications this field is required: if this parameters exists this value will be used as directory name  
  // currently, the 'this version' url will only point to the [publication server] if specStatus is "DEF"
  // otherwise it will refer to the the github.io environment   
  // (if this parameter does not exist the publisDate will be used.)
  publishVersion: "1.5.1",

  // The previous version preferably in SEMVER notation
  // for Logius specifications this field is optional: if this parameters exists this value will be used as directory name  
  // (if this parameter does not exist the previousPublisDate will be used, which may lead to an incorrect url .)
  //previousPublishVersion: "1.5",

  // The specification's publish domain, which is used to publish the specification
  // the url in the header thisVersion is generated like `<conf.nl_organisationPublishURL>/<conf.pubDomain>/<conf.shortName>/`
  pubDomain: "dk",

  // The specification's "short name", which is the name used in NL_Respec URLs
  shortName: "architectuur",

  // Based on the example settings Respec will generate the following links in the header:
  // https://publicatie.centrumvoorstandaarden.nl/dk/ebms/
  // https://{nl_organisationPublishURL}/{pubDomain}/{shortName}/
  

  // Zie https://github.com/w3c/respec/wiki/previousMaturity. Dit moet een
  // A YYYY-MM-DD date. When a previousPublishDate is specified, this is typically required as well in order to generate the "Previous Version"
  //previousMaturity: "WV",

  // license can be one of the following: cc0, cc-by or cc-by-nd((default)) (see https://github.com/Geonovum/respec/wiki/license )
  license: 'cc-by-nd',

  // Overrides the standard logo with one or more other logos. (see https://respec.org/docs/#logos)
  // Geef een lege array op als er geen <default> logo moet staan
  // logos: [], 

  //Adds a JSON-LD script element containing schema.org information, which can be useful for search engines.
  doJsonLd: true,

  // An array of person objects describing the editors of the document
  // this can be simple or more elaborated
  editors: [{
    name: "Peter Haasnoot",
    url: "https://logius.nl/standaarden",
    company: "Logius",
  },
  {
    name: "Pieter Hering",
    url: "https://logius.nl/standaarden",
    company: "Logius",
  }
  ],
  // An array of person objects describing the authors of the document
  // this can be simple or more elaborated
  authors: [{
    name: "Logius",
    url: "https://logius.nl/standaarden",
    mailto: "digikoppeling@logius.nl",
  }
  ],
  // The github option allows you associate your specification with a repository on GitHub.
  github: "https://github.com/Logius-standaarden/Digikoppeling-Architectuur",

  // The URL of your test suite, gets included in the specification's headers.
  // testSuiteURI: "https://portaal.digikoppeling.nl/CV/home.html",

  // With long algorithms in a specification, it can be useful to allow readers to click on variables marked up with <var> (e.g., Let <var>elem</var> be ...).
  // highlightVars: true,

  // Controls if linked "§" section markers are added to a document
  addSectionLinks: true,

  // Lints for accessibility issues using axe-core
  a11y: false,

  // A number indicating the maximum depth of the table of contents. Defaults to 0 which includes all levels.
  // maxTocLevel: 3,

  // Shows links to alternate formats (such as PDF, ePub) in the document header.
  alternateFormats: [
    {
      label: "pdf",
      uri: "Digikoppeling-Architectuur.pdf",
    },
  ],

  // You can use markdown to write ReSpec based documents.
  // format: "markdown",
  // <section data-format="markdown" data-include="<filename>.md"></section>


  // this parameter will add the tag_name of the latest release to the document Title
  // only set this parameter when a release has been set
  nl_addReleaseTagTitle: true,

  // For Consultatieversies (specStatus="GN-CV") there is a default text in the section "Status of this document" that contains an emailaddress for feedback and comments on the document.
  nl_emailComments: "digikoppeling@logius.nl",

  // if you use a single document for your spec, which uses more than one markdown H1 header, e.g. '# inleiding'
  // this configuration can be set to make sure that the alle H1 headers and navigation bars are preserved
  nl_markdownSplitH1sections: true,

  // in some cases the Repository of a Specification document and the Issue- and PR bases are split
  // thi scan be configured below
  // if not set, the url's will be generated on the respecConfig.github automatically  
  nl_github: {
    // issueBase: "https://github.com/Logius-standaarden/Digikoppeling-Architectuur/issues",
    revision: "https://github.com/Logius-standaarden/Digikoppeling-Architectuur/commits",
    // pullrequests: "https://github.com/Logius-standaarden/Digikoppeling-Architectuur/pulls"
  },

  // nl_organisationName is used for some company specific values in the header (and Sotd)
  // currently supported: Logius and Geonovum (default)  
  nl_organisationName: "Logius",

  // prefix for the names of company specific css, svg and ico prefixes
  // defaults to "GN-"  
  nl_organisationPrefix: "LS-",

  // class style can be automatically inserted in generated markdown tables
  // currently defaults to simple, but this may change
  // options 'simple', 'data', the style css in this template uses 'dkkvs'
  nl_markdownTableClass: "dkkvs",

  // class style can be automatically inserted in generated markdown code (e.g. `example`)
  // when set the style css can refer to this class 
  nl_markdownCodeClass: "code",

  // if nl_markdownEmbedImageInFigure is set to true images in markdown generated content will be surrounded with <figures> element
  // so that figures can be linked are be a part of table of figures
  nl_markdownEmbedImageInFigure: true,

  // this url points to the folder where organsation specific css files are stored
  // defaults to https://tools.geostandaarden.nl/respec/style/ if not set
  nl_organisationStylesURL: "https://publicatie.centrumvoorstandaarden.nl/respec/style/",
  // nl_organisationStylesURL: "http://localhost:8081/respec/style/",

  // nl_organisationPublishURL points to organisation specifica publication page, used in header
  // defaults to  https://docs.geostandaarden.nl/"
  nl_organisationPublishURL: "https://publicatie.centrumvoorstandaarden.nl/",

  // nl_logo refers to company logo
  // defaults to https://tools.geostandaarden.nl/respec/style/logos/Geonovum.svg
  nl_logo: {
    src: "https://publicatie.centrumvoorstandaarden.nl/respec/style/logos/figure-logius.svg",
    alt: "Logius",
    id: "Logius",
    height: 77,
    width: 44,
    url: "https://www.logius.nl/standaarden",
  },

  // If you need to include a one-off reference that isn't in the SpecRef database or 
  // if you need to override an existing reference with specific content, then you can use this configuration option.
  localBiblio: {
    NEN3610: {
      href: "https://www.nen.nl/nen-3610-2011-a1-2016-nl-217738",
      title:
        "Basismodel Geo-informatie - Termen, definities, relaties en algemene regels voor de uitwisseling van informatie over aan de aarde gerelateerde ruimtelijke objecten",
      authors: [""],
      date: "Maart 2011",
      publisher: "Nederlands Normalisatie-instituut",
    },
    "Digikoppeling Architectuur": {
      href: "https://centrumvoorstandaarden.github.io/Architectuur2.0-metRestfulAPI/snapshot.html",
      title:
        "Digikoppeling Architectuur",
      authors: ["Logius Centrum voor standaarden"],
      date: "december 2020",
      publisher: "Logius",
    },
    "Digikoppeling-Cert": {
      href: "http://www.logius.nl/digikoppeling",
      title: "Gebruik en achtergrond van Digikoppeling certificaten",
      publisher: "Logius",
    },
    "PKI Policy": {
      href: "https://www.logius.nl/diensten/pkioverheid/aansluiten-als-tsp/pogramma-van-eisen",
      title: "Programma van Eisen (PKIoverheid)",
      publisher: "Logius",
    },
    "PKI CA": {
      href: "https://www.logius.nl/diensten/pkioverheid/aansluiten-als-tsp/toegetreden-vertrouwensdienstverleners",
      title: "Toegetreden vertrouwensdienstverleners",
      publisher: "Logius",
    },
    "PKIoverheid Certificaten": {
      href: "https://cert.pkioverheid.nl/",
      title: "Pkioverheid certificaten",
      publisher: "Logius"
    },
    "Logius website": {
      href: "https://logius.nl/digikoppeling",
      title: "Logius Digikoppeling",
      publisher: "Logius",
    },
    "Digikoppeling Compliance Voorziening": {
      href: "https://portaal.digikoppeling.nl",
      title: "Digikoppeling Compliance Voorziening",
      publisher: "Logius",
    },
    "API Design Rules": {
      href: "https://publicatie.centrumvoorstandaarden.nl/api/adr/",
      title: "API Design Rules (Nederlandse API Strategie IIa)",
      authors: ["Jasper Roes", "Joost Farla"],
      date: "Juli 2020",
      publisher: "Logius",
    },
    "Digikoppeling Koppelvlakstandaard REST API": {
      href: "https://centrumvoorstandaarden.github.io/DigikoppelingRestfulApiProfiel/",
      title: "Digikoppeling Restful API Profiel (Concept)",
      date: "februari 2021",
      publisher: "Logius",
    },
    "Digikoppeling Beheermodel":
    {
      href: "https://www.logius.nl/sites/default/files/public/bestanden/diensten/DigiKoppeling/Standaarden/Digikoppeling-Beheermodel.pdf",
      title: "Beheermodel en releasebeleid Digikoppeling v1.5",
      date: "Oktober 2017",
      publisher: "Logius",
    },
    "Digikoppeling Koppelvlakstandaard Grote Berichten": {
      href: "https://logius-standaarden.github.io/Digikoppeling-Koppelvlakstandaard-GB/",
      title: "Digikoppeling Koppelvlakstandaard Grote Berichten",
      date: "september 2020",
      publisher: "Logius",
    },
    "Digikoppeling Koppelvlakstandaard WUS": {
      href: "https://logius-standaarden.github.io/Digikoppeling-Koppelvlakstandaard-WUS/",
      title: "Digikoppeling Koppelvlakstandaard ebMS2",
      date: "oktober 2020",
      publisher: "Logius",
    },
    "Digikoppeling Koppelvlakstandaard ebMS2": {
      href: "https://logius-standaarden.github.io/Digikoppeling-Koppelvlakstandaard-ebMS2/",
      title: "Digikoppeling Koppelvlakstandaard ebMS2",
      date: "mei 2019",
      publisher: "Logius",
    },
    "Digikoppeling Beveiligingsdocument": {
      href: "https://www.logius.nl/sites/default/files/bestanden/website/Digikoppeling_Beveiligingsstandaarden_en_voorschriften_v1.3.pdf",
      title: "Digikoppeling Beveiligingsstandaarden en voorschriften",
      date: "2020",
      publisher: "Logius",
    },
    "Digikoppeling Best Practices ebMS2": {
      href: "https://www.logius.nl/diensten/digikoppeling/documentatie",
      title: "Digikoppeling Best Practices ebMS2",
      date: "2019",
      publisher: "Logius",
    },
    "Digikoppeling Best Practices WUS": {
      href: "https://www.logius.nl/diensten/digikoppeling/documentatie",
      title: "Digikoppeling Best Practices WUS",
      date: "2019",
      publisher: "Logius",
    },
    "Digikoppeling Best Practices Grote Berichten": {
      href: "https://www.logius.nl/diensten/digikoppeling/documentatie",
      title: "Digikoppeling Best Practices Grote Berichten",
      date: "2019",
      publisher: "Logius",
    },
    "Digikoppeling Identificatie-Authenticatie": {
      href: "https://www.logius.nl/diensten/digikoppeling/documentatie",
      title: "Digikoppeling Identificatie en Authenticatie",
      publisher: "Logius",
    },
    "Digikoppeling Actuele Documentatie": {
      href: "http://www.logius.nl/digikoppeling",
      title: "Digikoppeling Overzicht Actuele Documentatie en Compliance",
      publisher: "Logius",
    },
    "Digikoppeling Gebruik Certificaten": {
      href: "http://www.logius.nl/digikoppeling",
      title: "Digikoppeling Gebruik en achtergrond certificaten",
      publisher: "Logius",
    },
    "Digikoppeling-Cert": {
      href: "http://www.logius.nl/digikoppeling",
      title: "Gebruik en achtergrond van Digikoppeling certificaten",
      publisher: "Logius",
    },
    "PKI Policy": {
      href: "https://www.logius.nl/diensten/pkioverheid/aansluiten-als-tsp/pogramma-van-eisen",
      title: "Programma van Eisen (PKIoverheid)",
      publisher: "Logius",
    },
    "PKI CA": {
      href: "https://www.logius.nl/diensten/pkioverheid/aansluiten-als-tsp/toegetreden-vertrouwensdienstverleners",
      title: "Toegetreden vertrouwensdienstverleners",
      publisher: "Logius",
    },
    "PKIoverheid Certificaten": {
      href: "https://cert.pkioverheid.nl/",
      title: "Pkioverheid certificaten",
      publisher: "Logius"
    },
    "Logius website": {
      href: "https://logius.nl/digikoppeling",
      title: "Logius Digikoppeling",
      publisher: "Logius",
    },
    "Digikoppeling Compliance Voorziening": {
      href: "https://portaal.digikoppeling.nl",
      title: "Digikoppeling Compliance Voorziening",
      publisher: "Logius",
    },
    "Pas-toe-of-leg-uit": {
      href: "https://www.forumstandaardisatie.nl/open-standaarden/verplicht",
      title: "Lijst Verplichte standaarden",
      publisher: "Forum Standaardisatie",
    }


  }
};
