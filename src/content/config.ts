import { defineCollection,  z} from "astro:content";

const personal_info = defineCollection({
    schema: z.object({
        title: z.string(),
        started: z.string(),
        finished: z.string(),
    })
})

export const collections = { personal_info }