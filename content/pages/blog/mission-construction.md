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
title: Rement ist Teil von The Mission Construction
slug: the-mission-construction
date: '2024-02-10'
excerpt: >-
  Das Accelerator-Programm The Mission Construction von FUTURY bringt aufstrebende Startups mit Konzernen wie Schüco, Vonovia, Goldbeck, Schwarz oder PreZero zusammen. Ziel sind gemeinsame Pilotprojekte.
featuredImage:
  type: ImageBlock
  altText: Bild des Rement Teams
  elementId: ''
  url: /images/futury.webp
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
  metaTitle: Rement ist Teil von The Mission Construction
  metaDescription: >-
    Das Accelerator-Programm The Mission Construction von FUTURY bringt die aufstrebende Startups mit Konzernen wie Schüco, Vonovia, Goldbeck, Schwarz oder PreZero zusammen. Ziel sind gemeinsame Pilotprojekte.
  addTitleSuffix: true
  socialImage: /images/futury.webp
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
![](/images/futury.webp)

Das Accelerator-Programm The Mission Construction von FUTURY bringt die aufstrebende Startups mit Konzernen wie Schüco, Vonovia, Goldbeck, Schwarz oder PreZero zusammen. Ziel des Programms ist die Initiierung gemeinsamer Pilotprojekte.

## Kickoff bei Schüco Bielefeld

Am 7. und 8. Februar fand der Kickoff des The Mission Construction Accelerators in den schönen Räumlichkeiten von Schüco in Bielefeld statt. Zu Beginn machte Dr.-Ing. Thomas Schlenker, SVP of Digitalisation & Smart Building bei SCHÜCO, direkt deutlich, dass der Wandel zur Kreislaufwirtschaft eine der zentralsten gegenwärtigen Aufgaben der Baubranche ist. Die anschließende Podiumsdiskussion von Konstantina Kanellopoulos, CHRO & Co-Managing Director GOLDBECK, Michael Koch, CEO Byldis
und Michael Meyer, Partner Bain & Company und Thomas Schlenker macht deutlich, dass die Branche 2024 den Kriesenmodus verlassen und die Zukunft wieder aktiv gestalten möchte.

![](/images/futury-presentation.webp)

Im Anschluss durfte Rement gemeinsam mit den Startups Sustainaccount, Taskrunner, Grundsteine, Kolula, ContainerGrid, N1 Trading und Kestrix ihren Ansatz vorstellen. Robert und Felix gingen dabei auch darauf ein, welche Schnittstellen die teilnehmenden Corporates im Publikum mit dem Rement Verfahren haben könnten.

## Spannende Kollaborationen in Sicht

In den nächsten 3 Monaten fokussiert sich The Mission auf die Initiierung von Pilotprojekten zwischen den Startups und Construction Corporates. Wir haben bereits auf und nach dem Kickoff viele spannende Gespräche führen dürften und freuen uns auf alles was kommt. 

Wir sind davon überzeugt, dass Kollaborationen zwischen Startups und Corporates, zwischen Forschung und Anwendung und zwischen Stakeholdern der gesamten Wertschöpfungskette notwendig sind, um mehr Kreislaufwirtschaft im Bau zu ermöglichen.

![](/images/futury-team.webp)

