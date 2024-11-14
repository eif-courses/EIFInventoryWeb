<script setup lang="ts">
useHead({
  title: '🔐 nuxt-auth-example'
})
</script>

<template>
  <NuxtLayout>
  <div class="min-h-screen h-full relative bg-gray-100 pb-20">
    <div class="fixed bottom-0 w-full">
      <AuthenticationStatus />
    </div>
    <NuxtPage />
  </div>
  </NuxtLayout>
</template>