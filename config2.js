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
    specStatus: "GN-DEF",
    specType: "ST",
    pubDomain: "api",
    publishDate: "2020-07-09",
    
    nl_markdownSplitH1sections: false,
    nl_organisationName: "Logius",
    nl_organisationPrefix: "LS-",
    nl_markdownTableClass: "logius",
    nl_markdownEmbedImageInFigure: false,
    nl_github: {
      issueBase: "https://github.com/Logius-standaarden/API-Design-Rules/issues",
      revision: "https://github.com/Logius-standaarden/API-Design-Rules/commits",
      pullrequests: "https://github.com/Logius-standaarden/API-Design-Rules/pulls"
    },
    nl_organisationPublishURL: "https://publicatie.centrumvoorstandaarden.nl",
    nl_organisationStylesURL: "https://publicatie.centrumvoorstandaarden.nl/respec/style/",
    nl_logo: {
      src: "https://publicatie.centrumvoorstandaarden.nl/respec/style/logos/figure-logius.svg",
      alt: "Logius",
      id: "Logius",
      height: 77,
      width: 44,
      url: "https://www.logius.nl/standaarden",
    },

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
    shortName: "adr",
    github: "https://github.com/Logius-standaarden/API-Design-Rules",
    issueBase: "https://github.com/Geonovum/KP-APIs/issues",
    pullsBase: "https://github.com/Geonovum/KP-APIs/pulls",
    localBiblio: {
        "SemVer": {
            href: "https://semver.org",
            title: "Semantic Versioning 2.0.0",
            authors: ["T. Preston-Werner"],
            date: "June 2013"
        }
    },
};