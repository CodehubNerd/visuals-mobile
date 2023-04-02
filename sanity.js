import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'nk0os96y',
  dataset: 'production',
  apiVersion: '2023-04-02',
  useCdn: true,

});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);