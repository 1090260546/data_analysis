import React from 'react'
import { IStar, IEvent, IStarUserList } from './types'
const styles = require('./Star.less')
import StarUser from './StarUser'

function stopPPG(e: IEvent) {
  e.stopPropagation()
}

const Star: React.FC<IStar> & {
  StarUser: React.FC<IStarUserList>
} = ({ proId, isStar, unStar, starNum, userList }) => {
  return (
    <div className={styles.starWrapper} onClick={stopPPG}>
      <span onClick={stopPPG}>
        <span className={styles.leftWrapper} onClick={unStar(proId)}>
          <span
            className={`iconfont ${isStar ? 'icon-star1' : 'icon-star'}`}
            style={{ fontSize: '12px' }}
          />
          &nbsp;
          <span>{isStar ? 'Unstar' : 'star'}</span>
        </span>
      </span>
      <span>
        <span className={styles.starCount} onClick={userList(proId)}>
          {starNum}
        </span>
      </span>
    </div>
  )
}

Star.StarUser = StarUser
export default Star
