import React, { memo, useRef, useMemo, useCallback } from 'react'
import classnames from 'classnames'
import { Menu } from 'antd'
import styles from './FullScreenPanel.less'

interface IMenuTitle {
  id: number
  name: string
}

interface IFullScreenMenuProps {
  itemId: number
  visible: boolean
  titles: IMenuTitle[]
  onChange: (itemId: number) => any
}

const FullScreenMenu: React.FC<IFullScreenMenuProps> = memo(
  ({ itemId, visible, titles, onChange }) => {
    const sideMenuClass = classnames({
      [styles.sideMenu]: true,
      [styles.hide]: !visible,
      [styles.show]: visible
    })

    const onMenuClick = useCallback(
      (e) => {
        onChange(Number(e.key))
      },
      [onChange]
    )

    const menus = useMemo(() => {
      return (
        <Menu
          theme="light"
          onClick={onMenuClick}
          selectedKeys={[itemId.toString()]}
        >
          {titles.map((t) => (
            <Menu.Item key={t.id}>
              <i style={{ marginRight: '8px' }} />
              {t.name}
            </Menu.Item>
          ))}
        </Menu>
      )
    }, [itemId, titles])

    return <div className={sideMenuClass}>{menus}</div>
  }
)

export default FullScreenMenu
