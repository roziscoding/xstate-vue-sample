<script lang="ts" setup>
import { Repository } from "../github";
import RepositoryItem from "./RepositoryItem.vue";

defineProps<{ results: Repository[] }>();
</script>

<template>
  <div class="results-list fillwidth">
    <div class="empty-text" v-if="!results.length">Nenhum resultado encotrado</div>
    <template v-if="results.length">
      <RepositoryItem :repository="repository" v-for="repository of results" />
    </template>
  </div>
</template>
