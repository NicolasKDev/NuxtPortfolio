<template>
  <UCard
    class="h-full hover:shadow-lg transition-all duration-300 bg-card-background border border-card-border"
  >
    <template #header>
      <div class="flex items-center gap-3 p-6 pb-0">
        <div :class="['w-12 h-12 rounded-lg flex items-center justify-center', props.iconBg]">
          <UIcon :name="props.icon" :class="['w-6 h-6', props.iconColor]" />
        </div>
        <h3 class="text-xl font-bold text-primary">{{ props.title }}</h3>
      </div>
    </template>
    <div class="p-6 pt-4">
      <p class="text-foreground leading-relaxed">
        {{ props.description }}
      </p>
      <div class="mt-4 flex flex-wrap gap-2">
        <UBadge
          v-for="(badge, i) in props.badges"
          :key="i"
          :color="badge.color as any"
          variant="soft"
          size="sm"
        >
          {{ badge.label }}
        </UBadge>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
  type Badge = {
    label: string
    color?: string
  }

  interface Props {
    icon: string
    iconColor?: string
    iconBg?: string
    title: string
    description: string
    badges?: Badge[]
  }

  const props = defineProps<Props>()
</script>
