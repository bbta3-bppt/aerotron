export function setFasilitasMutation(state, {count, results, next, previous}) {
  state.fasilitas.count = count
  state.fasilitas.next = next
  state.fasilitas.previous = previous

  results.forEach(res => {
    state.fasilitas.results.push(res)
  })
}

export function resetFasilitasMutation(state) {
  state.fasilitas = {count: 0, results: [], next: null, previous: null}
}
