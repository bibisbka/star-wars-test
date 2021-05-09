interface StarshipsType<T> {
  count?: number
  next: string | null
  previous: string | null
  results: T[]
}

export type StarshipsResponseType = StarshipsType<ResultObjType>
export type StarshipsInitialStateType = StarshipsType<InitialStateResultType>

export interface InitialStateType extends StarshipsType<InitialStateResultType> {
  page: number
  loading: boolean
}

export type InitialStateResultType = {
  name: string,
  model: string,
  starship_class: string,
  hyperdrive_rating: string,
  passengers: string,
  manufacturer: string
}

export type ResultObjType = {
  name: string
  model: string
  manufacturer: string
  cost_in_credits: string
  length: string
  max_atmosphering_speed: string
  crew: string
  passengers: string
  cargo_capacity: string
  consumables: string
  hyperdrive_rating: string
  MGLT: string
  starship_class: string
  pilots: string[]
  films: string[]
  created: string
  edited: string
  url: string
}
