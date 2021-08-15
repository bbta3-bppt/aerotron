export function setBarangMutation(state, {count, results, next, previous}) {
  state.barang.count = count
  state.barang.results = results
  state.barang.next = next
  state.barang.previous = previous
}

export function setKategoriMutation(state, {count, results, next, previous}) {
  state.kategori.count = count
  state.kategori.results = results
  state.kategori.next = next
  state.kategori.previous = previous
}

export function resetBarangMutation(state) {
  state.barang.results = []
}

export function resetKategoriMutation(state) {
  state.kategori.results = []
}
