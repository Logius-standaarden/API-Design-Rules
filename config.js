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
  postProcess: [repair],
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
  shortName: "adr",
  github: "https://github.com/Logius-standaarden/API-Design-Rules",
  issueBase: "https://github.com/Geonovum/KP-APIs/issues",
  pullsBase: "https://github.com/Geonovum/KP-APIs/pulls" ,
  localBiblio: {
    "SemVer": {
      href: "https://semver.org",
      title: "Semantic Versioning 2.0.0",
      authors: ["T. Preston-Werner"],
      date: "June 2013"
    }
  },
};

//-- Postprocessors -------------------------------------------------------------------

//-- haalt gh-pages weg aan het eind van een URL
//-- wijzigt de referentie van een aantal links
//-- [github]/issues/ -> [issueBase]
//-- [github]/pulls/ -> [pullsBase]
//-- Stopt zodra alle referenties zijn aangepast 
//-- PH: 20120-12-01 
//-- gebaseerd op voorbeeld JvG 2019-11-12
function repair(config, document)  
{
  var tags = document.getElementsByTagName("a");
  var srchIssue = 'issues';
  var srchPulls = 'pulls';
  var srchGH_pages = 'gh-pages';
  var bIssue = false, bPulls = false, bGH_pages = false ;
  var i;

  for (i = 0; i < tags.length; i++) 
  {
    if(!bIssue && tags[i].href.indexOf(srchIssue) > -1)
    {
      // console.log(tags[i].href + " is gevonden");
      tags[i].href = config.issueBase;
      // console.log(tags[i].href + " is aangepast");
      bIssue = true;
    }
    if(!bPulls && tags[i].href.indexOf(srchPulls) > -1)
    {
      // console.log(tags[i].href + " is gevonden");
      tags[i].href = config.pullsBase;
      // console.log(tags[i].href + " is aangepast");
      bPulls = true;
    }
    if(!bGH_pages && tags[i].href.indexOf(srchGH_pages) > -1)
    {
      // console.log(tags[i].href + " is gevonden");
      tags[i].href = tags[i].href.substring(0, tags[i].href.length - srchGH_pages.length);
      // console.log(tags[i].href + " is aangepast");
      bGH_pages= true;
    }
    if (bIssue && bPulls && bGH_pages){
      break;
    }

  } 
}