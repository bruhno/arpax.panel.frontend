<script setup lang="ts">
import InviteToInspectionAreaTable from '@/components/Scoreboard/InviteToInspectionArea/InviteToInspectionAreaTable.vue';
import { PageHeader } from '@/components/PageHeader';
</script>

<template>
  <div class="greetings">
    <PageHeader
      title="Приглашаем пройти в зону досмотра пассажиров"
      with-clock
    />
    <InviteToInspectionAreaTable />
  </div>
</template>

<style module lang="scss"></style>
