//-------------------------------------------------------------------------------------
//-- File. . . :  config.js
//-- Bevat . . :  Template voor de  configuratie voor respec
//--              Gebaseerd op https://github.com/Geonovum/respec/wiki
//--              Deze file moet worden neergezet in de root-directory van de
//--              betreffende standaard.
//-- Door. . . :  Frank Terpstra/Jan van Gelder
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-- Log . . . :  20180615 - FT  - Initiele versie
//-- . . . . . :  20181106 - JvG - verplaatst naar root KP-APIs
//-- . . . . . :  20220125 - MvdP - Nieuwe versie / opzet in lijn met de modulaire opbouw
//-------------------------------------------------------------------------------------

var respecConfig =
{
  specStatus: "WV",
  specType: "ST",
  pubDomain: "api",
  shortName: "adr",
  publishDate: "2022-01-25",
  publishVersion: "1.1",
  // previousPublishVersion: "(none)",

  // postProcess: [repair],
  //  previousPublishDate: "2019-07-15",
  //  previousMaturity: "GN-VV",
  editors:
    [
      {
        name: "Frank Terpstra",
        company: "Geonovum",
        companyURL: "https://www.geonovum.nl",
      },
      {
        name: "Jan van Gelder",
        company: "Geonovum",
        companyURL: "https://www.geonovum.nl",
      },
      {
        name: "Alexander Green",
        company: "Logius",
        companyURL: "https://www.logius.nl",
      },
      {
        name: "Martin van der Plas",
        company: "Logius",
        companyURL: "https://www.logius.nl",
      }
    ],
  authors:
    [
      {
        name: "Jasper Roes",
        company: "Het Kadaster",
        companyURL: "https://www.kadaster.nl",
      },
      {
        name: "Joost Farla",
        company: "Het Kadaster",
        companyURL: "https://www.kadaster.nl",
      }
    ],
  github: "https://github.com/Logius-standaarden/API-Design-Rules",
  nl_github: {
    issueBase: "https://github.com/Geonovum/KP-APIs/issues",
    revision: "https://github.com/Logius-standaarden/API-Design-Rules/commits",
    pullsBase: "https://github.com/Geonovum/KP-APIs/pulls",
  },
 // Controls if linked "§" section markers are added to a document
 addSectionLinks: true,
 
    // this parameter will add the tag_name of the latest release to the document Title
  // only set this parameter when a release has been set
  nl_addReleaseTagTitle: true,

    // nl_organisationName is used for some company specific values in the header (and Sotd)
  // currently supported: Logius and Geonovum (default)  
  nl_organisationName: "Logius",

  // prefix for the names of company specific css, svg and ico prefixes
  // defaults to "GN-"  
  nl_organisationPrefix: "LS-",

  // class style can be automatically insertd in generated markdown tables
  // currently defaults to simple, but this may change    
  //  nl_markdownTableClass: "ebms",

  // if nl_markdownEmbedImageInFigure is set to true images in markdown generated content will be surrounded with <figures> element
  // so that figures can be linked are be a part of table of figures
  nl_markdownEmbedImageInFigure: true,

  // this url points to the folder where organsation specific css files are stored
  // defaults to https://tools.geostandaarden.nl/respec/style/ if not set
  nl_organisationStylesURL: "https://publicatie.centrumvoorstandaarden.nl/respec/style/",

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
  alternateFormats: [
    {
      label: "pdf",
      uri: "API-Design-Rules.pdf",
    },
    ],

  localBiblio: {
    "SemVer": {
      href: "https://semver.org",
      title: "Semantic Versioning 2.0.0",
      authors: ["T. Preston-Werner"],
      date: "June 2013"
    }
  },
};
