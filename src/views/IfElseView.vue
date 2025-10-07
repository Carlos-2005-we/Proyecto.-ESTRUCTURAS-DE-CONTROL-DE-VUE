<template>
  <div>
    <h2>v-if / v-else-if / v-else</h2>
    <p>
      <ul>
        <li><strong>Función de v-if:</strong>  Renderiza el elemento solo si la condición es verdadera. En este caso mostrará el Mensaje "Eres menor de edad" si el numero es menor a 18.</li>
        <li><strong>Función de v-else-if:</strong>  Se evalúa si la condición anterior no se cumple; actúa como una condición adicional. En este caso mostrara el Mensaje "Eres adulto" cuando la condición anterior no se cumple</li>
        <li><strong>Funcion de v-else:</strong>  Se muestra si ninguna de las condiciones anteriores fue verdadera.</li>
      </ul>
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