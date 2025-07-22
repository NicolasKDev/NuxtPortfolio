<script setup lang="ts">
  import { SectionsServices } from '#components'
  import { useHead } from '#imports'

  useHead({
    title: 'Nicolas Kelemen – Développeur Fullstack',
    meta: [
      {
        name: 'description',
        content:
          'Portfolio de Nicolas Kelemen, développeur web fullstack, avec Vue, Nuxt, Laravel, Tailwind.',
      },
      { property: 'og:title', content: 'Nicolas Kelemen – Développeur Fullstack' },
      {
        property: 'og:description',
        content: 'Découvrez mes projets, compétences et services et contactez-moi.',
      },
      { property: 'og:image', content: '/photo-nicolas.jpg' },
    ],
    htmlAttrs: {
      lang: 'fr',
    },
    link: [{ rel: 'canonical', href: 'https://nicolas-kelemen.kelelabs.com' }],
  })
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <SectionsHeader />
    <div class="pt-20">
      <SectionsIntro id="intro" />
      <SectionsProjects id="projects" />
      <SectionsServices id="services" />
      <SectionsSkills id="skills" />
      <SectionsContact id="contact" />
    </div>
    <SectionsFooter class="border-t border-border backdrop-blur-sm" />
  </div>
</template>
