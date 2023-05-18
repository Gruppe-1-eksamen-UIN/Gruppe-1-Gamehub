import {createClient} from '@sanity/client';

export default function Client() {

const client = createClient({
  projectId: 'sqhrw5zf',
  dataset: 'production',
  useCdn: true, 
  apiVersion: "2021-10-21"
});
}
