/// <reference types="vite/client" />
declare namespace NodeJS {
  export interface ProcessEnv {
    readonly API_URL: string
    readonly IS_MOCK: boolean
    readonly MOCK_PATH: string
  }
}
