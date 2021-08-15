import {ref} from "vue"

export default {
  name: "KategoriDropdownComponent",
  setup() {
    const kategori = ref(null)
    const options = ref(["OPSI"])

    const onScroll = (props) => {
      options.value.push(`OPSI ${props.to + 1}`)
      console.log(props)
    }

    return {
      kategori,
      options,
      onScroll
    }
  }
}
