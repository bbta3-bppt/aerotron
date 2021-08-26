<template>
  <q-page class="q-pa-sm">
    <div class="row">
      <div class="col-12 col-md-4">
        <q-list bordered padding>
          <q-item-label header>
            Daftar Pengujian
            <q-badge align="top">{{ pengujian.count }}</q-badge>
          </q-item-label>

          <q-separator />

          <q-item v-if="pengujian.count === 0">
            <q-item-section>
              <q-item-label>Data pengujian belum ada.</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple v-for="uji in pengujian.results" :key="uji.id" v-else>
            <q-item-section>
              <q-item-label>{{ uji.nama }}</q-item-label>
              <q-item-label caption>
                Fasilitas: {{ uji.nama_fasilitas }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>

        <q-btn color="green" label="Muat Lagi"
               class="q-my-md full-width"
               v-if="pengujian.next"
               @click="onMemuatPengujian"
        />
      </div>

      <div class="col-12 col-md-8">
        <q-card bordered class="q-ml-md-md q-ml-sm-none shadow-0" v-if="selectedPengujian">
          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>

          <q-card-section>
            <q-linear-progress stripe size="10px" :value="0.0" />
          </q-card-section>
        </q-card>

        <q-card bordered class="q-ml-md-md q-ml-sm-none shadow-0">
          <q-card-section>
            Pilih pengujian terlebih dahulu.
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script src="./rincian.js" />
