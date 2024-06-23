export function log(...params: any) {
  return iLog(...params)

  // console.log(...params)
}
export function warn(...params: any) {
  return iWarn(...params, new Error('warn', {
    cause: '123',
  }))
}
export function error(...params: any) {
  return iError(...params, new Error('error', {
    cause: '123',
  }))
}

function iLog(...params: any) {
  return new Promise((resolve) => {
  // eslint-disable-next-line no-console
    console.trace(...params)
    resolve(true)
  })
}
function iWarn(...params: any) {
  return new Promise((resolve) => {
    console.warn(...params)
    resolve(true)
  })
}
function iError(...params: any) {
  return new Promise((resolve) => {
    console.error(...params)
    resolve(true)
  })
}
