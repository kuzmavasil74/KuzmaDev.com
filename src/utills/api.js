export const sendContactForm = async (data) => {
  const response = await fetch(
    'https://kuzmadev-com-back-end.onrender.com/api/contact',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }
  )
  return response
}
