export function setAllPengujianMutation(state, {count, results, next, previous}) {
  state.pengujian.count = count
  state.pengujian.next = next
  state.pengujian.previous = previous

  results.forEach(res => {
    state.pengujian.results.push(res)
  })
}

export function resetAllPengujianMutation(state) {
  state.pengujian = {count: 0, results: [], next: null, previous: null}
}

export function setAllPaketPengujianMutation(state, {count, results, next, previous}) {
  state.paket.count = count
  state.paket.next = next
  state.paket.previous = previous

  results.forEach(res => {
    state.paket.results.push(res)
  })
}

export function resetAllPaketPengujianMutation(state) {
  state.paket = {count: 0, results: [], next: null, previous: null}
}
