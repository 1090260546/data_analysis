import React from 'react'
import { Modal } from 'antd'
const styles = require('./Star.less')
import { IStarUserList } from './types'
import Avatar from 'components/Avatar'
import { IStarUser } from 'containers/Projects/types'

const StarUsr: React.FC<IStarUserList> = ({
  visible,
  starUser,
  closeUserListModal
}) => {
  return (
    <Modal title={null} visible={visible} footer={null} onCancel={closeUserListModal}>
      <div className={styles.formWrapper}>
        <div className={styles.header}>
          <div className={styles.title}>点赞用户</div>
        </div>
        <div className={styles.body}>
          {starUser
            ? starUser.map((user: IStarUser, index) => (
                <div className={styles.avatar} key={`star${index}list`}>
                  <Avatar path={user.avatar} size="small" enlarge={true} />
                  <p className={styles.title}>{user.username}</p>
                </div>
              ))
            : ''}
        </div>
      </div>
    </Modal>
  )
}

export default StarUsr



