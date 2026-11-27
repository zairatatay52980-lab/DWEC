<script setup>
import { ref, computed } from 'vue'

const contador = ref(0)

const doble = computed(() => contador.value * 2)

const incrementar = () => {
  contador.value++
}
</script>

<template>
  <div>
    <p>Contador: {{ contador }}</p>
    <p>Doble: {{ doble }}</p>
    <button @click="incrementar">Incrementar</button>

  </div>
</template>