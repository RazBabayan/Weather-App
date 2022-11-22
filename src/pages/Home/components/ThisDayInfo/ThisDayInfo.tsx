import React from 'react';
import Select from 'react-select';
import s from './ThisDayInfo.module.scss';
import cloud from '../../../../assets/images/cloud.png';
import { ThisDayItem } from './ThisDayItem';

interface Props {}

export interface Item {
  icon_id: string;
  name: string;
  value: string;
}

export const ThisDayInfo = (props: Props) => {
  const items = [
    {
      icon_id: 'temp',
      name: 'Temperature',
      value: '20° - just like 17°',
    },
    {
      icon_id: 'pressure',
      name: 'pressure',
      value: '765 mm - normal',
    },
    {
      icon_id: 'precipitation',
      name: 'precipitation',
      value: 'no precipitation',
    },
    {
      icon_id: 'wind',
      name: 'wind',
      value: '3 m/c from west - to north',
    },
  ];
  return (
    <div className={s.this__day_info}>
      <div className={s.this__day_info_items}>
        {items.map((item: Item) => (
          <ThisDayItem key={item.icon_id} item={item} />
        ))}
      </div>
      <img className={s.cloud__img} src={cloud} alt="облако" />
    </div>
  );
};