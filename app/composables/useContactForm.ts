import { ref, reactive } from 'vue'

export function useContactForm() {
  const formData = reactive<Record<string, string>>({
    name: '',
    email: '',
    message: '',
  })

  const errors = reactive<Record<string, string>>({
    name: '',
    email: '',
    message: '',
  })

  const isSubmitting = ref(false)
  const submitStatus = ref('')

  const validateForm = () => {
    Object.keys(errors).forEach((key) => (errors[key] = ''))
    let isValid = true
    if (!formData.name?.trim()) {
      errors.name = 'Le nom est obligatoire'
      isValid = false
    } else if (formData.name?.trim().length < 2) {
      errors.name = 'Le nom doit contenir au moins 2 caractères'
      isValid = false
    }
    if (!formData.email?.trim()) {
      errors.email = "L'email est obligatoire"
      isValid = false
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        errors.email = 'Veuillez entrer un email valide'
        isValid = false
      }
    }
    if (!formData.message?.trim()) {
      errors.message = 'Le message est obligatoire'
      isValid = false
    } else if (formData.message?.trim().length < 10) {
      errors.message = 'Le message doit contenir au moins 10 caractères'
      isValid = false
    }
    return isValid
  }

  const handleSubmit = async (event: Event) => {
    event.preventDefault()
    if (!validateForm()) return
    isSubmitting.value = true
    submitStatus.value = ''
    try {
      const form = event.target as HTMLFormElement
      const formDataObj = new FormData(form)
      const response = await fetch(form.action, {
        method: 'POST',
        body: formDataObj,
        headers: { Accept: 'application/json' },
      })
      if (response.ok) {
        submitStatus.value = 'success'
        Object.keys(formData).forEach((key) => (formData[key] = ''))
      } else {
        submitStatus.value = 'error'
      }
    } catch {
      submitStatus.value = 'error'
    } finally {
      isSubmitting.value = false
    }
  }

  return {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    validateForm,
    handleSubmit,
  }
}
