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
title: Handelsblatt - 11 Trends & 7 Start-ups im Bausektor
slug: handelsblatt-trendreport
date: '2024-05-13'
excerpt: >-
  Digitalisierung, Recycling, Decarbonisierung & co.: Das Handelsblatt stellt die Zukunfts-Herausforderungen der Bauwirtschaft vor - und 7 Start-ups, die zu diesen beitragen.
featuredImage:
  type: ImageBlock
  altText: Trendreport
  elementId: ''
  url: /images/handelsblatt.webp
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
  metaTitle: Handelsblatt - 11 Trends & 7 Start-ups im Bausektor
  metaDescription: >-
    Digitalisierung, Recycling, Decarbonisierung & co.: Das Handelsblatt stellt die Zukunfts-Herausforderungen der Bauwirtschaft vor - und 7 Start-ups, die zu diesen beitragen.
featuredImage:
  addTitleSuffix: true
  socialImage: /images/handelsblatt.webp
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
![](/images/handelsblatt.webp)

## So stellt der Bausektor die Weichen Richtung Zukunft

Der Bausektor stellt sich den Herausforderungen von Klimawandel und Ressourcenknappheit mit innovativen Lösungen wie dem Einsatz von Recyclingverfahren, künstlicher Intelligenz zur Ressourcenoptimierung und nachhaltigen Baustoffen wie Holz. Das serielles und modulares Bauen verbessert zudem die Effizienz im Bauprozess. Die Erweiterung von Klimaversicherungen und digitale Lösungen zur Risikominimierung unterstützen die Branche dabei, sich zukunftsfähig aufzustellen.

## Die 7 Start-ups der Mission Construction beschleunigen den Wandel

Die sieben Start-ups der "Mission Construction 2024" – N1 Circular, Sustainaccount, Rement, Taskrunner, kolula, Kestrix und Grundsteine – treiben durch innovative Ansätze den Wandel in der Bauindustrie voran. Ihre Technologien reichen von fortschrittlichem Recycling, über nachhaltige Baustoffverwendung bis hin zu digitalen Plattformen für das Baumanagement, was allesamt dazu beiträgt, die Bauindustrie effizienter und umweltfreundlicher zu gestalten.

## Zum Report

![](/images/trendreport.webp)

Den vollständigen Report des Handelsblatt können Sie [hier herunterladen](https://www.handelsblatt.com/downloads/29795798/4/trendreport-mission-construction-2024.pdf).
 
