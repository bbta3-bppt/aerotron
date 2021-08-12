<template>
  <q-page padding>
    <div class="row justify-between self-center q-mb-md">
      <div class="col-12 col-md-9">
        <div class="row justify-between justify-md-start self-center q-gutter-sm">
          <div class="col-8 col-sm-9 col-md-3">
            <q-select
              outlined dense
              color="green"
              label="Kategori"
              :model-value="kategori"
              use-input
              hide-selected
              fill-input
              input-debounce="0"
              :options="options"
              @filter="filterFn"
              @input-value="setModel"
              class="q-mb-md"
            >
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">
                    No results
                  </q-item-section>
                </q-item>
              </template>

              <template v-if="kategori" v-slot:append>
                <q-icon name="eva-close-outline" @click.stop="kategori = null" class="cursor-pointer"/>
              </template>
            </q-select>
          </div>
          <div class="col-3 col-sm-2 col-md-1">
            <q-btn push color="primary" icon="eva-plus-outline" class="full-width"/>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-3">
        <form
          @submit.prevent.stop="onSearch"
        >
          <q-input
            dense outlined
            v-model="temukan"
            color="green" label="Cari..."
            lazy-rules
            ref="temukanRef"
            :rules="temukanRules"
            :model-value="temukan"
          >
            <template v-slot:prepend>
              <q-icon name="eva-search-outline"/>
            </template>
            <template v-slot:append>
              <q-icon name="eva-close-outline" @click="onReset" class="cursor-pointer"/>
            </template>
          </q-input>
        </form>
      </div>
    </div>

    <q-markup-table separator="cell" flat bordered class="q-mb-lg">
      <thead class="bg-green">
      <tr>
        <th colspan="7">
          <div class="row no-wrap items-center">
            <q-icon name="eva-archive-outline" color="white" size="33px"/>
            <div class="text-h4 text-white q-ml-sm text-uppercase">Stok Barang</div>
          </div>
        </th>
      </tr>
      <tr class="text-white">
        <th class="text-left">No.</th>
        <th class="text-right">Nama Barang</th>
        <th class="text-right">Spesifikasi Teknis</th>
        <th class="text-right">Jumlah Barang</th>
        <th class="text-right">Lokasi Barang</th>
        <th class="text-right">Keterangan</th>
        <th class="text-center">Aksi</th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="brg in barang.results" :key="brg['id']">
        <td class="text-left">1</td>
        <td class="text-right">{{ brg.nama }}</td>
        <td class="text-right">{{ brg.spek }}</td>
        <td class="text-right">{{ brg.jumlah }}</td>
        <td class="text-right">{{ brg.lokasi }}</td>
        <td class="text-right">{{ brg.keterangan }}</td>
        <td class="text-center q-gutter-sm">
          <q-btn flat round color="green" icon="eva-edit-outline">
            <q-tooltip>Ubah data</q-tooltip>
          </q-btn>

          <q-btn flat round color="grey" icon="eva-eye-outline">
            <q-tooltip>Lihat data</q-tooltip>
          </q-btn>
        </td>
      </tr>
      </tbody>
    </q-markup-table>

    <q-pagination
      v-model="current"
      color="green"
      :max="count"
      :max-pages="6"
      :boundary-numbers="false"
      :model-value="current"
      class="q-mb-md"
      v-if="barang.count > page_size"
    />
  </q-page>
</template>

<script src="./stok.js"/>
