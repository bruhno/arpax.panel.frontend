<script setup lang="ts">
import { ref } from 'vue';
import { belts } from '@/configs/belts';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
  withSelectBelt: Boolean,
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: Array<String>,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
});

const selectedBelt = ref(belts[0].value);

const openScoreboard = () => {
  router.push({
    path: props.path,
    query: {
      belt: props.withSelectBelt ? selectedBelt.value : undefined,
    },
  });
};
</script>

<template>
  <v-list-item :class="$style.listItem">
    <template #append>
      <v-list-item-action
        :end="true"
        :class="$style.listItemActions"
      >
        <v-select
          v-if="withSelectBelt"
          v-model="selectedBelt"
          :items="belts"
          variant="outlined"
          hide-details
          density="comfortable"
        >
          <template #item="{ item, props: itemProps }">
            <v-list-item
              v-bind="itemProps"
              :active="item.props.value === selectedBelt"
              :active-class="$style.listItemActive"
            >
              {{ item.props.label }}
            </v-list-item>
          </template>
        </v-select>

        <v-btn @click="openScoreboard">
          Запуск
        </v-btn>
      </v-list-item-action>
    </template>
    <v-list-item-title>
      <span :class="$style.listItemTitle">
        {{ title }}
      </span>
    </v-list-item-title>
    <v-list-item-subtitle>
      <template
        v-for="subTitleLine of subTitle"
        :key="subTitleLine"
      >
        {{ subTitleLine }} <br />
      </template>
    </v-list-item-subtitle>
  </v-list-item>
</template>

<style module lang="scss">
@import '@/assets/styles/styleKit';

.listItem {
  background: $background-info !important;
  padding: 24px 48px !important;

  &Actions {
    display: flex;
    flex-direction: row;
    gap: 54px;
  }

  &Title {
    @include text($size: 24px, $weight: 800);
  }

  &Active {
    background: $control-accent-color !important;
    border-radius: 8px !important;
  }

  &:not(:last-child) {
    margin-bottom: 2px;
  }
}
</style>
