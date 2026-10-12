import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import { ErrorMessage, Form, Field, Formik } from 'formik'
import { validationSchema } from '../../utills/validationSchema.js'

import styles from './Contact.module.css'
import { sendContactForm, wakeUpBackend } from '../../utills/api.js'

function Contact() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [status, setStatus] = useState(null)

  useEffect(() => {
    wakeUpBackend()
  }, [])

  const handleSubmit = async (values, { resetForm }) => {
    setIsFormSubmitted(true)
    setStatus(null)
    try {
      const response = await sendContactForm(values)
      if (response.ok) {
        setStatus({ type: 'success', text: 'Thank you! Your message has been sent.' })
        resetForm()
      } else {
        setStatus({ type: 'error', text: 'An error occurred while sending the message.' })
      }
    } catch (error) {
      console.error('Error:', error)
      setStatus({
        type: 'error',
        text: 'Failed to send message. Please write to kuzmavasil.v@gmail.com.',
      })
    } finally {
      setIsFormSubmitted(false)
    }
  }

  return (
    <section className={styles.contactSection}>
      <Header />
      <div className={styles.contactHeader}>
        <h1 className={styles.contactTitle}>
          <span className={styles.contactTitleSpan}> Contact</span> Me
        </h1>
        <p className={styles.contactSubtitle}>
          <span className={styles.contactSubtitleSpan}>Get</span> In Touch.
        </p>
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
              aria-label="Name"
              autoComplete="name"
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
              aria-label="Email"
              autoComplete="email"
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
              aria-label="Subject"
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
              aria-label="Message"
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
            <p className={styles.contactStatus} role="status" aria-live="polite">
              {isFormSubmitted && 'The first message can take up to 30 seconds.'}
              {status && (
                <span
                  className={
                    status.type === 'success'
                      ? styles.contactStatusSuccess
                      : styles.contactStatusError
                  }
                >
                  {status.text}
                </span>
              )}
            </p>
          </Form>
        )}
      </Formik>
      <Footer />
    </section>
  )
}
export default Contact
