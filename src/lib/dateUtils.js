const toBrasilISO = date =>
  `${new Date(date)
    .toLocaleString('sv', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      fractionalSecondDigits: 3,
    })
    .replace(',', '.')
    .replace(' ', 'T')}Z`

const toBrasilString = date => {
  const [d, t] = date.split('T')
  return `${d.split('-').reverse().join('/')} ${t.substring(0, 5)}`
}

export { toBrasilISO, toBrasilString }
