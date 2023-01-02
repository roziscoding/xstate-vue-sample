<script lang="ts" setup>
import { ref } from "vue";

const searchTerm = ref("");
const emit = defineEmits(["search", "reset"]);
const reset = () => {
  searchTerm.value = "";
  emit("reset");
};
</script>

<template>
  <div class="container fillwidth">
    <input placeholder="Pesquisar repositórios no Github" type="text" name="search" v-model="searchTerm" />
    <button class="button" @click="emit('search', searchTerm)">Pesquisar</button>
    <button class="button" @click="reset">Limpar</button>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
}

.container input {
  width: 100%;
  padding: 10px;
  border: none;
  outline: 2px solid #e0e0e0;
  margin-right: 10px;
  border-radius: 5px;
  transition: all 0.1s;
}

.container input:focus-visible {
  outline: 2px solid var(--accent);
}

.container button:hover {
  filter: brightness(0.95);
}

.container button:active {
  filter: brightness(1.1);
}

.button:nth-of-type(1) {
  margin-right: 10px;
}
</style>
