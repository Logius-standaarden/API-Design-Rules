var respecConfig = {
  //voor specStatus mogelijkheden zie https://github.com/centrumvoorstandaarden/respec/wiki/specStatus
  specStatus: "WV",
  //voor specType mogelijkheden zie https://github.com/centrumvoorstandaarden/respec/wiki/specType
  specType: "ST",
  shortName: "architectuur",
 
  // Voor publishDate zie https://github.com/w3c/respec/wiki/publishDate
  // Als er geen publishDate is opgegeven, genereert ReSpec de datum o.b.v. de laatste wijzigingen
  // Belangrijk: als publishDate niet opgegeven is, wordt bij de link "Laatst gepubliceerde versie" "geen" gezet. Anders wordt een link opgebouwd voor de laatste versie, met het formaat:
  // https://docs.centrumvoorstandaarden.nl/{pubDomain}/{shortName}
  publishDate: "2021-02-15",
  addSectionLinks: true,
  otherLinks: [
    {
      key: "Huidige versie",
      data: [
        {
          value: "Digikoppeling Architectuur 1.5.1 (Logius.nl)",
          href: "https://www.logius.nl/sites/default/files/public/bestanden/diensten/DigiKoppeling/Standaarden/Digikoppeling-Architectuur.pdf",
        },
      ],
    },
  ],

  // Als er een eerder gepubliceerde versie is, geef dan de datum daarvan op
  //previousPublishDate: "2017-05-31",
  // Zie https://github.com/w3c/respec/wiki/previousMaturity. Dit moet een
  // Als previousMaturity niet opgegeven wprdt, maar previousPublishDate wel, dan wordt dezelfde status gebruikt als bij specStatus
  //previousMaturity: "DK-ST",
  // licentie. Kiezen uit:
  license: 'cc-by-nd',
  // logos: [], // Geef een lege array op als er geen Geonovum logo moet staan
  doJsonLd: true,
  editors: [
    {
      name: "Pieter Hering",
      company: "Logius",
      companyURL: "http://www.logius.nl/",
    },
    {
      name: "Peter Haasnoot",
      company: "Logius",
      companyURL: "http://www.logius.nl/",
    },
  ],
  // shortName = korte naam voor in de url van het document, gebruik alleen letters, cijfers en eventueel '-'
  //shortName: "DK_ARCH",
  // url van de github repository waar je in werkt
  github: "https://github.com/centrumvoorstandaarden/Architectuur2.0-metRestfulAPI",
  // url van de issue lijst in de github repository waar je in werkt
  issueBase: "https://github.com/centrumvoorstandaarden/Architectuur2.0-metRestfulAPI/issues/",
  // in localBiblio kun je bibliografische items opnemen. In de tekst kun je dan tussen blokhaken verwijzen naar de korte naam bv [NEN3610].

// The specification's publish domain, which is used to publish the specification
  // the url in the header thisVersion is generated like `<conf.nl_organisationPublishURL>/<conf.pubDomain>/<specStatus>-<specType.toLowerCase()>-<conf.shortName>}-conf.publishDate>/`
  pubDomain: "dk",
  pubSubDomain: "architectuur",

  // For Consultatieversies (specStatus="GN-CV") there is a default text in the section "Status of this document" that contains an emailaddress for feedback and comments on the document.
  nl_emailComments: "digikoppeling@logius.nl",

  // this parameter will add the tag_name of the latest release to the document Title
  // only set this parameter when a release has been set
  nl_addReleaseTagTitle: true,

  // if you use a single document for your spec, which uses more than one markdown H1 header, e.g. '# inleiding'
  // this configuration can be set to make sure that the alle H1 headers and navigation bars are preserved
  nl_markdownSplitH1sections: false,

  // in some cases the Repository of a Specification document and the Issue- and PR bases are split
  // thi scan be configured below
  // if not set, the url's will be generated on the respecConfig.github automatically  
  nl_github: {
    //    issueBase: "https://github.com/Logius-standaarden/Digikoppeling-Wat-is-Digikoppeling/issues",
    revision: "https://github.com/centrumvoorstandaarden/Architectuur2.0-metRestfulAPI",
    //  pullrequests: "https://github.com/Logius-standaarden/Digikoppeling-Wat-is-Digikoppeling/pulls"
  },

  // nl_organisationName is used for some company specific values in the header (and Sotd)
  // currently supported: Logius and Geonovum (default)  
  nl_organisationName: "Logius",

  // prefix for the names of company specific css, svg and ico prefixes
  // defaults to "GN-"  
  nl_organisationPrefix: "LS-",

  // class style can be automatically insertd in generated markdown tables
  // currently defaults to simple, but this may change
  // options simple, data, <your css>    
  nl_markdownTableClass: "dkkvs",

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

  localBiblio: {
    NEN3610: {
      href: "http://www.nen.nl/web/Normshop/Norm/NEN-36102011-nl.htm",
      title:
        "Basismodel Geo-informatie - Termen, definities, relaties en algemene regels voor de uitwisseling van informatie over aan de aarde gerelateerde ruimtelijke objecten",
      authors: [""],
      date: "Maart 2011",
      publisher: "Nederlands Normalisatie-instituut",
    },
    "API Design Rules": {
      href: "https://publicatie.centrumvoorstandaarden.nl/api/adr/",
      title: "API Design Rules (Nederlandse API Strategie IIa)",
      authors: ["Jasper Roes", "Joost Farla"],
      date: "Juli 2020",
      publisher: "Logius",
    },
    "Digikoppeling REST API":{
        href: "https://centrumvoorstandaarden.github.io/DigikoppelingRestfulApiProfiel/",
        title: "Digikoppeling Restful API Profiel (Concept)",
        date: "februari 2021",
        publisher: "Logius",
    },
    Beheermodel:
    {
      href: "https://www.logius.nl/sites/default/files/public/bestanden/diensten/DigiKoppeling/Standaarden/Digikoppeling-Beheermodel.pdf",
      title: "Beheermodel en releasebeleid Digikoppeling v1.5",
      date: "Oktober 2017",
      publisher: "Logius",
    },
    "Digikoppeling Koppelvlakstandaard GB": {
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
    "Digikoppeling Identificatie-Authenticatie":{
      href: "http://www.logius.nl/digikoppeling",
      title: "Digikoppeling Identificatie en Authenticatie",
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
    }
  },

  // format: "markdown",
};
