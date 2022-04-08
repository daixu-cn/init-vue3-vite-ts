import Http from "./http"

const http = new Http({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 1000 * 30
})

export default http
