export default {
  apiUrl: import.meta.env.VITE_API_URL,
  apiKey: import.meta.env.VITE_API_KEY,

  isMock: Boolean(+import.meta.env.VITE_IS_MOCK),
};
