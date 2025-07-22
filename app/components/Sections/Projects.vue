<template>
  <section class="w-full bg-background/80 shadow-lg p-12 border-t border-border">
    <div class="max-w-4xl mx-auto fade-in-up">
      <h1 class="text-3xl font-bold mb-8 text-center">Projets</h1>

      <div class="flex flex-wrap justify-center gap-6 items-stretch">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="index"
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :backend="project.backend"
          :frontend="project.frontend"
          :live="project.live"
          :technologies="project.technologies"
          class="sm:w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm h-full"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  useScrollFadeIn()
  const projects = [
    {
      title: 'YaTodoList',
      description: 'Application de gestion de tâches avec une API Laravel et un frontend Vue.js.',
      image: '/projects/pictures/yatodolist.png',
      backend: 'https://github.com/NicolasKDev/TodoListApi',
      frontend: 'https://github.com/NicolasKDev/TodoListFrontend',
      live: 'https://yatodolist.kelelabs.com',
      technologies: [
        {
          name: 'Vue.js',
          icon: 'i-simple-icons-vuedotjs',
          color: 'green',
          iconClass: 'text-green-600',
        },
        {
          name: 'Laravel',
          icon: 'i-simple-icons-laravel',
          color: 'red',
          iconClass: 'text-red-600',
        },
        {
          name: 'Tailwind CSS',
          icon: 'i-simple-icons-tailwindcss',
          color: 'blue',
          iconClass: 'text-blue-500',
        },
        {
          name: 'MySQL',
          icon: 'i-simple-icons-mysql',
          color: 'blue',
          iconClass: 'text-blue-700',
        },
      ],
    },
    {
      title: 'Portfolio',
      description:
        'Le Portfolio sur lequel vous vous trouvez actuellement, développé avec Nuxt et Tailwind CSS.',
      image: '/projects/pictures/portfolio.png',
      frontend: 'https://github.com/username/portfolio',
      live: 'https://nicolas-kelemen.kelelabs.com',
      technologies: [
        {
          name: 'Nuxt',
          icon: 'i-simple-icons-nuxtdotjs',
          color: 'green',
          iconClass: 'text-green-500',
        },
        {
          name: 'Tailwind CSS',
          icon: 'i-simple-icons-tailwindcss',
          color: 'blue',
          iconClass: 'text-blue-500',
        },
        {
          name: 'Nuxt UI',
          icon: 'i-simple-icons-nuxtdotjs',
          color: 'purple',
          iconClass: 'text-purple-600',
        },
      ],
    },
  ]
</script>
