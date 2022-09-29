import { deserialize } from './Serializer'
import { ElementTypes } from './Element'

export const parseHtml = (html: string) => {
  const parsed = new DOMParser().parseFromString(html, 'text/html')
  const fragment = deserialize(parsed.body)
  return fragment
}

export const getDefaultContent = (text?: string) => [
  {
    type: ElementTypes.Paragraph,
    children: [{ text: text || '' }]
  }
]
