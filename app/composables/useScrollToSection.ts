export function useScrollToSection(defaultHeaderHeight = 40) {
  const scrollToSection = (sectionId: string, headerHeight: number = defaultHeaderHeight) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const elementPosition = element.offsetTop - headerHeight - 20 // 20px de marge supplémentaire
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      })
    }
  }
  return { scrollToSection }
}
