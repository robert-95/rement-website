---
'0':
  type: string
  name: type
  label: Type
  const: PostLayout
  hidden: true
'1':
  type: string
  name: title
  label: Title
  required: true
  default: This is a blog post title
  hidden: false
  localized: false
'2':
  type: slug
  name: slug
  label: Slug
  description: >-
    The URL path of this page relative to site root. For example, the site root
    page would be "/", and post page would be "posts/new-post/"
  required: true
  hidden: false
  localized: false
'3':
  type: date
  name: date
  label: Date
  required: true
  hidden: false
  localized: false
'4':
  type: reference
  name: author
  label: Author
  required: false
  hidden: false
  localized: false
  models:
    - Person
'5':
  type: string
  name: excerpt
  label: Excerpt
  required: false
  default: >-
    Nunc rutrum felis dui, ut consequat sapien scelerisque vel. Integer
    condimentum dignissim justo vel faucibus.
  hidden: false
  localized: false
  group: thumbnail
'6':
  type: model
  name: featuredImage
  label: Featured image
  required: false
  hidden: false
  localized: false
  models:
    - ImageBlock
  group: thumbnail
'7':
  type: markdown
  name: content
  label: Content
  description: Page content
  required: false
  hidden: false
  localized: false
'8':
  type: list
  name: bottomSections
  label: Sections
  required: false
  hidden: false
  localized: false
  items:
    type: model
    models:
      - CarouselSection
      - DividerSection
      - FeaturedItemsSection
      - FeaturedPeopleSection
      - FeaturedPostsSection
      - GenericSection
      - ImageGallerySection
      - PricingSection
      - RecentPostsSection
'9':
  type: boolean
  name: isFeatured
  label: Exclude from blog feed
  description: >-
    Enable this option to avoid a featured post (in a 'Featured posts' section)
    to appear duplicated in the blog page.
  required: false
  default: false
  hidden: false
  localized: false
  group: settings
'10':
  type: boolean
  name: isDraft
  label: Draft
  required: false
  default: false
  hidden: false
  localized: false
  group: settings
'11':
  type: model
  name: seo
  label: SEO
  required: false
  hidden: false
  localized: false
  models:
    - Seo
  group: seo
'12':
  type: enum
  name: colors
  label: Colors
  required: false
  default: bg-light-fg-dark
  hidden: false
  localized: false
  options:
    - label: 'Light background, dark foreground'
      value: bg-light-fg-dark
      textColor: $dark
      backgroundColor: $light
      borderColor: '#ececec'
    - label: 'Neutral background, dark foreground'
      value: bg-neutral-fg-dark
      textColor: $dark
      backgroundColor: $neutral
      borderColor: '#ececec'
    - label: 'Neutral alt background, dark foreground'
      value: bg-neutralAlt-fg-dark
      textColor: $dark
      backgroundColor: $neutralAlt
      borderColor: '#ececec'
    - label: 'Dark background, light foreground'
      value: bg-dark-fg-light
      textColor: $light
      backgroundColor: $dark
      borderColor: '#ececec'
  group: cardStyles
  controlType: palette
'13':
  type: style
  name: styles
  label: Styles
  description: The styles field is controlled by Stackbit editor
  required: false
  hidden: false
  localized: false
  styles:
    self:
      margin:
        - 'tw0:96'
      padding:
        - 'tw0:96'
      flexDirection: '*'
      borderWidth:
        - '0'
        - '1'
        - '2'
        - '4'
        - '8'
      borderStyle: '*'
      borderColor:
        - value: border-dark
          label: Dark
          color: $dark
        - value: border-light
          label: Light
          color: $light
        - value: border-neutral
          label: Neutral
          color: $neutral
        - value: border-neutralAlt
          label: Neutral alt
          color: $neutralAlt
        - value: border-primary
          label: Primary
          color: $primary
      borderRadius: '*'
      textAlign: '*'
'14':
  type: markdown
  name: markdown_content
  label: Content
  description: Page content
type: PostLayout
title: Helmholtz unterstützt Rement mit der Field Study Fellowship
slug: helmholtz-fsf
date: '2024-02-19'
excerpt: >-
  Das Ausgründungsprogramm Helmholtz Enterprise (HE) fördert den Transfer forschungsintensiver Innovationen in die Praxis. Ziel der Field Study ist eine Marktvalidierung unseres Verfahrens.
featuredImage:
  type: ImageBlock
  altText: Logos von Helmholtz und Rement
  elementId: ''
  url: /images/HelmholtzEnterpriseFSF.webp
  styles:
    self:
      borderRadius: none
      borderWidth: 0
bottomSections:
  - type: RecentPostsSection
    subtitle: null
    recentCount: 3
    showThumbnail: true
    showExcerpt: false
    showDate: true
    showAuthor: true
    actions: []
    badge: null
    elementId: ''
    variant: three-col-grid
    colors: bg-light-fg-dark
    backgroundImage: null
    styles:
      self:
        justifyContent: center
isFeatured: false
isDraft: false
seo:
  metaTitle: Helmholtz unterstützt Rement mit der Field Study Fellowship
  metaDescription: >-
    Das Ausgründungsprogramm Helmholtz Enterprise (HE) fördert den Transfer forschungsintensiver Innovationen in die Praxis. Ziel der Field Study ist eine Marktvalidierung unseres Verfahrens.
  addTitleSuffix: true
  socialImage: /images/HelmholtzEnterpriseFSF.webp
  metaTags: []
  type: Seo
colors: bg-light-fg-dark
styles:
  self:
    padding:
      - pt-0
      - pl-0
      - pb-0
      - pr-0
    borderColor: border-neutralAlt
    borderStyle: none
    borderWidth: 1
    borderRadius: small
author: content/data/person-hghxpf3a8.json
---
![](/images/HelmholtzEnterpriseFSF.webp)

## Über Helmholtz Enterprise und die Field Study Fellowship

Das Helmholtz Enterprise Programm ist eine Initiative des Helmholtz-Verbandes, die darauf abzielt, vielversprechende Forschungsergebnisse aus den Helmholtz-Zentren in marktfähige Produkte und Dienstleistungen zu überführen. 
Es bietet Startups finanzielle Unterstützung sowie Zugang zu Expertise und Infrastruktur, um Innovationen zu beschleunigen und den Technologietransfer voranzutreiben. 
Die Field Study Fellowship ist ein Teil dieses Programms und bietet Gründern die Möglichkeit, ihre Forschungsergebnisse in realen Marktbedingungen zu validieren. 
Dabei werden sie von einem erfahrenen Coach begleitet und erhalten Unterstützung bei der Durchführung von Feldstudien, um ihre Produkte und Dienstleistungen optimal zu positionieren.

## Ziele der nächsten Wochen

Gemeinsam mit unserem Coach Dr. Susanne Perner, an den wir uns hier herzlich bedanken möchten, machen wir im ersten Schritt alles sichtbar, was wir bereits
über unseren Markt wissen. Es entstehen Arbeitshypothesen, die während der Field Study durch Expert'innen-Interviews weiter validiert werden. Im Ergebnis entsteht
ein fundierter Blick auf die "Jobs to get done" im Betonrecycling und wie Rement bei der Erledigung dieser Nutzen stiftet.

Sie sehen sich als potentieller Anwender unseres Verfahrens und hätten Lust, mit uns über Betonrecycling zu sprechen? Melden Sie sich gerne bei uns unter robert.schleinhege@rement.tech.

Wir können jedem Forschenden das Programm bisher herzlich empfehlen. Vielen Dank an Julian Alexandrakis und Andre Schafft von Helmholtz für die freundliche und strukturierte Organisation!
 

