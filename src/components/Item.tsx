import React from 'react';
import { BeautySalonProps } from '../modules/shoppingcarts';

export default function Item({ title, cost, time }: BeautySalonProps) {
  return (
    <div>
      <p style={{ fontSize: '1.3rem' }}>{title}</p>
      <span>{`${cost}원`}</span>
      <span>{time}</span>
    </div>
  );
}
