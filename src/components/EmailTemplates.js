import * as React from 'react'

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from '@react-email/components'

const baseUrl =
  (process.env.RESET_BASE_URL !== '' && process.env.RESET_BASE_URL) || // when self hosting
  (process.env.NODE_ENV === 'development' && 'http://localhost:3000') ||
  (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
  ''

console.log('Url base', baseUrl)

export const EmailReset = ({ userFirstname = 'Usuario', link = '/' }) => (
  <Html>
    <Head />
    <Preview>Troca de senha do SmartData</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          width='180px'
          style={img}
          src='https://utfs.io/f/e634f939-befa-441c-8705-890e887a93e7-1zbfv.smartdata.png' // uploadThing
          alt='SmartData'
        />
        <Section>
          <Heading as='h3' style={{ paddingTop: '12px' }}>
            Ola {userFirstname},
          </Heading>
          <Text style={text}>
            Alguem recentemente solicitou uma troca de senha para sua conta do SmartData. Se foi voce, voce
            pode definir uma nova senha aqui:
          </Text>

          <Button style={button} href={baseUrl + link}>
            Definir nova senha
          </Button>

          <Text style={text}>
            Se voce nao deseja trocar sua senha ou nao solicitou isso, apenas ignore e exclua esta mensagem.
          </Text>
          <Text style={text}>
            Para manter sua conta segura, por favor, nao encaminhe este e-mail para ninguem e avise o
            administrador do sistema.
          </Text>

          <Text style={{ ...text, paddingTop: '12px' }}>Tenha um otimo dia!</Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

export const EmailWelcome = ({ userFirstname = 'Usuario', link = '/' }) => (
  <Html>
    <Head />
    <Preview>Bem Vindo ao SmartData</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          width='140px'
          style={img}
          src='https://utfs.io/f/e634f939-befa-441c-8705-890e887a93e7-1zbfv.smartdata.png' // uploadThing
          alt='SmartData'
        />
        <Section>
          <Heading as='h3' style={{ mt: '8px' }}>
            Ola {userFirstname},
          </Heading>
          <Text style={text}>
            Voce acaba de ganhar um usuario no sistema SmartData. Seu login é este endereco de email, e a
            senha voce deve definir no botao abaixo, por favor.
          </Text>

          <Button style={button} href={baseUrl + link}>
            Definir nova senha
          </Button>

          <Text style={text}>
            Para manter sua conta segura, por favor, nao encaminhe este e-mail para ninguem e em caso de
            duvidas, entre em contato com o administrador do sistema.
          </Text>

          <Text style={{ ...text, mt: '8px' }}>Tenha um otimo dia!</Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

const main = {
  backgroundColor: '#f6f9fc',
  padding: '10px 0',
}

const container = {
  backgroundColor: '#ffffff',
  border: '1px solid #f0f0f0',
  padding: '45px',
}

const img = {
  margin: '0 auto',
}

const text = {
  fontSize: '16px',
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: '300',
  color: '#404040',
  lineHeight: '26px',
}

const button = {
  backgroundColor: '#4caf50',
  borderRadius: '20px',
  color: '#fff',
  fontFamily: "'Open Sans', 'Helvetica Neue', Arial",
  fontSize: '15px',
  textDecoration: 'none',
  textAlign: 'center',
  display: 'block',
  width: '210px',
  padding: '14px 7px',
}

// const anchor = {
//   textDecoration: 'underline',
// }
