<template>
  <q-select
    outlined dense
    clearable
    v-model="seleksiKategori"
    label="Kategori"
    :model-value="seleksiKategori"
    :options="options"
    @virtual-scroll="onScroll"
    @input-value="onInputChange"
  />
</template>

<script src="./dropdown.js" />
