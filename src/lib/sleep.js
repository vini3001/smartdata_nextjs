//
//  used for debugging
//

const sleep = duration =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, duration)
  })

export default sleep
