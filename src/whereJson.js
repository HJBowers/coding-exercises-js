export default function whereJson(object, stringSearch) {
  let path = []
  let search = []

  for (let i in object) {
    if(object[i] === stringSearch) {
      path.push(i)
      return path.join('')
    }
    else if (Array.isArray(object[i])) {
      search.push(i)
    }
  }

  for (let i = 0; i < search.length; i++) {
    path.push(search[i])
    if (path.length > 1 && typeof path[path.length - 1] === 'string') {
      path.pop()
      path.pop()
      path.push(search[i])
    }

    let array = object[search[i]]

    if (typeof array[0] === 'object') {
      for (let j = 0; j < array.length; j++) {
        for (let k in array[j]) {
          if (array[j][k] === stringSearch) {
            path.push(j)
            path.push(k)
            return path.join(' -> ')
          }
        }
      }
    }
    else {
      for (let j = 0; j < array.length; j++) {
        if (array[j] === stringSearch) {
          path.push(j)
          return path.join(' -> ')
        }
      }
    }
  }
}
