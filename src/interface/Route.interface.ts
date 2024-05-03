import { ComponentType } from'react'

export interface RouteInterface {
  path: string
  component: ComponentType
  name: string
}