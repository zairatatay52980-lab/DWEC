<script setup>
    import {ref} from 'vue'

const tareas = ref(['Aprender vue', 'Practicar JavaScript', 'ejemplo1']);;

const agregarTarea = () => {
  tareas.value.push(tareas.value);
}



</script>

<template>
    <div>
        <p>Mis tareas  </p>
        <ul>
            <li v-for="tarea in tareas"> {{ tarea }}</li>
        </ul>
        <p>
            <button v-on:click="agregarTarea">Agregar tarea</button>
        </p>
    </div>
</template>
