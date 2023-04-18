import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
    projectId: 'rrk2vc8o',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-04-18',
    token: 'sk2F2i4QHcSEvls138mLXa6eruYWnaobJkzdOHXXGIdJH6hP30UmWFo6lrEdAd6BtuvTRUtTEGPPrQpv30MoaDP6LRXpBpDg9uC4ZgEJ28hfHCYmTvgpd3Pyb8YuYEkEDpRGGRZdMEG3vh3PqSUgiGIwboi8pvYQUMtOmlvDRHH0brUf84aa'
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source);




