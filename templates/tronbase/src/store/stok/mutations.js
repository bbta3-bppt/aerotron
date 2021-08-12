export function setBarangMutation(state, {payload}) {
  state.barang = payload
}

export function resetBarangMutation(state) {
  state.barang = []
}
