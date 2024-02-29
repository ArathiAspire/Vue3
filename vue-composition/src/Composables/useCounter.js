import { ref } from "vue";
export default function useCounter(initialValue = 0, stepSize = 1) {
  const count = ref(initialValue);
  function incrementCount() {
    count.value += stepSize;
  }
  return {
    count,
    incrementCount,
  };
}
