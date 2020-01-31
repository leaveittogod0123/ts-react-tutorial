import React, { Component } from 'react';
import { Icon, Button } from 'antd';
import styled from 'styled-components';

const Header = styled.div`
  text-align: center;
`;

const Content = styled.div``;

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
          <span
            style={{
              display: 'inline-block',
              position: 'absolute',
              left: '10px',
            }}
          >
            커트
          </span>
          <span
            style={{
              display: 'inline-block',
              position: 'absolute',
              right: '10px',
            }}
          >
            바버,헤어
          </span>
        </Content>
      </div>
    );
  }
}
