---
type: PageLayout
title: Kontakt
slug: kontakt
sections:
  - type: GenericSection
    title:
      type: TitleBlock
      text: Kontakt
      color: text-dark
    subtitle: Wir werden uns in Kürze bei Ihnen melden
    actions: []
    media:
      type: ImageBlock
      altText: Unblock your team boost your time to production preview
      elementId: ''
    badge:
      type: Badge
      color: text-primary
    elementId: ''
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: row
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
  - type: GenericSection
    title:
      type: TitleBlock
      text: Melden Sie sich gerne
      color: text-dark
    text: >
      Sie möchten mehr über das Rement Verfahren erfahren, uns genauer
      kennenlernen oder sind an einer Zusammenarbeit interessiert? Schreiben Sie
      uns gerne eine Nachricht und wir melden uns zeitnah zurück.
    actions: []
    media:
      type: FormBlock
      fields:
        - type: TextFormControl
          name: name
          label: Name
          hideLabel: true
          placeholder: Ihr Name
          isRequired: true
          width: full
        - type: EmailFormControl
          name: email
          label: Email
          hideLabel: true
          placeholder: Ihre Emailadresse
          isRequired: true
          width: full
        - type: TextareaFormControl
          name: message
          label: Message
          hideLabel: true
          placeholder: Ihre Nachricht
          width: full
      submitButton:
        type: SubmitButtonFormControl
        label: Absenden
        icon: arrowRight
        iconPosition: right
        style: primary
      action: /.netlify/functions/submission_created
      destination: robert.schleinhege@rement.tech
      elementId: contact-form-seperate-page
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
    badge:
      type: Badge
      color: text-primary
    elementId: '7'
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-48
          - pl-8
          - pb-1
          - pr-8
isDraft: false
seo:
  type: Seo
  metaTitle: Nachricht gesendet
  metaDescription: Vielen Dank für Ihre Anfrage.
  addTitleSuffix: false
  metaTags: []
---
