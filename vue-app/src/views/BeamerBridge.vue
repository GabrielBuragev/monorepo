<template>
  <button class="btn-action" @click="$router.go(-1)">
    {{ $t('layer2.beamer_bridge.link') }}
  </button>
  <iframe id="beamer-app" src="https://app.beamerbridge.com"></iframe>
</template>

<style scoped>
#beamer-app {
  width: 100%;
  height: 80vh;
}
.btn-action {
  margin-bottom: 10px;
}
</style>
