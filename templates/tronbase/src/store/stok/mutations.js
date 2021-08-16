export function setBarangMutation(state, {count, results, next, previous}) {
  state.barang.count = count
  state.barang.results = results
  state.barang.next = next
  state.barang.previous = previous
}

export function setKategoriMutation(state, {count, results, next, previous}) {
  state.kategori.count = count
  state.kategori.next = next
  state.kategori.previous = previous

  results.forEach(kategori => {
    state.kategori.results.push(kategori.nama)
  })
}

export function resetBarangMutation(state) {
  state.barang.results = []
}

export function setPilihKategoriMutation(state, kategori) {
  state.pilihkategori = kategori
}
