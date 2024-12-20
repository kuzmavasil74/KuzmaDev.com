import React, { useState } from 'react'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import { ErrorMessage, Form, Field, Formik } from 'formik'
import { validationSchema } from '../../utills/validationSchema.js'

import styles from './Contact.module.css'
import { sendContactForm } from '../../utills/api.js'

function Contact() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const handleSubmit = async (values, { resetForm }) => {
    setIsFormSubmitted(true)
    try {
      const response = await sendContactForm(values)
      if (response.ok) {
        alert('Your message has been sent!')
        resetForm()
      } else {
        alert('An error occurred while sending the message.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Failed to send message.')
    } finally {
      setIsFormSubmitted(false)
    }
  }

  return (
    <section className={styles.contactSection}>
      <Header />
      <div className={styles.contactHeader}>
        <h2 className={styles.contactTitle}>
          <span className={styles.contactTitleSpan}> Contact</span> Me
        </h2>
        <h3 className={styles.contactSubtitle}>
          <span className={styles.contactSubtitleSpan}>Get</span> In Touch.
        </h3>
      </div>
      <Formik
        initialValues={{ name: '', email: '', subject: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={styles.contactForm}>
            <h2 className={styles.contactFormTitle}>Message me</h2>
            <Field
              type="text"
              name="name"
              placeholder="Name"
              className={styles.contactFormField}
            />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.contactError}
            />

            <Field
              type="email"
              name="email"
              placeholder="Email"
              className={styles.contactFormField}
            />
            <ErrorMessage
              name="email"
              component="div"
              className={styles.contactError}
            />

            <Field
              type="text"
              name="subject"
              placeholder="Subject"
              className={styles.contactFormField}
            />
            <ErrorMessage
              name="subject"
              component="div"
              className={styles.contactError}
            />

            <Field
              as="textarea"
              name="message"
              placeholder="Message"
              className={styles.contactFieldMessage}
            />
            <ErrorMessage
              name="message"
              component="div"
              className={styles.contactError}
            />
            <button
              type="submit"
              className={styles.contactFormButton}
              disabled={isFormSubmitted}
            >
              {isFormSubmitted ? 'Sending...' : 'Send'}
            </button>
          </Form>
        )}
      </Formik>
      <Footer />
    </section>
  )
}
export default Contact
