const API_URL =
  import.meta.env.VITE_API_URL || 'https://kuzmadev-com-back-end.onrender.com'

export const sendContactForm = async (data) => {
  const response = await fetch(`${API_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  return response
}

// The backend runs on a free plan that sleeps when idle; waking it early
// means the form is usually ready by the time the visitor presses Send.
export const wakeUpBackend = () => {
  fetch(`${API_URL}/api/contact`, { method: 'OPTIONS' }).catch(() => {})
}
