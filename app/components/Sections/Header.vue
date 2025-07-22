<template>
  <nav
    class="hidden fixed md:flex top-0 w-full bg-background/30 backdrop-blur-md shadow-lg rounded-b-xl z-50"
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

  <!-- Mobile menu -->
  <div class="flex justify-center md:hidden top-0 w-full bg-background">
    <UButton
      icon="i-heroicons-bars-3"
      aria-label="Menu"
      class="my-6 rounded-xl h-10 w-8/10 flex items-center justify-center"
      color="primary"
      @click="isMenuOpen = !isMenuOpen"
    />
  </div>
  <Transition
    enter-active-class="transition-all duration-200 ease-out"
    enter-from-class="opacity-0 -translate-y-8"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-8"
  >
    <div v-if="isMenuOpen" class="flex flex-col justify-center items-center bg-background">
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
      <nav>
        <ul class="text-lg font-semibold text-foreground text-center space-y-2 mb-6">
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
      </nav>
    </div>
  </Transition>
</template>

<script setup lang="ts">
  const { scrollToSection } = useScrollToSection()
  const colorMode = useColorMode()

  const isMenuOpen = ref(false)
</script>
