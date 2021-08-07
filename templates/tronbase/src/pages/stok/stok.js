import {defineComponent, ref} from "vue"


export default defineComponent({
  name: 'Halaman Stok',
  setup() {
    // Dropdown menu
    const kategori = ref(null)
    const stringOptions = ["Listrik", "Mekanik"]
    const options = ref(stringOptions)

    const filterFn = (val, update) => {
      update(() => {
        const needle = val.toLocaleLowerCase()
        options.value = stringOptions.filter(v => v.toLocaleLowerCase().indexOf(needle) > -1)
      })
    }
    const setModel = (val) => {
      kategori.value = val
    }

    // Pagination
    const count = ref(10)
    const current = ref(1)

    // Pencarian
    const temukan = ref(null)
    const temukanRef = ref(null)
    const temukanRules = [
      val => (val && val.length > 0) || 'perlu diisi'
    ]

    const onSearch = () => {
      temukanRef.value.validate()

      if (!temukanRef.value.hasError) {
        console.log(temukan.value)
      }
    }

    const onReset = () => {
      temukan.value = null
      temukanRef.value.resetValidation()
    }

    return {
      kategori,
      options,
      count,
      current,
      temukan,
      temukanRef,
      temukanRules,
      onSearch,
      onReset,
      filterFn,
      setModel
    }
  }
})
