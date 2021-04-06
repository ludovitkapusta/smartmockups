import { Category } from '../store/categories/types'
import { Mockup } from '../store/mockups/types'

type FetchTypes = Mockup[] | Category[]

export const fetchJsonData = (endpoint: string): Promise<FetchTypes> =>
  fetch(
    `https://5lt31zvq40.execute-api.us-east-1.amazonaws.com/dev/${endpoint}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      }
    }
  )
    .then((res) => {
      if (res.status !== 200) throw res
      return res.json()
    })
    .catch((err) => ({ err }))

export const fetchMockups = (): Promise<FetchTypes> => fetchJsonData('mockups')
export const fetchCategories = (): Promise<FetchTypes> =>
  fetchJsonData('categories')
