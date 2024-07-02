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
title: Hannover Messe 2024 - unser erster Messeauftritt
slug: hannover-messe
date: '2024-04-30'
excerpt: >-
  Gemeinsam mit der KIT Gründerschmiede durften wir unser Recycling-Verfahren auf der Hannover Messe präsentieren.
featuredImage:
  type: ImageBlock
  altText: Rement auf der Hannovermesse
  elementId: ''
  url: /images/hannovermesse.webp
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
  metaTitle: Hannover Messe 2024 - unser erster Messeauftritt
  metaDescription: >-
    Gemeinsam mit der KIT Gründerschmiede durften wir unser Recycling-Verfahren auf der Hannover Messe präsentieren.
  addTitleSuffix: true
  socialImage: /images/hannovermesse.webp
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
![](/images/hannovermesse.webp)

## Spannende Gespräche auf der Hannover Messe

Am Freitag durften wir mit Rement unser Betonrecycling-Verfahren auf der Hannover Messe der Öffentlichkeit vorstellen. In Halle 2 waren neben uns vorallem Startups und Transferprojekte aus verschiedensten Forschungs- und Entwicklungsdisziplinen vertreten.
Ähnlich bunt war auch der Mix an Besuchern und Besucherinnen. Wir durften sowohl spannende Fachgespräche mit anderen Vertretern der Beton- und Zementwertschöpfungskette führen als auch mit Interessenten außerhalb der Branche über die Herausforderungen und Lösungsansätze 
im Betonrecycling ins Gespräch kommen. Zusätzlich nutzten wir die Gelegenheit, um uns einen Überblick über mögliche Kooperationspartner im Bereich Anlagenbau und nachhaltige Materialien zu verschaffen.


## Vielen Dank an die KIT Gründerschmiede

Unser besonderer Dank gilt der KIT Gründerschmiede und vor allem Rolf Blattner für die Möglichkeit, am Stand der Gründerschmiede ausstellen zu dürfen. Ein eigener Messestand passt oft nicht in ein Startup-Budget - aber vor allem für junge Projekte ist es
aus unserer Sicht wichtig den Dialog mit der Außenwelt zu suchen.

![](/images/hannovermesse-gs.webp)

Sie wären gerne mit uns ins Gespräch gekommen, haben uns aber verpasst? Kein Problem. Rement ist am 12.6. mit einem Vortrag und einem Stand auf dem [Neuland Innovationstag am KIT](https://innovationstag.kit-neuland.de/de/) präsent.
 
