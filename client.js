import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'nk0os96y',
  dataset: 'production',
  apiVersion: '2023-04-02',
  useCdn: true,
  token:'skm22gnU7kHZ9VVSxTu3QFRQuxa9HRRxyVoaulB7Twpz3JgZPv59IMdzxwkJcVHL3LfNXLQKTVo6u7PFTJGLP2TVQCSmCIl7i1esCByDDDMfP1teMHOY40bYY0EjZr0SBo0kwCeTgirYYH0YooqUuvePNOo0fM02Qv4RfNSQ9uuWLKIYjTXR',

});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);