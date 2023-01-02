<script setup lang="ts">
import SearchBar from "./components/SearchBar.vue";
import ResultsList from "./components/ResultsList.vue";
import { useRepositorySearch } from "./hooks/use-repository-search";

const { state, search, reset } = useRepositorySearch();
</script>

<template>
  <div class="main fillparent center">
    <div class="content elevated">
      <SearchBar @search="search" @reset="reset" />
      <div class="result" v-if="state.matches('idle')">Clique em "Pesquisar" para carregar os resultados</div>
      <div class="result" v-if="state.matches('loading')">Carregando resultados...</div>
      <div class="result" v-if="state.matches('error')">Erro ao buscar resultados: {{ state.context.error }}</div>
      <ResultsList class="result" :results="state.context.results" v-if="state.matches('success')" />
    </div>
  </div>
</template>

<style scoped>
.main {
  background-color: var(--page-background);
  height: 100%;
  width: 100%;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 80%;
  min-height: 50%;
  max-height: 90%;
  overflow-y: auto;
  color: gray;
}

.result {
  margin-top: 30px;
}
</style>
