import React from 'react'
import {Line} from "react-chartjs-2"
import {Col, Row, Typography} from "antd";

const {Title} = Typography

const LineChart = ({coinHistory, currentPrice, coinName}) => {
  const coinPrice= [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i+=1){
    coinPrice.push(coinHistory.data.history[i].price);
    coinTimestamp.push(coinHistory.data.history[i].timestamp);
  }

  console.log(coinPrice);
  console.log(coinTimestamp);

  const data = {
    labels: ["1", "2", "3", "4"],
    datasets : [
      {
        labels: 'Price in USD',
        data: ["12", "24", "32", "41"],
        fill: false,
        backgroundColor: "red",
        borderColor: "red"
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [{
          ticks: {
            beginAtZero: true,
          },
          gridLines: {
            color: 'white'
          }
        }
      ]
    }
  }
  
  return (
    <>
      <Row className='chart-header'>
        <Title level={2} className="chart-title">
          {coinName}
        </Title>
        <Col className='price-cointainer'>
          <Title level={5} className="price-change">{coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price">
            Current {coinName} Price: ${currentPrice}
          </Title>
        </Col>
      </Row>
      {/* <Line data={data} options={options} /> */}
    </>
  )
}

export default LineChart