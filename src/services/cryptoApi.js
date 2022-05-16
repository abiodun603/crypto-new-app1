import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders = {
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
  'X-RapidAPI-Key': '78b844e28cmsh867c5cd252f7713p110ecbjsn1fbb8b5690be'
}

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({
  url,
  headers: cryptoApiHeaders
})

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`)
    })
  })
});

export const {
  useGetCryptosQuery, 
} = cryptoApi;
