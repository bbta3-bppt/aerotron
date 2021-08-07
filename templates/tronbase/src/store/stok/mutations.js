export function pushBarangMutation(state, {payload}) {
  state.barang.push(payload)
}

export function resetBarangMutation(state) {
  state.barang = []
}
