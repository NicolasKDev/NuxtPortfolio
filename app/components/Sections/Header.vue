<template>
  <nav
    class="fixed flex top-0 w-full bg-background/30 backdrop-blur-md shadow-lg rounded-b-xl z-50"
  >
    <div class="flex-1">
      <UButton
        icon="i-heroicons-moon"
        :color="colorMode.value === 'dark' ? 'primary' : 'neutral'"
        variant="outline"
        aria-label="Changer le thème"
        class="mx-10 my-6 rounded-xl"
        @click="colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'"
      >
        {{ colorMode.value === 'dark' ? 'Clair' : 'Sombre' }}
      </UButton>
    </div>
    <div class="flex-1">
      <ul class="flex justify-end space-x-10 px-10 py-6 text-lg font-semibold text-foreground">
        <li
          ><a
            href="#projects"
            class="hover:text-primary transition-colors underline-offset-4 hover:underline cursor-pointer"
            @click.prevent="scrollToSection('projects')"
            >Projets</a
          ></li
        >
        <li
          ><a
            href="#services"
            class="hover:text-primary transition-colors underline-offset-4 hover:underline cursor-pointer"
            @click.prevent="scrollToSection('services')"
            >Services</a
          ></li
        >
        <li
          ><a
            href="#skills"
            class="hover:text-primary transition-colors underline-offset-4 hover:underline cursor-pointer"
            @click.prevent="scrollToSection('skills')"
            >Compétences</a
          ></li
        >
        <li
          ><a
            href="#contact"
            class="hover:text-primary transition-colors underline-offset-4 hover:underline cursor-pointer"
            @click.prevent="scrollToSection('contact')"
            >Contact</a
          ></li
        >
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
  const { scrollToSection } = useScrollToSection()
  const colorMode = useColorMode()
</script>
