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
title: Greentech Startup sucht Verfahrenstechniker*in / Chemieingenieur*in
slug: stellenanzeige-bauchemie
date: '2023-10-16'
excerpt: >-
  Wir bei Rement möchten gemeinsam die Baubranche nachhaltig verändern. Für
  diese Mission suchen wir zum nächstmöglichen Zeitpunkt eine/n Verfahrenstechniker*in oder Chemieingenieur*in
  als Verstärkung für unser Team in Karlsruhe.
featuredImage:
  type: ImageBlock
  altText: Bild des Rement Teams
  elementId: ''
  url: /images/rement-sucht-bau-chemiker-in.webp
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
  metaTitle: Greentech Startup sucht (Bau)Chemiker*in
  metaDescription: >-
    Wir bei Rement möchten gemeinsam die Baubranche nachhaltig verändern. Für
    diese Mission suchen wir zum nächstmöglichen Zeitpunkt eine/n
    Verfahrenstechniker*in oder Chemieingenieur*in als Verstärkung für unser Team in Karlsruhe.
  addTitleSuffix: true
  socialImage: /images/rement-sucht-bau-chemiker-in.webp
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
![](/images/rement-sucht-bau-chemiker-in.webp)

Wir bei Rement möchten gemeinsam die Baubranche nachhaltig verändern. Für diese Mission suchen wir zum nächstmöglichen Zeitpunkt eine/n **Verfahrenstechniker*in/Chemieingenieur*in** als Verstärkung für unser Team in Karlsruhe. Mit unserem Betonrecycling-Verfahren möchten wir Zementverbindungen in Betonresten unter Bindung von CO2 lösen, um daraus anschließend wertvolles Calciumcarbonat zu fällen. Deine Welt dreht sich rund um die Konkretisierung dieses Verfahrens in Laborversuchen und Prototypen. 
 

*English version below* 

  
### Deine Aufgaben 

  

*   Erforschung der idealen Extraktions- und Fällungsbedingungen in unserem Labor 

  

*   Analyse der Materialeigenschaften von Produkten und Edukten 

  

*   Unterstützung bei Aufbau und Erweiterung unseres Batch- und Contiprototypen 

  

*   Ausarbeitung von Versuchsroadmaps und Protokollierung 

  

*   Einbringen von Forschungsergebnissen in verfahrenstechnische Diskussionen 


### Das bringst du mit 

  

*   Du unterstützt uns in Vollzeit oder startest in Teilzeit und kannst dir in den nächsten Monaten einen Volleinstieg vorstellen 

  

*   Du befindest dich kurz vor oder nach dem Abschluss deines Masters oder Promotion in Verfahrenstechnik oder Chemieningenieurwesen oder bist schon berufserfahren 

  

*   Du verfügst über praktische Erfahrungen in der Laborforschung, idealerweise auch im Bereich Messanalytik und dem Anlagenbau im Lab-Scale 

  

*   Erfahrungen im wissenschaftlichen Arbeiten oder Vertiefungen im Bereich anorganische Chemie, Kristallisation, Fällung oder Bauchemie sind von Vorteil 

  

*   Du begeisterst dich für Startups und Nachhaltigkeit 


### Das bieten wir dir 


*   Du hast die Möglichkeit, unsere Roadmap und Vision aktiv mitzugestalten 

*  Zugang zu (bau)chemischer Hightech-Analytik 

*   Lerne die Welt der Greentech-Startups mit all ihren Chancen und Herausforderungen kennen 

*   Flexible Arbeitszeiten aus dem Home-Office und unserem Labor oder Co-Working-Space am KIT Campus Nord 

*  Dein Gehalt wird aus Fördermitteln bestritten, die wir gerade beantragen. Hier kannst du dich selbst direkt einbringen 

*   Wenn du neben der Arbeit bei Rement promovieren möchtest unterstützen wir dies 

*   Eine finanzielle Beteiligung an dem Erfolg des Startups 

  
### So tickt Rement 

In unserem Technik-Team arbeitest du zusammen mit unserem CTO Achim, Masterand Adrian und Doktorand Vincent. Unser CEO Felix ist ebenfalls aktiv in unsere Laborforschung und verfahrenstechnische Planung eingebunden. Alle gemeinsam eint die Leidenschaft für Technik und Nachhaltigkeit. Bei Rement leben wir offene Diskussionen, Transparenz und flache Hierarchien. Unsere quartalsweisen [Objectives und Key Results](<https://www.forbes.com/advisor/business/what-is-an-okr-definition-examples/#:~:text=OKRs%20(Objectives%20and%20Key%20Results,progress%20is%20measured%20or%20monitored>.) definieren wir in gemeinsamen Workshops. Einmal pro Woche schauen wir gemeinsam auf unser [Kanban Board ](https://en.wikipedia.org/wiki/Kanban_board)und besprechen To Do's. Wir sind ein unabhängiges und dynamisches Startup und arbeiten gleichzeitig eng mit dem Institut für Funktionelle Grenzflächen (IFG) des KIT zusammen, dessen Laborräumlichkeiten und Messanalytik wir aktuell nutzen. Auf unserem Weg begleiten uns spannende Startupwettbewerbe und Accelerator-Programme, bei denen du dich bei Interesse gerne einbringen kannst. 


##### **Du hast Interesse und möchtest mehr über uns erfahren? Melde dich gerne mit einer kurzen Mail über dich an** [**jobs@rement.tech**](mailto:jobs@rement.tech) 


### English version 

At Rement, we want to work together to change the construction industry for the long term. For this mission, we are looking for a **Process Engineer*/Chemical Engineer** to join our team in Karlsruhe as soon as possible. With our concrete recycling process, we want to dissolve cement compounds in concrete residues while binding CO2 in order to subsequently precipitate valuable calcium carbonate. Your world revolves around the concretization of this process in laboratory tests and prototypes.   

### Your tasks  

* Researching the ideal extraction and precipitation conditions in our laboratory  

* Analysis of the material properties of products and reactants  

* Supporting the set-up and expansion of our batch and contiprototypes  

* Elaboration of experimental roadmaps and record keeping  

* Contributing research results to process engineering discussions  


### What you bring with you  

* You support us full time or start part time and can imagine a full entry in the next months  

* Access to chemical high-tech analytics 

* You are about to or after completing your master's or doctorate in process or chemical engineering or already have professional experience  

* You have practical experience in laboratory research, ideally also in the field of measurement analytics and plant engineering on a lab-scale 

* Experience in scientific work or majors in inorganic chemistry, crystallization, precipitation, or construction chemistry is a plus  

* You are enthusiastic about startups and sustainability  


### This is what we offer you  

* You have the opportunity to actively help shape our roadmap and vision  

* Get to know the world of greentech startups with all its opportunities and challenges  

* Flexible working hours from home office and our lab or co-working space at KIT Campus North.  

* Your salary will come from funding that we are currently applying for 

* If you want to do your PhD while working at Rement, we will support this  

* A financial share in the success of the startup 

### This is what makes Rement tick   

In our technical team, you will work together with our CTO Achim, master student Adrian and PhD student Vincent. Our CEO Felix is also actively involved in our lab research and process engineering planning. Together, everyone is united by a passion for technology and sustainability. At Rement, we live open discussions, transparency and flat hierarchies. We define our quarterly [Objectives and Key Results](<https://www.forbes.com/advisor/business/what-is-an-okr-definition-examples/#:~:text=OKRs%20(Objectives%20and%20Key%20Results,progress%20is%20measured%20or%20monitored>.) in joint workshops. Once a week we look together at our [Kanban Board ](https://en.wikipedia.org/wiki/Kanban_board)and discuss To Do's. We are an independent and dynamic startup and at the same time work closely with the Institute for Functional Interfaces (IFG) of the KIT, whose laboratory facilities and measurement analytics we currently use. On our way we are accompanied by exciting startup competitions and accelerator programs, where you are welcome to get involved if you are interested.  
  

##### **You are interested and want to learn more about us? Feel free to contact us with a short mail about yourself** [**jobs@rement.tech**](mailto:jobs@rement.tech) 
