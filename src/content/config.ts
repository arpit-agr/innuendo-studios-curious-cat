import {defineCollection, z} from 'astro:content';
import {file} from 'astro/loaders';

// Define the media schema
const mediaSchema = z
	.object({
		img: z.string().url(),
		w: z.number().optional(),
		h: z.number().optional()
	})
	.nullable(); // Allow media to be null

const answersCollection = defineCollection({
	loader: file('src/data/answers.json'),
	schema: z.object({
		id: z.coerce.string(),
		timestamp: z.number().transform(val => new Date(val * 1000)),
		comment: z.string(),
		reply: z.string(),
		media: mediaSchema,
		in_response_to: z.lazy(() =>
			z
				.object({
					id: z.coerce.string(),
					timestamp: z.number().transform(val => new Date(val * 1000)),
					comment: z.string(),
					reply: z.string(),
					media: mediaSchema,
					in_response_to: z.any().nullable()
				})
				.nullable()
		)
	})
});

export const collections = {
	answers: answersCollection
};
