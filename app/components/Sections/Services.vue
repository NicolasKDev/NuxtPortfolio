<template>
  <section class="w-full bg-background/80 shadow-lg p-12 border-t border-border">
    <div class="max-w-4xl mx-auto fade-in-up">
      <h1 class="text-3xl font-bold mb-8 text-center">Services</h1>

      <div class="grid md:grid-cols-2 gap-8">
        <ServiceCard
          v-for="(service, i) in services"
          :key="i"
          :icon="service.icon"
          :icon-color="service.iconColor"
          :icon-bg="service.iconBg"
          :title="service.title"
          :description="service.description"
          :badges="service.badges"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  useScrollFadeIn()
  const services = [
    {
      icon: 'i-heroicons-code-bracket',
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100',
      title: "Développement d'applications web",
      description:
        'Je peux créer des applications web évolutives et bien structurées, côté backend comme frontend, avec une bonne maintenabilité et des bonnes pratiques de développement.',
      badges: [
        { label: 'Frontend', color: 'primary' },
        { label: 'Backend', color: 'success' },
        { label: 'Architecture', color: 'warning' },
        { label: 'Performance', color: 'error' },
      ],
    },
    {
      icon: 'i-heroicons-rocket-launch',
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-100',
      title: 'Création de MVP',
      description:
        "Je peux vous accompagner dans la conception et le développement de prototypes ou de premières versions d'un produit, pour une validation rapide de vos idées avec des solutions techniques adaptées.",
      badges: [
        { label: 'Prototype', color: 'error' },
        { label: 'Validation', color: 'primary' },
        { label: 'Rapidité', color: 'success' },
        { label: 'Innovation', color: 'warning' },
      ],
    },
  ]
</script>
