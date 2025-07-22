<template>
  <section class="w-full bg-background/80 shadow-lg p-12 border-t border-border">
    <div class="max-w-4xl mx-auto fade-in-up">
      <h1 class="text-3xl font-bold mb-8 text-center">Compétences</h1>

      <div class="grid md:grid-cols-5 gap-8">
        <!-- Frontend -->
        <div class="space-y-4">
          <h2
            class="text-xl font-semibold text-foreground mb-4 flex items-center justify-center gap-2"
          >
            <UIcon name="i-heroicons-computer-desktop" class="w-5 h-5 text-blue-600" />
            Frontend
          </h2>
          <div class="flex flex-wrap gap-x-8 gap-y-4 justify-center">
            <UBadge
              v-for="skill in frontendSkills"
              :key="skill.name"
              color="neutral"
              variant="subtle"
              size="lg"
              class="flex items-center justify-center gap-2 py-2 w-9/10 bg-card-background/50"
            >
              <UIcon :name="skill.icon" class="w-4 h-4" :class="skill.iconClass" />
              <span class="font-medium">{{ skill.name }}</span>
            </UBadge>
          </div>
        </div>

        <USeparator class="block md:hidden" />
        <USeparator orientation="vertical" class="hidden md:block h-48 m-auto" />

        <!-- Backend -->
        <div class="space-y-4">
          <h2
            class="text-xl font-semibold text-foreground mb-4 flex items-center justify-center gap-2"
          >
            <UIcon name="i-heroicons-server" class="w-5 h-5 text-green-600" />
            Backend
          </h2>
          <div class="flex flex-wrap gap-x-8 gap-y-4 justify-center">
            <!-- TODO: Add color -->
            <UBadge
              v-for="skill in backendSkills"
              :key="skill.name"
              color="neutral"
              variant="subtle"
              size="lg"
              class="flex items-center justify-center gap-2 py-2 w-9/10 bg-card-background/50"
            >
              <UIcon :name="skill.icon" class="w-4 h-4" :class="skill.iconClass" />
              <span class="font-medium">{{ skill.name }}</span>
            </UBadge>
          </div>
        </div>

        <USeparator class="block md:hidden" />
        <USeparator orientation="vertical" class="hidden md:block h-48 m-auto" />

        <!-- Tools -->
        <div class="space-y-4">
          <h2
            class="text-xl font-semibold text-foreground mb-4 flex items-center justify-center gap-2"
          >
            <UIcon name="i-heroicons-cog-6-tooth" class="w-5 h-5 text-purple-600" />
            Outils
          </h2>
          <div class="flex flex-wrap gap-x-8 gap-y-4 justify-center">
            <UBadge
              v-for="skill in toolsSkills"
              :key="skill.name"
              color="neutral"
              variant="subtle"
              size="lg"
              class="flex items-center justify-center gap-2 py-2 w-9/10 bg-card-background/50"
            >
              <UIcon :name="skill.icon" class="w-4 h-4" :class="skill.iconClass" />
              <span class="font-medium">{{ skill.name }}</span>
            </UBadge>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  type Skill = {
    name: string
    icon: string
    iconClass: string
  }

  useScrollFadeIn()
  const frontendSkills: Skill[] = [
    {
      name: 'Vue.js',
      icon: 'i-simple-icons-vuedotjs',
      iconClass: 'text-green-600',
    },
    {
      name: 'Nuxt',
      icon: 'i-simple-icons-nuxtdotjs',
      iconClass: 'text-green-500',
    },
    {
      name: 'Tailwind CSS',
      icon: 'i-simple-icons-tailwindcss',
      iconClass: 'text-blue-500',
    },
  ]

  const backendSkills: Skill[] = [
    {
      name: 'PHP',
      icon: 'i-simple-icons-php',
      iconClass: 'text-blue-600',
    },
    {
      name: 'Laravel',
      icon: 'i-simple-icons-laravel',
      iconClass: 'text-red-600',
    },
    {
      name: 'MySQL',
      icon: 'i-simple-icons-mysql',
      iconClass: 'text-blue-700',
    },
  ]

  const toolsSkills: Skill[] = [
    {
      name: 'Git',
      icon: 'i-simple-icons-git',
      iconClass: 'text-orange-600',
    },
    {
      name: 'GitHub',
      icon: 'i-simple-icons-github',
      iconClass: 'text-gray-800',
    },
    {
      name: 'DBeaver',
      icon: 'i-simple-icons-dbeaver',
      iconClass: 'text-blue-600',
    },
  ]
</script>
