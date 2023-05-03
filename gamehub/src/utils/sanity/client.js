import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: "sqhrw5zf",
    dataset: "my-games",
    useCdn: true,
    apiVersion: "2021-10-21"
})

export const writeClient = createClient({
    token: "skEsidGaeHVqzFH66RdZMk257gjVKLwATD25i984iL2JdsAkGHFAp7jg8yUIRM1BRK0yEjCjubSBGc5FHvqVqxMah0mORXeEpuqIETwRxWSQzdaB1PyhiPHxcyqwxGHisWBlRRrthu5WwCT9Ve7vd6XMV9jLuBZVC4KYQaUZuBUzFzck7r4t",
    projectId: "sqhrw5zf",
    dataset: "my-games"
})