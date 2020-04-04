function digger(target, keys, throwError) {
  let digged = target
  const currentPath = []

  for (const key of keys) {
    currentPath.push(key)

    if (typeof key === "function") {
      digged = key(digged)
    } else if (!(key in digged)) {
      if (throwError) {
        throw new Error(`Path didn't exist: ${currentPath.join(".")}`)
      } else {
        return undefined
      }
    } else {
      digged = digged[key]
    }

    currentPath.pop()
  }

  return digged
}

const dig = function dig(target, ...keys) {
  return digger(target, keys, false)
}

const digg = function dig(target, ...keys) {
  return digger(target, keys, true)
}

module.exports = {dig, digg}
