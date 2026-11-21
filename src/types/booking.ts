
export type BookingRequest = {
  tripName: string
  fullName: string
  email: string
  country: string
  phone: string
  travelDate?: string
  adults: string
  children?: string
  subject: string
  message: string
}

export type BookingResponse = {
  message: string
}
