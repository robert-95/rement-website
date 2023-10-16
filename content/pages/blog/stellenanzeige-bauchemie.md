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
title: Greentech Startup sucht (Bau)Chemiker*in
slug: stellenanzeige-bauchemie
date: '2023-09-08'
excerpt: >-
  Wir freuen uns verkünden zu können, dass Rement auf dem Weg zu nachhaltigeren
  Wertschöpfungsketten im Bereich Bau und Mineralik in Zukunft eng mit dem KIT
  Innovation HUB - Prävention im Bauwesen zusammenarbeitet. 
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
  metaTitle: Kooperation mit dem KIT Innovation HUB
  metaDescription: >-
    Wir freuen uns verkünden zu können, dass Rement auf dem Weg zu
    nachhaltigeren Wertschöpfungsketten im Bereich Bau und Mineralik in Zukunft
    eng mit dem KIT Innovation HUB - Prävention im Bauwesen zusammenarbeitet. 
  addTitleSuffix: true
  socialImage: /images/rement-kit-kollaboration-146b33ce.webp
  metaTags: []
  type: Seo
colors: bg-light-fg-dark
styles:
  self:
    padding:
      - pt-5
      - pl-5
      - pb-5
      - pr-5
    borderColor: border-neutralAlt
    borderStyle: none
    borderWidth: 1
    borderRadius: small
author: content/data/person-hghxpf3a8.json
featuredImage:
  type: ImageBlock
  altText: Lightning bolt symbol on red background
  elementId: ''
  url: /images/post-two.svg
  styles:
    self:
      borderRadius: x-large
---
![](/images/rement-sucht-bau-chemiker-in.webp)
Wir freuen uns verkünden zu können, dass Rement auf dem Weg zu nachhaltigeren Wertschöpfungsketten im Bereich Bau und Mineralik in Zukunft eng mit dem [**KIT Innovation HUB - Prävention im Bauwesen**](https://www.hub-bau.kit.edu/) zusammenarbeitet. Der am **Institut für Funktionale Grenzflächen (IFG) des Karlsruher Instituts für Technologie (KIT)** beheimatete Innovation Hub hat es sich zum Ziel gemacht, im Dialog mit Industrie, Wissenschaft, Verwaltung und Forschung, innovative Technologien für ein nachhaltigeres Bauwesen zu entwickeln. 

Im Rahmen der Kooperation unterstützen uns HUB und IFG mit **Forschungsinfrastruktur** und **Arbeitsplätzen**. Des Weiteren bietet der KIT Innovation HUB Zugang zu Mentoren für den Bereich Unternehmertum und bietet über das im Rahmen des BMBF-Projekts „TRANSFORM“ entwickelte Format „Young Innovators HUB“ Workshops zu Entrepreneurship-Kompetenzen.

Prof. Dr. Gerdes, Leiter des KIT Innovation HUBs, wird Rement als Mentor zur Seite stehen. Herr Gerdes verfügt über langjährige Erfahrungen im Bereich Baustoffe, Werkstoffchemie und Ausgründungen aus dem universtitären Forschungsumfeld. Wir danken Professor Gerdes und seinem Team herzlich für die uns schon entgegengebrachte und zukünftige Unterstützung.
