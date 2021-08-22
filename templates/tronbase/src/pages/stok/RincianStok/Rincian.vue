<template>
  <q-page>
    <div class="row">
      <div class="col-12 col-md-4 q-pa-sm">
        <q-img
          v-if="barangTertentu.foto"
          :src="barangTertentu.foto"
          :ratio="4/3"
          class="q-mb-md"
          placeholder-src="data:image/png;base64,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"
        />

        <q-list bordered padding>
          <q-item>
            <q-item-section>
              <q-item-label overline>INFORMASI BARANG</q-item-label>
              <q-item-label>{{ barangTertentu.nama }}</q-item-label>
              <q-item-label caption>{{ barangTertentu.spek }}</q-item-label>
            </q-item-section>

            <q-item-section side top>
              <q-item-label caption>{{ barangTertentu.nama_kategori }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator spaced />

          <q-item>
            <q-item-section avatar>
              <q-icon color="primary" name="eva-navigation-2-outline" />
            </q-item-section>
            <q-item-section>
              <p class="q-gutter-x-sm q-mb-none">
                <q-badge outline color="black" :label="brg.nama" v-for="brg in barangTertentu.lokasi_lokasi" :key="brg.id" />
              </p>
            </q-item-section>
            <q-item-section side>
              <q-item-label caption>lokasi</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator spaced inset="item" />

          <q-item>
            <q-item-section avatar>
              <q-icon color="primary" name="eva-info-outline" />
            </q-item-section>
            <q-item-section>
              <p v-if="barangTertentu.keterangan">
                {{ barangTertentu.keterangan }}
              </p>
              <p v-else class="q-mb-none">
                Belum ada informasi tambahan
              </p>
            </q-item-section>
            <q-item-section side>
              <q-item-label caption>keterangan</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator spaced inset="item" />

          <q-item>
            <q-item-section avatar>
              <q-icon color="primary" name="eva-archive-outline" />
            </q-item-section>
            <q-item-section>
              <p class="q-mb-none">
                <q-badge color="green" text-color="white"
                         :label="barangTertentu.jumlah" v-if="barangTertentu.jumlah >= 4" />
                <q-badge color="orange" text-color="white"
                         :label="barangTertentu.jumlah" v-else />
              </p>
            </q-item-section>
            <q-item-section side>
              <q-item-label caption>jumlah</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>

        <q-btn-group spread class="q-mt-md">
          <q-btn color="black"
                 label="Kembali"
                 icon="eva-undo-outline"
                 class="full-width"
                 @click="onKembali"
          />
        </q-btn-group>
      </div>

      <div class="col-12 col-md-8 q-pa-sm">
        <q-list bordered class="rounded-borders">
          <q-item-label header>Riwayat Peminjaman</q-item-label>

          <q-separator spaced />

          <q-item v-if="pinjaman.count === 0">
            <q-item-section>
              <q-item-section>
                <q-item-label>Data pinjaman belum ada</q-item-label>
              </q-item-section>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple v-for="pj in pinjaman.results" :key="pj.id" v-else>
            <q-item-section>
              <q-item-label lines="1">
                Dipinjam oleh <q-badge color="red">
                  {{ pj.nama_peminjam }}
                </q-badge>
              </q-item-label>

              <q-item-label caption lines="2">
                <span class="text-weight-bold">Kapan</span>
                -- {{ moment(pj.kapan).format("LLLL") }}
              </q-item-label>

              <q-item-label caption lines="2">
                <span class="text-weight-bold">Sebanyak</span>
                -- {{ Math.abs(pj.jumlah) }}
              </q-item-label>
            </q-item-section>

            <q-item-section side top>
              <p v-if="pj.dikembalikan">{{ moment(pj.dikembalikan).fromNow() }}</p>
              <p v-else>Belum dikembalikan</p>
            </q-item-section>
          </q-item>
        </q-list>

        <div class="row q-my-md">
          <div class="col text-right">
            <q-btn color="green"
                   text-color="white"
                   label="MUAT LAGI"
                   @click="onMemuatPinajaman"
                   v-if="pinjaman.next"
            />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script src="./rincian.js" />
