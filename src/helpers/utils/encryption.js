import CryptoJS from 'crypto-js'

const ENCRYPTION_KEY = process.env.NEXT_PUBLIC_ENCRYPTION_KEY

export const encrypt = text => CryptoJS.AES.encrypt(text, ENCRYPTION_KEY).toString()

export const decrypt = cipherText => {
  const bytes = CryptoJS.AES.decrypt(cipherText, ENCRYPTION_KEY)
  return bytes.toString(CryptoJS.enc.Utf8)
}
