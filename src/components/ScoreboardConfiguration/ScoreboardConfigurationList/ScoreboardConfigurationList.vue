<script setup lang="ts">
import ScoreboardConfigurationListItem from './ScoreboardConfigurationListItem.vue';
</script>

<template>
  <div>
    <v-list
      :lines="false"
      density="compact"
    >
      <ScoreboardConfigurationListItem
        title="Табло №1"
        :sub-title="['Грязный багаж', 'Необходимо выбрать номер багажной ленты']"
        path="/submit-re-examination"
        with-select-belt
      />
      <ScoreboardConfigurationListItem
        title="Табло №2"
        :sub-title="['Досмотренный багаж', 'Необходимо выбрать номер багажной ленты']"
        path="/return-reexamination"
        with-select-belt
      />
      <ScoreboardConfigurationListItem
        title="Табло №3"
        :sub-title="['Приглашение для пассажиров']"
        path="/invite-to-inspection-area"
      />
      <ScoreboardConfigurationListItem
        title="Табло №4"
        :sub-title="['Грязный багаж ФТС']"
        path="/deliver-re-examination-fts"
      />
    </v-list>
  </div>
</template>

<style module lang="scss">
@import '@/assets/styles/styleKit';
</style>
