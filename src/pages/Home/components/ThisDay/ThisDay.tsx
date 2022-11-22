import React from 'react'
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';

import s from './ThisDay.module.scss';

interface Props {}

export const ThisDay = (props: Props) => {
  return (
    <header className={s.this__day}>
        <div className={s.top__block}>
        <div className={s.top__block_wrapper}> 
          <div className={s.this__temp}>20c</div>
          <div className={s.this__day_name}>today</div>
          </div>
          <GlobalSvgSelector id='sun' />
        </div>
        <div className={s.bottom__block}>
        <div className={s.this__time}> 
          time: <span>21:58</span>
        </div>

        <div className={s.this__city}> 
          time: <span>Yerevan</span>
        </div>
        </div>
     </header>
  )
}

