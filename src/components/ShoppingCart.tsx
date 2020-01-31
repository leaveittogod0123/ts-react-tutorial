import React, { Component } from 'react';
import { Icon, Button } from 'antd';
import styled from 'styled-components';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Header = styled.div`
  text-align: center;
`;

const Buttons = styled.div`
  display: flex;
`;

const CartItems = styled.div`
  height: 350px;
  background: #2980b9;
`;

export default class ShoppingCart extends Component {
  render() {
    const parsedDate: string = new Date().toLocaleString();
    let totalCost: string = '0원';
    return (
      <Router>
        <div>
          <Header>
            <div
              style={{
                display: 'inline-block',
                position: 'absolute',
                left: '10px',
                top: '22px',
              }}
            >
              <Icon type="close" />
            </div>
            <div>
              <p>노요셉</p>
              <p>{parsedDate}</p>
            </div>
          </Header>
          <Buttons>
            <Button style={{ flex: '1' }}>
              <Link to="/book">시술 </Link>
            </Button>

            <Button type="danger" style={{ flex: '1' }}>
              할인
            </Button>
          </Buttons>
          <CartItems></CartItems>
          <div style={{ height: '30px', fontSize: '1.3rem' }}>
            <span>합계</span>
            <span style={{ position: 'absolute', right: '10px' }}>
              {totalCost}
            </span>
          </div>
          <Button type="primary" block>
            다음
          </Button>
        </div>
      </Router>
    );
  }
}
