export type Trade = {
  Type: string
  Quantity: number
  Contract: string
  Currency: string
  'Wallet Balance': number
  'Filled Price': number
  'Fee Paid': number
  Direction?: string
}

export interface AggregatedTrade extends Trade {
  id: number
}
