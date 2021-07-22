<template>
  <q-page padding>
    <h4 class="text-center text-uppercase">Fasilitas BBTA3</h4>

    <div class="row q-gutter-md justify-around">
      <div class="col-12 col-md-5 q-pa-md" v-for="f in fasilitas" :key="f.gambar">
        <q-card flat bordered style="height: 100%;">
          <q-img :src="f.gambar" />

          <q-card-section>
            <div class="text-overline text-orange-9">{{ f.singkatan }}</div>
            <div class="text-h5 q-mt-sm q-mb-xs">{{ f.nama }}</div>
            <div class="text-body1 text-grey">
              {{ f.deskripsi }}
            </div>
          </q-card-section>

          <q-card-actions>
            <q-btn flat color="primary" label="Status Perawatan" @click="kunjungiStatus(f.status)" />
            <q-btn flat color="dark" label="Kegiatan Perawatan" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script src="./perawatan.js" />
