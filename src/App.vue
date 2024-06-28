<template>
      <RouterView />
</template>

<script lang="ts" setup>
const route = useRoute()
onMounted(() => {
      console.log(route,'router')
})
</script>
