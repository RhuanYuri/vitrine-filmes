import { defineConfig } from 'orval'

export default defineConfig({
    api: {
        input: 'http://127.0.0.1:8000/openapi.json',
        output: {
            target: './src/http/api.ts',
            client: 'fetch',
            httpClient: 'fetch',
            clean: true,
            baseUrl: 'http://127.0.0.1:8000',
            override: {
                fetch: {
                    includeHttpResponseReturnType: false,
                }
            }
        }
    }
})