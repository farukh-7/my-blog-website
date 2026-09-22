import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'n5qzz1t3', // Your unique Sanity ID
  dataset: 'production',
  apiVersion: '2024-01-01', // use a recent date
  useCdn: true, // Speeds up loading for end users by caching
});
