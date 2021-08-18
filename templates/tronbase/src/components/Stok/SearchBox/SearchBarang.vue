<template>
  <form
    @submit.prevent.stop="onSearch"
  >
    <q-input
      dense outlined
      lazy-rules
      v-model="computeTemukan"
      color="green" label="Cari..."
      :model-value="computeTemukan"
    >
      <template v-slot:prepend>
        <q-icon name="eva-search-outline"/>
      </template>

      <template v-slot:append v-if="computeTemukan">
        <q-icon name="cancel" @click.stop="onReset" class="cursor-pointer" />
      </template>
    </q-input>
  </form>
</template>

<script src="./search.js" />
