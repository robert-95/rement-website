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
title: Rement gewinnt NEULAND Gründerpitch
slug: neuland-gruenderpitch
date: '2024-06-14'
excerpt: >-
  Wir freuen uns sehr über den 1. Platz und den Publikumspreis auf dem Gründerpitch des KIT NEULAND Innovationstags.
featuredImage:
  type: ImageBlock
  altText: Trendreport
  elementId: ''
  url: /images/neuland.webp
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
  metaTitle: Rement gewinnt NEULAND Gründerpitch
  metaDescription: >-
    Wir freuen uns sehr über den 1. Platz und den Publikumspreis auf dem Gründerpitch des KIT NEULAND Innovationstags.
  addTitleSuffix: true
  socialImage: /images/neuland.webp
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
# Rement gewinnt NEULAND Gründerpitch

## Rement auf der Ausstellung des NEULAND Innovationstags

![](/images/neuland-gruppe.webp)

Als Ausgründungsprojekt war Rement dieses Jahr mit einem Stand auf dem [NEULAND Innovationstag](https://kit-neuland.de/de/innovationstag/neuland-der-innovationstag/#ueberblick) des Karlsruher Instituts für Technologie (KIT) vertreten.
Im Audimax-Foyer präsentieren Startups und Forschungsgruppen ihre Innovationen in den Bereichen Nachhaltigkeit, Digitalisierung und Gesundheit. Wir bedanken uns für viele spannende Gespräche und das Interesse an unserer Lösung.

## Fachvortrag und Panel-Diskussion

![](/images/neuland-vortrag.webp)

Felix Baur und Robert Schleinhege durften gemeinsam in Ihrem Vortrag darauf eingehen, wie bei der Zement-Erzeugung Emissionen freigesetzt werden und welche Ansätze existieren,
diese wieder in Beton einzuspeichern. In der anschließenden Podiumsdiskussion vertieften wir Themen wie die Marktakzeptanz von Rezyklaten und die Energieeffizienz von Recyclingverfahren.

## Ein spontaner Gründerpitch als krönender Abschluss

![](/images/neuland.webp)

Krönender Abschluss des Innovationstags ist traditionell der Gründerpitch. Da ein Startup nicht teilnehmen konnte, durfte Rement spontan einspringen.
Ohne Probedurchlauf ging es auf die Bühne - mit Erfolg: Sowohl Jury als auch Publikum wählten Rement zum besten Pitch.

Wir bedanken uns herzlich bei der Jury für das wertvolle Feedback und der KIT Gründerschmiede für die Organisation des rundum gelungenen Events.
[Hier](https://kit-neuland.de/de/innovationstag/neuland-der-innovationstag/#nachbericht) geht es zum Nachbericht des KITs.
