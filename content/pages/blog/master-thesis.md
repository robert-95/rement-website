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
title: Masterarbeit Bauingenieurwesen - Fokus Materialeigenschaften oder Stoffströme und Standortfaktoren
slug: masterarbeit-bauingenieurwesen
date: '2024-02-20'
excerpt: >-
  Wir suchen nach einem motivierten Teammitglied für eine Masterarbeit im Bereich Bauingenieurwesen ab März oder April mit anschließender Übernahmemöglichkeit.
featuredImage:
  type: ImageBlock
  altText: Dekoratives Bild
  elementId: ''
  url: /images/masterthesis.png
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
  metaTitle: Masterarbeit Bauingenieurwesen - Fokus Materialeigenschaften oder Stoffströme und Standortfaktoren
  metaDescription: >-
    Wir suchen nach einem motivierten Teammitglied für eine Masterarbeit im Bereich Bauingenieurwesen ab März oder April mit anschließender Übernahmemöglichkeit.
  addTitleSuffix: true
  socialImage: /images/masterthesis.png
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
![](/images/masterthesis.png)

Wir suchen nach einem motivierten Teammitglied für eine Masterarbeit im Bereich Bauingenieurwesen ab März oder April mit anschließender Übernahmemöglichkeit. Wir sind Rement und entwickeln ein innovatives, klimapositives Betonrecyclingverfahren und würden gerne mit dir und deiner Arbeit herausfinden, wie wir uns am besten in den Markt integrieren.
 
Wie genau dein Thema definiert ist möchten wir gerne mit dir gemeinsam überlegen. Du kannst uns hierzu auch gerne einen Vorschlag machen. Unten findest du beispielhaft zwei Themenfelder beschrieben.
 
*Themenschwerpunkt: Produkt- und Edukteigenschaften*

- Wenn du dich für die Arbeit im Labor begeisterst kannst du hier praktisch Tätig werden
- Analysiere, welche Betoneingenschaften wie Verunreinigungen, Carbonatisierungsgrad und Feinheit unseren Prozess beeinflussen
- Analysiere, ob sich der zurückgewonnene Sand wieder bedenkenlos für neuen Beton einsetzen lässt
 
*Themenschwerpunkt: Stroffströme und Standortfaktoren*

- Analysiere, wo Betonabbruch in welchen Mengen anfällt und was damit passiert
- Skizziere weitere Standortfaktoren für Rement-Anlagen
- Leite Empfehlungen aus belastbaren Datenquellen her
- Beschreibe die Stoffströme im Zielbild und evaluiere Wertschöpfungsgrade und Emissionsersparnis

Werde gerne kreativ! Wir sind offen um Themenvorschläge rund um unsere Recyclingverfahren.

Bei Interesse würden wir uns gerne mit dir gemeinsam auf Ausgründungs-Förderungen bewerben. Das bedeutet: Während du deine Masterarbeit schreibst, wird unser Fördergeldantrag bearbeitet. Bei einer Zusage könntest du direkt nach deiner Arbeit bei uns Einsteigen und würdest über eine Wis.-Mit.-Stelle an der Uni finanziert werden.
 
Wir freuen uns auf eine kurze Rückmeldung an robert.schleinhege@rement.tech und wir vereinbaren zeitnah einen Kennenlerntermin!

Dein Team Rement
