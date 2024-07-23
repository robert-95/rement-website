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
      elementId: new-contact-form
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
  - type: GenericSection
    title:
      type: TitleBlock
      text: Tell us about your project
      color: text-dark
    subtitle: Section with a form subtitle
    text: |-
      Aenean eros ipsum, interdum quis dignissim non, sollicitudin vitae nisl.
      Aenean vel aliquet elit, at blandit ipsum. Sed eleifend felis sit amet
      erat molestie, hendrerit malesuada justo ultrices. Nunc volutpat at erat
      vitae interdum. Ut nec massa eget lorem blandit condimentum et at risus.
    actions: []
    media:
      type: FormBlock
      fields:
        - type: TextFormControl
          name: name
          label: Name
          hideLabel: true
          placeholder: Your name
          isRequired: true
          width: full
        - type: EmailFormControl
          name: email
          label: Email
          hideLabel: true
          placeholder: Your email
          isRequired: true
          width: full
        - type: TextareaFormControl
          name: message
          label: Message
          hideLabel: true
          placeholder: Your message
          isRequired: false
          width: full
      submitButton:
        type: SubmitButtonFormControl
        label: Submit
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''
      action: /.netlify/functions/submission_created
      destination: ''
      elementId: contact-form-new
      styles:
        self:
          padding:
            - pt-6
            - pb-6
            - pl-6
            - pr-6
          borderColor: border-dark
          borderStyle: solid
          borderWidth: 0
          borderRadius: none
    badge:
      type: Badge
      label: Contact us
      color: text-primary
    elementId: ''
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
isDraft: false
seo:
  type: Seo
  metaTitle: Kontakt
  metaDescription: Wir freuen uns über Ihre Anfrage
  addTitleSuffix: false
  metaTags: []
---
