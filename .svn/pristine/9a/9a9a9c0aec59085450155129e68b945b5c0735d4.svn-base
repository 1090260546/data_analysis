import React, { FC, memo } from 'react'
import { Checkbox, Input } from 'antd'
import { WrappedFormUtils } from 'antd/lib/form/Form'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'
import { IFlatRelatedItem } from './types'
import utilStyles from 'assets/less/util.less'
import styles from '../../Control.less'

interface IGlobalControlRelatedItemFormProps {
  form: WrappedFormUtils
  relatedItems: IFlatRelatedItem[]
  onItemCheck: (id: number) => () => void
  onCheckAll: (e: CheckboxChangeEvent) => void
}

const GlobalControlRelatedItemForm: FC<IGlobalControlRelatedItemFormProps> = ({
  form,
  relatedItems,
  onItemCheck,
  onCheckAll
}) => {
  const { getFieldDecorator } = form
  const checkAll = relatedItems.every((item) => item.checked)

  return (
    <div className={styles.itemContainer}>
      <div className={styles.title}>
        <h2>关联图表</h2>
        <Checkbox
          className={`${styles.checkAll} ${styles.action}`}
          checked={checkAll}
          onChange={onCheckAll}
        >
          全选
        </Checkbox>
      </div>
      <ul>
        {relatedItems.map(({ id, name }) => (
          <li key={id}>
            {getFieldDecorator(
              `relatedItems[${id}].viewId`,
              {}
            )(<Input className={utilStyles.hide} />)}
            {getFieldDecorator(`relatedItems[${id}].checked`, {
              valuePropName: 'checked'
            })(
              <Checkbox className={styles.checkbox} onChange={onItemCheck(id)}>
                {name}
              </Checkbox>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default memo(GlobalControlRelatedItemForm)
