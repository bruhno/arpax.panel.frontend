<script setup lang="ts">
import ReturnReexaminationTable from '@/components/Scoreboard/ReturnReexamination/ReturnReexaminationTable.vue';
import Header from '@/components/Header/index.vue';
</script>

<template>
  <div class="greetings">
    <Header
      title="Вернуть с повторного досмотра"
      bg-color="red"
    />
    <ReturnReexaminationTable />
  </div>
</template>

<style module lang="scss"></style>
