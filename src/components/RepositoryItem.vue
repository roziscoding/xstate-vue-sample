<script lang="ts" setup>
import { Repository } from "../github";

defineProps<{ repository: Repository }>();
</script>

<template>
  <div class="repository-item">
    <div class="left">
      <div class="header">
        <a :href="repository.owner?.html_url" class="owner">{{ repository.owner?.login }}</a>
        /
        <a :href="repository.html_url" class="name">{{ repository.name }}</a>
      </div>
      <div class="content">
        <span class="description">{{ repository.description }}</span>
      </div>
    </div>
    <div class="right">
      <a :href="repository.html_url" target="_blank">
        <div class="button">Acessar Repositório</div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.repository-item {
  padding: 20px;
  background-color: #d0d0d0;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.left {
  display: flex;
  flex-direction: column;
}
</style>
