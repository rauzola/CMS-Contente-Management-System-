import { cacheExchange, createClient, dedupExchange, fetchExchange, ssrExchange,  } from 'urql';

const isServerSide = typeof window === 'undefined';
const ssrCache = ssrExchange({ isClient: !isServerSide });

const client = createClient({
    url: 'https://api-sa-east-1.hygraph.com/v2/clop8fuksjief01t7726u3pe5/master',
    exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
})

export { client, ssrCache }