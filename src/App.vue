<script setup lang="ts">
import SearchBar from "./components/SearchBar.vue";
</script>

<template>
  <div class="main fillparent center">
    <div class="content elevated">
      <SearchBar />
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
