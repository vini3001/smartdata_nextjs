import { parse, serialize } from 'cookie'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers';
import { getAWSSecret } from '@/aws-config'

const TOKEN_NAME = 'aCSr43ask'
const MAX_AGE = 60 * 60 * 24 * 365 // 1 year
const { JWT_SECRET } = process.env //await getAWSSecret()

export async function setTokenCookie(_ctx, userId, clientId) {
  const token = await jwt.sign({ userId, clientId }, JWT_SECRET)
  const cookiesStore = await cookies()

  cookiesStore.set({
    name: TOKEN_NAME,
    value: token,
    httpOnly: true,
    path: '/',
    maxAge: MAX_AGE,
    expires: new Date(Date.now() + MAX_AGE * 1000),
    sameSite: 'lax',
  });
}

export async function removeTokenCookie(res) {
  const cookiesStore = await cookies()

  cookiesStore.set({
    name: TOKEN_NAME,
    path: '/',
    maxAge: -1
  });
}

function parseCookies(req) {
  // For API Routes we don't need to parse the cookies.
  if (req.cookies) return req.cookies

  // For pages we do need to parse the cookies.
  return parse(req.headers?.cookie || '')
}

export function getTokenCookie(req) {
  if (!req.token) return

  try {
    const { userId, clientId } = jwt.verify(req.token, JWT_SECRET)
    return { userId, clientId }
  } catch (e) {
    console.error(e)
  }
}
