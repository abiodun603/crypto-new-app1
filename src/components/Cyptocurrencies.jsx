import React, { useState , useEffect} from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import {Card, Row, Input, Col} from "antd"
import { useGetCryptosQuery } from '../services/cryptoApi'

const Cyptocurrencies = ({simplified}) => {
  const count = simplified ? 10 : 100;
  const {data: cryptosList, isFetching} =  useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
  const [searchTerm, setSearchTerm] = useState("");
  console.log(cryptos);

  const filteredData =  cryptosList?.data?.coins.filter((coin) => coin?.name.toLowerCase().includes(searchTerm.toLowerCase()));
  console.log(filteredData)

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins)
    setCryptos(filteredData)
  }, [cryptosList, searchTerm])

  if(isFetching) return "Loading ..."
  return (
    <>
      {
        !simplified && (
          <div className='search-crypto'>
            <Input placeholder='Search Cryptocurrency' onChange = {(e) => setSearchTerm(e.target.value)} />
          </div>
        )
      }

      <Row gutter={[32,32]} className="crypto-card-container">
        {
          cryptos?.map((currency) => (
            <Col xs = {24} sm={12} lg={6} className="crypto-card">
              <Link key={currency.name} to={`/crypto/${currency.id}`}>
                <Card title = {`${currency.rank}. ${currency.name}`}
                  extra= {<img className='crypto-image' src={currency.iconUrl} alt="coins"/>}
                  hoverable
                  >
                    <p>Price: {millify(currency.price)}</p>
                    <p>Price: {millify(currency.marketCap)}</p>
                    <p>Price: {millify(currency.change)}%</p>

                  </Card>
              </Link>
            </Col>
          ))
        }
      </Row>
    </>
  )
}

export default Cyptocurrencies