import React, { useCallback, useMemo } from 'react'
import { Tag } from 'antd'
import Toolbar from './Toolbar'
import { IProjectItem, ItemToolbarProps } from './types'
const styles = require('./item.less')

const ProjectItem: React.FC<IProjectItem> & {
  Toolbar: React.FC<ItemToolbarProps>
} = ({ tags, backgroundImg, title, description, onClick, style, children }) => {
  const handleClick: React.MouseEventHandler<HTMLDivElement> = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (onClick) {
        onClick(e)
      }
    },
    [onClick]
  )

  const getBackgroundImg: React.CSSProperties = useMemo(
    () => ({
      backgroundImage: backgroundImg
    }),
    [backgroundImg]
  )

  const getTags: React.ReactNode[] = useMemo(
    () =>
      tags && tags.length > 0
        ? tags.map((tag) => (
          <Tag color={tag.color} key={`${tag.text}tagkey`}>
            {tag.text}
          </Tag>
        ))
        : [],
    [tags]
  )

  const body: React.ReactNode = useMemo(
    () =>
      children ? <div className={styles.itemToolbar}>{children}</div> : [],
    [children]
  )

  return (
    <div className={styles.unit} style={style} onClick={handleClick}>
      <div className={styles.thumbnail} style={getBackgroundImg}>
        <header>
          <div className={styles.tags}>{getTags}</div>
          <h3 className={styles.title}>{title || ''}</h3>
          <p className={styles.descs}>{description || ''}</p>
        </header>
      </div>
      {body}
    </div>
  )
}

ProjectItem.Toolbar = Toolbar

export default ProjectItem
