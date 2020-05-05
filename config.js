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
//-------------------------------------------------------------------------------------

var respecConfig =
{
  specStatus: "GN-WV",
  specType: "ST",
  pubDomain: "api",
  publishDate: "2020-01-17",
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
  shortName: "API-Designrules",
  github: "https://github.com/geonovum/API-Designrules",
  issueBase: "https://github.com/geonovum/API-Designrules/issues/",
  localBiblio: {
    "SemVer": {
      href: "https://semver.org",
      title: "Semantic Versioning 2.0.0",
      authors: ["T. Preston-Werner"],
      date: "June 2013"
    }
  },
};
