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
  - title: Divider
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-7
          - pl-7
          - pb-7
          - pr-7
    type: DividerSection
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
