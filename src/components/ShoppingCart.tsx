import React, { Component } from 'react';
import { Icon } from 'antd';
import styled from 'styled-components';

const Header = styled.div`
  text-align: center;
`;

const Buttons = styled.div`
  diplay: flex;
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
        <Buttons></Buttons>
      </div>
    );
  }
}
