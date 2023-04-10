---
title: Home
slug: /
sections:
  - type: GenericSection
    title:
      text: Für eine Betonindustrie im Kreislauf
      color: text-dark
      type: TitleBlock
      styles:
        self:
          fontWeight: 400
          textAlign: left
    subtitle: 'Wir entwickeln Verfahren für hochwertiges, nachhaltiges Betonrecycling'
    actions:
      - label: Das Rement Verfahren
        altText: ''
        url: /
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: secondary
        elementId: ''
        type: Button
      - label: Kontakt
        altText: ''
        url: /
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''
        type: Link
    media:
      url: /images/rement-kreislauf.svg
      altText: Das Rement Verfahren in einer Skizze
      elementId: ''
      type: ImageBlock
    elementId: ''
    colors: bg-light-fg-dark
    backgroundImage: null
    styles:
      self:
        alignItems: center
        flexDirection: row
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
      subtitle:
        textAlign: left
  - type: FeaturedItemsSection
    title:
      text: Warum Betonrecycling?
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    items:
      - title: Rohstoffknappheit
        text: >
          14 Milliarden Kubikmeter neues Beton pro Jahr lassen Sand und Kies
          immer knapper werden. Sand und Kies muss in zahlreichen Gruben
          gewonnen werden. Aufgrund der Korngröße ist Wüstensand nicht für die
          Betonproduktion geeignet. 
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-3
              - pl-8
              - pb-3
              - pr-8
            textAlign: left
            borderRadius: x-large
            flexDirection: row
            justifyContent: center
        type: FeaturedItem
      - title: Flächenverbrauch
        text: >
          2,2 Milliarden Tonnen Bauschutt müssen ab 2025 jährlich verwertet
          werden. Der Großteil des Betonschutts wird zerkleinert und als
          Füllmaterial bis auf unbestimmte Zeit im Straßenbau oder in Sand- und
          Kiesgruben eingesetzt. 
        actions: []
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-3
              - pl-8
              - pb-3
              - pr-8
            textAlign: left
            borderRadius: x-large
            flexDirection: row
            justifyContent: center
        type: FeaturedItem
      - title: CO₂ Emissionen
        text: >
          Die Zementproduktion ist für 8% der weltweiten
          Kohlenstoffdioxid-Emissionen verantwortlich. Aktuell existieren keine
          skalierbaren Ansätze, dieses Kohlenstoffdioxid wieder zu binden. 
        actions: []
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-3
              - pl-8
              - pb-3
              - pr-8
            borderRadius: x-large
            flexDirection: row
        type: FeaturedItem
    actions: []
    badge: null
    elementId: ''
    variant: toggle-list
    colors: bg-light-fg-dark
    backgroundImage: null
    styles:
      self:
        padding:
          - pb-16
          - pt-16
          - pl-3
          - pr-3
        justifyContent: center
      subtitle:
        textAlign: center
  - type: GenericSection
    title:
      text: Das Rement Verfahren
      color: text-dark
      type: TitleBlock
    text: >
      A Stackbit website is a git repo that you own. Every code commit is
      instantly reflected in the visual editor and since every visual edit is a
      git commit, git workflows and collaboration just work.
    actions:
      - label: Get started
        altText: ''
        url: /
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: secondary
        elementId: ''
        type: Button
      - label: See Tutorials
        altText: ''
        url: /
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''
        type: Link
    media:
      url: /images/rement-verfahren.svg
      altText: Überblick über das Rement Verfahren
      elementId: ''
      type: ImageBlock
    badge:
      label: Die Lösung
      color: text-primary
      type: Badge
    elementId: ''
    colors: bg-light-fg-dark
    backgroundImage: null
    styles:
      self:
        alignItems: center
        flexDirection: row-reverse
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
  - title:
      text: Melden Sie sich gerne
      color: text-dark
      type: TitleBlock
    text: >
      Sie möchten mehr über das Rement Verfahren erfahren, uns genauer
      kennenlernen oder sind an einer Zusammenarbeit interessiert? Schreiben Sie
      uns gerne eine kurze Nachricht.
    media:
      fields:
        - name: name
          label: Name
          hideLabel: true
          placeholder: Ihr Name
          isRequired: true
          width: full
          type: TextFormControl
        - name: email
          label: Email
          hideLabel: true
          placeholder: Ihre Emailadresse
          isRequired: true
          width: full
          type: EmailFormControl
        - name: message
          label: Message
          hideLabel: true
          placeholder: Ihre Nachricht
          width: full
          type: TextareaFormControl
      submitButton:
        label: Absenden
        icon: arrowRight
        iconPosition: right
        style: primary
        type: SubmitButtonFormControl
      action: /.netlify/functions/submission_created
      elementId: contact-form
      styles:
        self:
          padding:
            - pt-6
            - pb-6
            - pl-6
            - pr-6
          borderColor: border-dark
          borderStyle: solid
          borderWidth: 1
          borderRadius: large
      type: FormBlock
    badge:
      color: text-primary
      type: Badge
    colors: bg-light-fg-dark
    type: GenericSection
seo:
  metaTitle: Home - Demo site
  metaDescription: This demo site is built with Stackbit
  socialImage: /images/soc-feature-image.png
  type: Seo
type: PageLayout
---
