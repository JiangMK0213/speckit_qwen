<template>
  <el-config-provider :locale="elLocale">
    <router-view />
  </el-config-provider>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const i18n = useI18n()
const elLocale = computed(() => i18n.messages.value[i18n.locale.value].el)
</script>
