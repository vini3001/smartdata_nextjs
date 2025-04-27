import { parse, serialize } from 'cookie'
import jwt from 'jsonwebtoken'

import { getAWSSecret } from '@/aws-config'

const TOKEN_NAME = 'aCSr43ask'
const MAX_AGE = 60 * 60 * 24 * 365 // 1 year
const { JWT_SECRET } = process.env //await getAWSSecret()

export function setTokenCookie(res, userId, clientId) {
  const token = jwt.sign({ userId, clientId }, JWT_SECRET)

  const cookie = serialize(TOKEN_NAME, token, {
    maxAge: MAX_AGE,
    expires: new Date(Date.now() + MAX_AGE * 1000),
    httpOnly: true,
    // secure: process.env.NODE_ENV === 'production', // doesn't work inside Docker
    path: '/',
    sameSite: 'lax',
  })

  res.setHeader('Set-Cookie', cookie)
}

export function removeTokenCookie(res) {
  const cookie = serialize(TOKEN_NAME, '', {
    maxAge: -1,
    path: '/',
  })

  res.setHeader('Set-Cookie', cookie)
}

function parseCookies(req) {
  // For API Routes we don't need to parse the cookies.
  if (req.cookies) return req.cookies

  // For pages we do need to parse the cookies.
  return parse(req.headers?.cookie || '')
}

export function getTokenCookie(req) {
  const cookies = parseCookies(req)
  const token = cookies[TOKEN_NAME]

  if (!token) return

  try {
    const { userId, clientId } = jwt.verify(token, JWT_SECRET)
    return { userId, clientId }
  } catch (e) {
    console.error(e)
  }
}
