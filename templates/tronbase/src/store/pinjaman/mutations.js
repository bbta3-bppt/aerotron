export function setAllPinjamanMutation(state, {count, results, next, previous}) {
  state.pinjaman.count = count
  state.pinjaman.results = results
  state.pinjaman.next = next
  state.pinjaman.previous = previous
}

export function resetAllPinjamanMutation(state) {
  state.pinjaman.results = []
}
