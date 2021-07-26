export default function validateInfo(values) {
  let errors = {}

  if (!values.name.trim()) {
    errors.name = "Naam verplicht"
  }

  // Gebruik regex om email input te controleren
  if (!values.email) {
    errors.email = "Email verplicht"
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is niet geaccepteerd"
  }

  if (!values.subject) {
    errors.subject = "U heeft geen onderwerp ingevoerd"
  }

  if (!values.message) {
    errors.message = "U heeft geen bericht ingevoerd"
  }

  return errors
}
