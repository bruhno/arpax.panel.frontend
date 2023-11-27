<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  value: {
    type: String,
    required: true,
  },
});

const segments = computed(() => props.value.replace(/(\d+)(\d{4})$/, '$1|$2').split('|', 2));
</script>

<template>
  <p :class="$style.baggageCell">
    {{ segments[0]
    }}<span :class="$style.baggageCellMarked">
      {{ segments[1] }}
    </span>
  </p>
</template>

<style module lang="scss">
@import '@/assets/styles/styleKit';

.baggageCell {
  font-size: 14px !important;

  &Marked {
    @include text($size: 18px);
  }
}
</style>
