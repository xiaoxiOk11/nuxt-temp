<!-- pages/index.vue -->
<template>
  <section>
    Lokks
  </section>
</template>

<script setup>
import { computed, defineAsyncComponent, onMounted } from "vue";
import { themeRoute } from "~/stores/theme";
const useThemeRoute = themeRoute();

const currentThemeComponent = computed(() => {
  if (!useThemeRoute.fileRoute) return null;
  return defineAsyncComponent(
    () => import(`~/pageRoute/${useThemeRoute.fileRoute}/login/beforeLogin.vue`)
  );
});
</script>
