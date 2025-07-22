<template>
  <section class="w-full rounded-b-xl bg-background/80 shadow-lg p-12 border-t border-border">
    <div class="max-w-4xl mx-auto fade-in-up">
      <h1 class="text-3xl font-bold mb-8 text-center">Contact</h1>

      <form
        action="https://formspree.io/f/xkgzgwny"
        method="POST"
        class="max-w-2xl mx-auto space-y-6"
        @submit="handleSubmit"
      >
        <!-- Name field -->
        <div>
          <label for="name" class="block text-sm font-medium text-foreground mb-2">
            Nom complet <span class="text-warning">*</span>
          </label>
          <input
            id="name"
            v-model="formData.name"
            name="name"
            type="text"
            required
            class="w-full px-4 py-3 border border-card-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            :class="{ 'border-warning': errors.name }"
            placeholder="Votre nom complet"
          />
          <p v-if="errors.name" class="mt-1 text-sm text-warning">{{ errors.name }}</p>
        </div>

        <!-- Email field -->
        <div>
          <label for="email" class="block text-sm font-medium text-foreground mb-2">
            Email <span class="text-warning">*</span>
          </label>
          <input
            id="email"
            v-model="formData.email"
            name="email"
            type="email"
            required
            class="w-full px-4 py-3 border border-card-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            :class="{ 'border-warning': errors.email }"
            placeholder="votre.email@exemple.com"
          />
          <p v-if="errors.email" class="mt-1 text-sm text-warning">{{ errors.email }}</p>
        </div>

        <!-- Message field -->
        <div>
          <label for="message" class="block text-sm font-medium text-foreground mb-2">
            Message <span class="text-warning">*</span>
          </label>
          <textarea
            id="message"
            v-model="formData.message"
            name="message"
            required
            rows="6"
            class="w-full px-4 py-3 border border-card-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
            :class="{ 'border-warning': errors.message }"
            placeholder="Décrivez votre projet ou votre demande..."
          />
          <p v-if="errors.message" class="mt-1 text-sm text-warning">{{ errors.message }}</p>
        </div>

        <!-- Bouton d'envoi -->
        <div class="text-center">
          <button
            type="submit"
            :disabled="isSubmitting"
            class="px-8 py-3 bg-primary text-secondary dark:text-foreground font-medium rounded-lg hover:bg-primary/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="isSubmitting">Envoi en cours...</span>
            <span v-else>Envoyer le message</span>
          </button>
        </div>

        <!-- Messages de succès/erreur -->
        <div v-if="submitStatus" class="text-center">
          <p v-if="submitStatus === 'success'" class="text-green-600 font-medium">
            Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
          </p>
          <p v-else-if="submitStatus === 'error'" class="text-warning font-medium">
            Une erreur est survenue. Veuillez réessayer ou me contacter directement.
          </p>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { useContactForm } from '~/composables/useContactForm'
  useScrollFadeIn()
  const { formData, errors, isSubmitting, submitStatus, handleSubmit } = useContactForm()
  defineOptions({
    name: 'SectionsContact',
  })
</script>
