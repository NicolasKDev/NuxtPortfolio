<template>
  <section
    class="w-full rounded-t-xl bg-background/80 shadow-lg text-center p-12 min-h-screen flex flex-col justify-center items-center border-t border-border"
  >
    <div>
      <div class="flex-1 mx-auto mb-4 fade-in-up items-center">
        <img
          src="/photo-nicolas.jpg"
          alt="Photo de Nicolas"
          class="w-32 h-32 md:w-45 md:h-45 rounded-full object-cover shadow-lg border-4 border-primary mx-auto"
          loading="lazy"
        />
      </div>
      <div class="max-w-4xl mx-auto md:mb-52 fade-in-up">
        <h1 class="text-4xl md:text-6xl text-primary font-bold mb-4">
          Hey ! Je suis <span class="font-bold">Nicolas</span>
        </h1>
        <p class="text-lg md:text-2xl mb-2">
          Développeur fullstack en constante évolution avec plus de 8 ans d'expérience côté backend.
        </p>
        <p class="mb-2 md:text-lg">
          Je conçois des applis web évolutives et maintenables qui répondent à vos besoins !
        </p>
        <p class="md:text-lg">
          Disponible pour missions et projets —
          <a
            class="italic underline hover:text-primary transition-colors cursor-pointer"
            @click.prevent="scrollToSection('contact')"
            >contactez-moi.</a
          >
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { useScrollToSection } from '#imports'
  const { scrollToSection } = useScrollToSection()

  useScrollFadeIn()
</script>
