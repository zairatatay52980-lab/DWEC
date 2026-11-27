<script setup>
    import {ref} from 'vue'

    const annos = ref(19);

const incrementar = () => {
  annos.value++
}



</script>

<template>
    <div>
        <p>Zaira ({{ annos }}) </p>
        <p>zaira@gmail.com</p>
        <p>
            <button @click="incrementar">Cumplir años</button>
        </p>
    </div>
</template>
