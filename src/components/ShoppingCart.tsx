import React, { Component } from 'react';
import { Icon, Button } from 'antd';
import styled from 'styled-components';

const Header = styled.div`
  text-align: center;
`;

const Buttons = styled.div`
  display: flex;
`;

export default class ShoppingCart extends Component {
  render() {
    const parsedDate: string = new Date().toLocaleString();
    return (
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
          <Button style={{ flex: '1' }}>시술</Button>
          <Button type="danger" style={{ flex: '1' }}>
            할인
          </Button>
        </Buttons>
      </div>
    );
  }
}
