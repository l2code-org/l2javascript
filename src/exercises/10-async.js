import R from 'ramda'

/*
 *
 * TODO: describe synchronous & asynchronous
 *
 */

/**
 * wait for `ms` milliseconds asynchronously
 */
async function wait (ms) {
  return new Promise(resolve => setTimeout(() => resolve(), ms))
}

/**
 * Perform the given operation `op`
 * If it fails, wait for {time}ms and try again
 * Retry a maximum of {retries} times
 */
async function retry (time, retries, op) {
  for (let _ of R.range(0, retries)) {
    try {
      await op()
      break
    } catch (err) {
      await wait(time)
    }
  }
}

export {
  retry,
}
