import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'sqhrw5zf',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-10-21'
});

export default client;
