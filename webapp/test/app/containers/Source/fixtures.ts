import { ISourceBase } from 'app/containers/Source/types'

export const mockProjectId: number = 1

export const mockSource: ISourceBase = {
  id: 1,
  name: 'sample source',
  description: 'this is a sample source',
  type: 'jdbc',
  projectId: mockProjectId
}
