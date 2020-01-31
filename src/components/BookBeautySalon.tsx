import React, { Component } from 'react';
import { Icon } from 'antd';
import styled from 'styled-components';
import Item from './Item';
import { Link, Switch, Route, withRouter } from 'react-router-dom';
import { BeautySalonProps } from '../utils/d';
import ShoppingCart from './ShoppingCart';

const Header = styled.div`
  text-align: center;
`;

const Haircut = styled.div`
  height: 30px;
`;

const SalonDatas: BeautySalonProps[] = [
  { title: '여성컷', cost: 30000, time: '30분' },
  { title: '남성컷', cost: 25000, time: '1시간' },
  { title: '학생컷', cost: 15000, time: '1시간' },
];

class BookBeautySalon extends Component {
  render() {
    const salonList: JSX.Element[] = SalonDatas.map(salon => (
      <Item
        key={salon.title}
        title={salon.title}
        time={salon.time}
        cost={salon.cost}
      />
    ));
    console.log(salonList);
    return (
      <>
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
              <Link to="/">
                <Icon type="close" />
              </Link>
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
          <Haircut>
            <div className="haircut">
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
            </div>
          </Haircut>
          <div>{salonList}</div>
        </div>
        <Switch>
          <Route exact path="/" component={ShoppingCart} />
        </Switch>
      </>
    );
  }
}

export default withRouter(BookBeautySalon);
