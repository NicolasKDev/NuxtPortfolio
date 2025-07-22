<template>
  <section class="min-h-screen flex flex-col justify-center items-center bg-background/80 p-8">
    <div class="text-center space-y-6">
      <div class="flex flex-col items-center">
        <UIcon name="i-heroicons-bug-ant" class="w-20 h-20 text-primary mb-4" />
        <h1 class="text-7xl font-extrabold text-primary mb-2">404</h1>
      </div>
      <h2 class="text-2xl font-bold text-foreground mb-2">Oups, cette page n'existe pas !</h2>
      <p class="text-lg text-foreground/60 mb-6"
        >Page introuvable.<br />Vous pouvez revenir à l'accueil.</p
      >
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-secondary font-semibold rounded-lg shadow hover:bg-primary/80 transition-colors"
      >
        <UIcon name="i-heroicons-arrow-uturn-left" class="w-5 h-5" />
        Retour à l'accueil
      </NuxtLink>
    </div>
  </section>
</template>
