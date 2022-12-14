import React from 'react';
import Select from 'react-select';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import { Item } from '../../pages/Home/components/ThisDayInfo/ThisDayInfo';
import { ThisDayItem } from '../../pages/Home/components/ThisDayInfo/ThisDayItem';
import s from './Popup.module.scss';

interface Props {}

export const Popup = ({}: Props) => {
  const items = [
    {
      icon_id: 'temp',
      name: 'Temperature',
      value: '20° - feels like 17°',
    },
    {
      icon_id: 'pressure',
      name: 'pressure',
      value: '765 mm - normal',
    },
    {
      icon_id: 'precipitation',
      name: 'precipitation',
      value: 'no precipitation ',
    },
    {
      icon_id: 'wind',
      name: 'wind',
      value: '3 m/s from west - to north',
    },
  ];
  return (
    <>
      <div className={s.blur}></div>
      <div className={s.popup}>
        <div className={s.day}>
          <div className={s.day__temp}>20°</div>
          <div className={s.day__name}>fridey</div>
          <div className={s.img}>
            <GlobalSvgSelector id="sun" />
          </div>
          <div className={s.day__time}>
            time: <span>21:54</span>
          </div>
          <div className={s.day__city}>
            time: <span>Yerevan</span>
          </div>
        </div>
        <div className={s.this__day_info_items}>
          {items.map((item: Item) => (
            <ThisDayItem key={item.icon_id} item={item} />
          ))}
        </div>
        <div className={s.close}>
          <GlobalSvgSelector id="close" />
        </div>
      </div>
    </>
  );
};