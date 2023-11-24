<script setup lang="ts">
import { PageHeader } from '@/components/PageHeader';
import { ScoreboardConfigurationList } from './ScoreboardConfigurationList';
</script>

<template>
  <div>
    <PageHeader title="Табло информирования" />

    <ScoreboardConfigurationList />
  </div>
</template>

<style module lang="scss">
@import '@/assets/styles/styleKit';
</style>
