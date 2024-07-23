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
isDraft: false
seo:
  type: Seo
  metaTitle: Kontakt
  metaDescription: Wir freuen uns über Ihre Anfrage
  addTitleSuffix: false
  metaTags: []
---

<form name="contact" method="POST" data-netlify="true" class="sb-component sb-component-block sb-component-form-block pt-6 pb-6 pl-6 pr-6 border border-solid border-dark rounded-xl">
  <p>
    <label>Ihr Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Ihre E-Mail-Adresse: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Ihre Nachricht: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
