<script setup lang="ts">
import SubmitReexaminationTable from '@/components/Scoreboard/SubmitReexamination/SubmitReexaminationTable.vue';
import Header from '@/components/Header/index.vue';
</script>

<template>
  <div class="greetings">
    <Header
      title="Доставить на повторный досмотр"
      bg-color="orange"
    />
    <SubmitReexaminationTable />
  </div>
</template>

<style module lang="scss"></style>
