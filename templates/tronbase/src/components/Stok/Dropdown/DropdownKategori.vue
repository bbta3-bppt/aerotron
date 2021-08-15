<template>
  <q-select
    outlined dense
    v-model="kategori"
    label="Kategori"
    emit-value
    :model-value="kategori"
    :options="options"
    @virtual-scroll="onScroll"
  />
</template>

<script src="./dropdown.js" />
