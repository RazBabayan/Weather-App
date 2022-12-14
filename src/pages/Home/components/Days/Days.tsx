import React from 'react'
import {Card} from './Card'
import s from './Days.module.scss';
import { Tabs } from './Tabs';

interface Props {}

export interface Day {
    day: string;
    day_info: string;
    icon_id: string;
    temp_day: string;
    temp_night: string;
    info: string;
  }

export const Days = (props: Props) => {
    const days:Day[] =[ {
        day: 'today',
        day_info: '11 nov ',
        icon_id: 'sun',
        temp_day: '+15',
        temp_night: '+1',
        info: 'cloudy',
      },
      {
        day: 'tommorow',
        day_info: '11 nov',
        icon_id: 'small_rain_sun',
        temp_day: '+13',
        temp_night: '0',
        info: ' small rain',
      },
      {
        day: 'wd',
        day_info: '12 nov',
        icon_id: 'small_rain',
        temp_day: '+18',
        temp_night: '+15',
        info: 'sunny',
      },
      {
        day: 'td',
        day_info: '28 авг',
        icon_id: 'mainly_cloudy',
        temp_day: '+18',
        temp_night: '+15',
        info: 'Облачно',
      },
      {
        day: 'fr',
        day_info: '12 nov',
        icon_id: 'small_rain',
        temp_day: '+18',
        temp_night: '+15',
        info: 'sunny',
      },
      {
        day: 'st',
        day_info: '12 nov',
        icon_id: 'small_rain',
        temp_day: '+18',
        temp_night: '+15',
        info: 'sunny',
      },
      {
        day: 'sd',
        day_info: '12 nov',
        icon_id: 'small_rain',
        temp_day: '+18',
        temp_night: '+15',
        info: 'sunny',
      },]
  return (
    <>
    <Tabs />
    <div className={s.days}>
        {days.map((day:Day)=>(
            <Card day={day}/>
        ))}
     </div>
     </>
  )
}

