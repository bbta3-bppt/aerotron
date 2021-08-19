<template>
  <q-page padding>
    <div class="row justify-between self-center q-mb-md">
      <div class="col-12 col-md-2">
        <DropdownKategori class="q-mb-sm" />
      </div>

      <div class="col-12 col-md-3">
        <SearchBarang />
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
      <tr class="text-white text-uppercase">
        <th class="text-left">Nama Barang</th>
        <th class="text-left">Spesifikasi Teknis</th>
        <th class="text-center">Jumlah Barang</th>
        <th class="text-center">Lokasi Barang</th>
        <th class="text-center">Kategori</th>
        <th class="text-center">Keterangan</th>
        <th class="text-center">Opsi</th>
      </tr>
      </thead>

      <tbody>
        <tr v-for="brg in barang.results" :key="brg['id']">
          <td class="text-left">{{ brg.nama }}</td>
          <td class="text-left">{{ brg.spek }}</td>
          <td class="text-center">{{ brg.jumlah }}</td>
          <td class="text-center q-gutter-sm">
            <q-badge color="blue" v-for="b in brg.lokasi_lokasi" :key="b.id">
              {{ b.nama }}
            </q-badge>
          </td>
          <td class="text-center">{{ brg.nama_kategori }}</td>
          <td class="text-center">{{ brg.keterangan }}</td>
          <td class="text-center q-gutter-sm">
            <q-btn flat round
                   color="black"
                   icon="eva-options-2-outline"
                   @click="rincianStok(brg.id)"
            >
              <q-tooltip>Lihat data</q-tooltip>
            </q-btn>
          </td>
        </tr>
      </tbody>
    </q-markup-table>

    <q-pagination
      v-model="current"
      color="green"
      :max="Math.ceil(barang.count/page_size)"
      :max-pages="6"
      :boundary-numbers="false"
      :model-value="current"
      class="q-mb-md"
      v-if="barang.count > page_size"
      @click="onGetBarang"
    />
  </q-page>
</template>

<script src="./stok.js" />
