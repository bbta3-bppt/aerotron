<template>
  <q-page >
    <div class="q-pa-sm text-center text-h6">KEGIATAN PERAWATAN</div>

      <q-separator primary/>

    <div class="row q-gutter-md justify-around text-center">
      <div class="col-12 col-md-5 q-pa-md" v-for="f in dokumentasiVIENTA" :key="f.gambar">
        <q-card flat bordered style="height: 100%;">
          <q-img :src="f.gambar" />

          <q-card-section>
            <div class="text-h5 q-mt-sm q-mb-xs">{{ f.rinciankegiatan }}</div>
            
            <div class="text-body1 text-orange-9 text-center">
              {{ f.tanggal }}
            </div>
            <div class="text-body1 text-grey-9 text-center">
              {{ f.pelaksana }}
            </div>
            <div class="text-body1 text-grey-9 text-center">
              {{ f.keterangan }}
            </div>
          </q-card-section>

        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script src="./dokumentasiVIENTA.js" />