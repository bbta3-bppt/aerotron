export function setAllPinjamanMutation(state, {count, results, next, previous}) {
  state.pinjaman.count = count
  state.pinjaman.next = next
  state.pinjaman.previous = previous

  results.forEach(res => {
    state.pinjaman.results.push(res)
  })
}

export function resetAllPinjamanMutation(state) {
  state.pinjaman.results = []
}
