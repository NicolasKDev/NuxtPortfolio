<template>
  <UCard
    class="h-full w-full hover:scale-105 rounded-xl hover:shadow-xl transition-all duration-300 bg-card-background border border-card-border overflow-hidden cursor-pointer group"
    :ui="{
      header: 'p-0 sm:p-0',
      footer: 'p-0',
    }"
    @click="handleCardClick"
  >
    <template #header>
      <div class="overflow-hidden h-48">
        <img
          :src="image"
          :alt="title"
          class="w-full h-full object-cover object-center transition-transform duration-300"
          loading="lazy"
        />
      </div>
    </template>

    <div class="space-y-4">
      <h3
        class="text-xl font-bold text-card-primary mb-3 group-hover:text-accent transition-colors"
      >
        {{ title }}
      </h3>
      <p class="text-card-foreground leading-relaxed text-sm">
        {{ description }}
      </p>

      <!-- Technologies badges -->
      <div v-if="technologies && technologies.length > 0" class="flex flex-wrap gap-2">
        <UBadge
          v-for="tech in technologies"
          :key="tech.name"
          :color="(tech.color || 'gray') as any"
          variant="soft"
          size="sm"
          class="flex items-center gap-1 text-card-foreground"
        >
          <UIcon :name="tech.icon" class="w-3 h-3" :class="tech.iconClass" />
          <span class="text-xs">{{ tech.name }}</span>
        </UBadge>
      </div>
    </div>

    <template #footer>
      <div class="py-4">
        <div class="flex justify-end gap-1">
          <UButton
            v-if="backend"
            :to="backend"
            target="_blank"
            variant="ghost"
            :color="'foreground' as any"
            size="sm"
            icon="i-simple-icons-github"
            :aria-label="`Code backend de ${title}`"
            :title="`Code backend de ${title} sur GitHub`"
            class="hover:bg-gray-100"
            @click.stop
          />
          <UButton
            v-if="frontend"
            :to="frontend"
            target="_blank"
            variant="ghost"
            :color="'foreground' as any"
            size="sm"
            icon="i-simple-icons-github"
            :aria-label="`Code frontend de ${title}`"
            :title="`Code frontend de ${title} sur GitHub`"
            class="hover:bg-gray-100"
            @click.stop
          />
          <UButton
            v-if="live"
            :to="live"
            target="_blank"
            variant="ghost"
            :color="'foreground' as any"
            size="sm"
            icon="i-heroicons-arrow-top-right-on-square"
            :aria-label="`Voir ${title} en ligne`"
            :title="`Voir ${title} en ligne`"
            class="hover:bg-primary-50"
            @click.stop
          />
        </div>
      </div>
    </template>
  </UCard>
</template>

<script setup lang="ts">
  type Technology = {
    name: string
    icon: string
    color?: string
    iconClass?: string
  }

  interface Props {
    title: string
    description: string
    image: string
    backend?: string | null
    frontend?: string | null
    live?: string | null
    technologies?: Technology[]
  }

  const props = defineProps<Props>()

  const handleCardClick = () => {
    if (props.live) {
      window.open(props.live, '_blank')
    }
  }
</script>
