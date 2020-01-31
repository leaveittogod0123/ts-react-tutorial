import React, { Component } from 'react';
import { Icon, Button } from 'antd';
import styled from 'styled-components';

const Header = styled.div`
  text-align: center;
`;

const Content = styled.div`
  display: flex;
`;

export default class BookBeautySalon extends Component {
  render() {
    return (
      <div style={{ height: '70px' }}>
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
            <p style={{ lineHeight: '70px', fontSize: '1.3rem' }}>시술메뉴</p>
          </div>
          <div
            style={{
              display: 'inline-block',
              position: 'absolute',
              right: '10px',
              top: '22px',
            }}
          >
            <Icon type="plus" />
          </div>
        </Header>
        <Content>
          <span style={{ justifyContent: 'flex-start' }}>커트</span>
          <span style={{ justifyContent: 'flex-end' }}>바버,헤어</span>
        </Content>
      </div>
    );
  }
}
