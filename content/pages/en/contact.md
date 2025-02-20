---
type: PageLayout
title: Contact
slug: /en/contact
english: true
sections:
  - type: GenericSection
    title:
      type: TitleBlock
      text: Send us a message
      color: text-dark
    text: >
      Would you like to find out more about the Rement process, get to know us
      better or are you interested in working with us? Please send us a message
      and we will get back to you as soon as possible.
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
          placeholder: E-Mail
          isRequired: true
          width: full
        - type: TextareaFormControl
          name: message
          label: Message
          hideLabel: true
          placeholder: Message
          width: full
      submitButton:
        type: SubmitButtonFormControl
        label: Send
        icon: arrowRight
        iconPosition: right
        style: primary
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
  metaTitle: Contact
  metaDescription: We look forward to hearing from you.
  addTitleSuffix: false
  metaTags:
    - type: MetaTag
      content: ''
---
