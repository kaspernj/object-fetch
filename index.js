function digger(target, keys, {callFunctions = false, throwError = true}) {
  let digged = target
  const currentPath = []

  for (const key of keys) {
    currentPath.push(key)

    if (!(key in digged)) {
      if (throwError) {
        throw new Error(`Path didn't exist: ${currentPath.join(".")}`)
      } else {
        return undefined
      }
    } else {
      digged = digged[key]
    }

    if (typeof digged === "function" && callFunctions) {
      digged = digged()
    }
  }

  return digged
}

const dig = function dig(target, ...keys) {
  return digger(target, keys, {throwError: false})
}

const digg = function dig(target, ...keys) {
  return digger(target, keys, {throwError: true})
}

const digs = function digs(target, ...keys) {
  const result = {}

  for(let key of keys) {
    if (!(key in target)) throw new Error(`Target didn't contain expected key: ${key}`)

    result[key] = target[key]
  }

  return result
}

module.exports = {dig, digg, digger, digs}
