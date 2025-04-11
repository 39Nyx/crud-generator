import { createContext } from 'react'

export const crudConfigContext = createContext({
  state: {
    columns: []
  }
})
