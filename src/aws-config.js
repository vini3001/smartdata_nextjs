import { SecretsManagerClient, GetSecretValueCommand } from '@aws-sdk/client-secrets-manager'

const credentials = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-east-2',
}

const client = new SecretsManagerClient(credentials)

export async function getAWSSecret() {
  try {
    const data = await client.send(new GetSecretValueCommand({ SecretId: 'smart-data' }))
    const all = JSON.parse(data.SecretString)

    const escaped = encodeURIComponent(all.db_password).replace(
      /[!'()*]/g,
      c => `%${c.charCodeAt(0).toString(16).toUpperCase()}`
    )

    const dbUrl = `postgres://${all.db_user}:${escaped}@${all.db_host}:${all.db_port}/${all.db_database_prd}`

    return { DATABASE_URL: dbUrl, JWT_SECRET: all.jwt_secret }
  } catch (error) {
    console.log('🚀 ~ AWS Secrets Manager Error:', error)
  }
}
