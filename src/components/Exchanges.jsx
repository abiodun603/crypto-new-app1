import React from 'react'
import millify from 'millify'
import { Collapse, Row, Col, Typography, Avatar } from 'antd'
import HTMLReactParser from 'html-react-parser'
import { useGetCryptoExchangesQuery } from '../services/cryptoApi'

const Exchanges = () => {
  const [data, isFetching] =useGetCryptoExchangesQuery();
  const exchangesList = data;

  if(isFetching) return "Loading ... "
  console.log(exchangesList);

  return (
    <div>Exchanges</div>
  )
}

export default Exchanges