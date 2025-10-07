<template>
  <div>
    <h2>v-if / v-else-if / v-else</h2>
    <p>
      <strong>Descripción:</strong> Muestra u oculta elementos según condiciones lógicas.
    </p>

    <p>Edad actual: <strong>{{ edad }}</strong></p>
    <div v-if="edad < 18">Eres menor de edad</div>
    <div v-else-if="edad < 65">Eres adulto</div>
    <div v-else>Eres adulto mayor</div>

    <button @click="edad--">-</button>
    <button @click="edad++">+</button>

    <p>Usa los botones para cambiar la edad y observar el comportamiento.</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const edad = ref(20)
</script>
