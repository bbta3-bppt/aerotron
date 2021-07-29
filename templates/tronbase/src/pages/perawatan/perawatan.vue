<template>
  <q-page >
    <div class="q-pa-sm text-center text-h6">FASILITAS PENGUJIAN</div>

      <q-separator primary/>

    <div class="row q-gutter-md justify-around text-center">
      <div class="col-12 col-md-5 q-pa-md" v-for="f in fasilitas" :key="f.gambar">
        <q-card flat bordered style="height: 100%;">
          <q-img :src="f.gambar" />

          <q-card-section>
            <div class="text-overline text-orange-9">{{ f.singkatan }}</div>
            <div class="text-h5 q-mt-sm q-mb-xs">{{ f.nama }}</div>
            <div class="text-body1 text-grey-8 text-justify">
              {{ f.deskripsi }}
            </div>
          </q-card-section>

          <q-card-actions vertical>
            <q-btn color="dark" icon="engineering" label="Status Perawatan" @click="kunjungiStatus(f.status)" />
            <q-btn color="dark" icon="photo" label="Kegiatan Perawatan" :to="f.kegiatan"/>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script src="./perawatan.js" />