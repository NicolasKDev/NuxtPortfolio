<template>
  <footer class="w-full rounded-t-xl bg-background shadow-lg p-8">
    <div class="max-w-4xl mx-auto text-center text-foreground">
      <div class="max-w-4xl mx-auto text-center text-foreground space-y-2">
        <div class="flex justify-center gap-4 mb-2">
          <a
            href="https://github.com/NicolasKDev"
            target="_blank"
            aria-label="GitHub"
            class="hover:text-primary transition-colors"
          >
            <UIcon name="i-simple-icons-github" class="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/nicolas-kelemen-17777b36a/"
            target="_blank"
            aria-label="LinkedIn"
            class="hover:text-primary transition-colors"
          >
            <UIcon name="i-simple-icons-linkedin" class="w-6 h-6" />
          </a>
          <a
            href="mailto:nicolaskelemen.dev@gmail.com"
            aria-label="Email"
            class="hover:text-primary transition-colors"
          >
            <UIcon name="i-heroicons-envelope" class="w-6 h-6" />
          </a>
        </div>
        <div>
          <span
            >&copy; {{ new Date().getFullYear() }} Nicolas Kelemen — Portfolio réalisé avec Nuxt
            &amp; Nuxt UI</span
          >
        </div>
      </div>
    </div>
  </footer>
</template>
