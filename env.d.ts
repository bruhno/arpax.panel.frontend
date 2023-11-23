/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly API_URL: string
  readonly IS_MOCK: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
