---
type: PageLayout
title: Kontakt
slug: kontakt
sections:
  - type: GenericSection
    title:
      type: TitleBlock
      text: Melden Sie sich gerne
      color: text-dark
    text: >
      Sie möchten mehr über das Rement Verfahren erfahren, uns genauer
      kennenlernen oder sind an einer Zusammenarbeit interessiert? Schreiben Sie
      uns gerne eine Nachricht und wir melden uns zeitnah zurück.
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
      elementId: contact
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
      destination: null
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
  metaTitle: Kontakt
  metaDescription: Wir freuen uns über Ihre Anfrage
  addTitleSuffix: false
  metaTags:
    - type: MetaTag
      content: >-
        <link rel="alternate" href="https://rement.tech/kontakt" hreflang="de"
        /><link rel="alternate" href="https://rement.tech/en/contact"
        hreflang="en" />
---
