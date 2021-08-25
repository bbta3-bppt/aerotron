<template>
  <q-page class="q-pa-sm">
    <q-list bordered class="rounded-borders">
      <q-item-label header>Fasilitas Layanan Pengujian</q-item-label>

      <q-item v-if="fasilitas.count === 0">
        <q-item-section class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">Fasilitas belum ada</q-item-label>
        </q-item-section>
      </q-item>

      <q-item v-for="fas in fasilitas.results" :key="fas.id" v-else>
        <q-item-section thumbnail>
          <img
            :src="fas.gambar"
            :ratio="1"
            fit="cover"
            spinner-color="black"
            class="q-ml-sm"
            :alt="fas.nama"
          >
        </q-item-section>

        <q-item-section class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">{{ fas.nama }}</q-item-label>
          <q-item-label caption lines="1">
            {{ fas.singkatan }}
          </q-item-label>
        </q-item-section>

        <q-item-section>
          <q-item-label lines="3">
            {{ fas.deskripsi }}
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <div class="text-grey-8 q-gutter-xs">
            <q-btn outline color="primary" label="Kunjungi" @click="onRincianFasilitas(fas.id)" />
          </div>
        </q-item-section>
      </q-item>
    </q-list>

    <q-btn outline color="green" label="Muat Lagi"
           class="q-my-md"
           @click="onMuatLagi"
           v-if="fasilitas.next"
    />
  </q-page>
</template>

<script src="./pengujian.js" />
