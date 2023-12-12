import { computed } from 'vue';
import { compareAsc, parseISO } from 'date-fns';

function useIsExpired(date: string, estimateTime: string) {
  return computed(() => {
    if (!date || !estimateTime) {
      return false;
    }

    const compareResult = compareAsc(parseISO(date), parseISO(estimateTime));

    return compareResult === 1;
  });
}

export default useIsExpired;
