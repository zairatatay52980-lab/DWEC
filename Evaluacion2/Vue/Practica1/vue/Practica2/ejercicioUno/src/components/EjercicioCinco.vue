<script setup>
import { ref, reactive, computed } from 'vue'

const descuento = ref(10)

const pedido = reactive({
  totalBruto: 200,
  unidades: 2
})

const totalFinal = computed(() => {
  return pedido.totalBruto * (1 - descuento.value / 100)
})

const precioPorUnidad = computed(() => {
  return totalFinal.value / pedido.unidades
})

const aumentarDescuento = () => {
  if (descuento.value < 100) {
    descuento.value += 10
  }
}
</script>

<template>
  <div>
    <p>Descuento: {{ descuento }}%</p>
    <p>Total final: {{ totalFinal }} €</p>
    <p>Precio por unidad: {{ precioPorUnidad }} €</p>
    <button @click="aumentarDescuento">+10% descuento</button>
  </div>
</template>