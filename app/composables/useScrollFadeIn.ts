import { onBeforeUnmount, onMounted } from 'vue'

export function useScrollFadeIn(selector = '.fade-in-up') {
  let onScroll: () => void

  onMounted(() => {
    const elements = document.querySelectorAll(selector)
    onScroll = () => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight - 50) {
          el.classList.add('visible')
        }
      })
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
  })
}
