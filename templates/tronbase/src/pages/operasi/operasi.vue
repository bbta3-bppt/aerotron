<template>
  <q-page >
    <div class="q-pa-sm text-center text-h6">STANDAR PENGOPERASIAN PERALATAN</div>

      <q-separator primary/>

    <div class="row q-gutter-md justify-around text-center">
      <div class="col-12 col-md-5 q-pa-md" v-for="f in standaroperasi" :key="f.gambar">
        <q-card flat bordered style="height: 100%;">
          <q-img :src="f.gambar" />

          <q-card-section>
            <div class="text-h5 q-mt-sm q-mb-xs">{{ f.nama }}</div>
          </q-card-section>

          <q-card-actions vertical>
            <q-btn color="dark" icon="power_settings_new" label="Prosedur Mengaktifkan" :to="f.kegiatanON" />,
            <q-btn color="dark" icon="power_off" label="Prosedur Menonaktifkan" :to="f.kegiatanOFF" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script src="./operasi.js" />
