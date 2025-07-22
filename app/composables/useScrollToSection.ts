export function useScrollToSection(defaultHeaderHeight = 40) {
  const scrollToSection = (sectionId: string, headerHeight: number = defaultHeaderHeight) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const isMdOrAbove = window.innerWidth >= 768
      let elementPosition = 0
      if (isMdOrAbove) {
        elementPosition = element.offsetTop - headerHeight - 20
      } else {
        elementPosition = element.offsetTop
      }
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      })
    }
  }
  return { scrollToSection }
}
