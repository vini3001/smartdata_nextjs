import { Resend } from 'resend'

console.log('api resend', process.env.RESEND_API_KEY)

export const resend = new Resend(process.env.RESEND_API_KEY)
