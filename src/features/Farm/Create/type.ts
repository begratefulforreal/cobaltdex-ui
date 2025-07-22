import { ApiV3Token } from 'cobaltdex-sdk'

export type NewRewardInfo = {
  id: string
  token?: ApiV3Token
  amount?: string
  farmStart?: number
  farmEnd?: number
  perWeek?: string
  error?: string
  isValid: boolean
}
