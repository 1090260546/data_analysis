import React from 'react'

import { Layout } from 'antd'
const { Content, Sider } = Layout

import SlideEditor from './SlideEditor'
import Setting from './Setting'

import '../Display.less'

const DisplayEditor: React.FC = () => {
  return (
    <Layout className="display-layout">
      <Content>
        <SlideEditor />
      </Content>

      <Sider className="display-layout-sider" theme="light" width={270}>
        <Setting />
      </Sider>
    </Layout>
  )
}

export default DisplayEditor
