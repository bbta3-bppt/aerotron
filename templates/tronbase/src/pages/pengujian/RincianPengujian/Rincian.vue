<template>
  <q-page class="q-pa-sm">
    <div class="row">
      <div class="col-12 col-md-4">
        <q-list bordered padding>
          <q-item-label header>
            Daftar Pengujian
            <q-badge align="top">{{ pengujian.count }}</q-badge>
          </q-item-label>

          <q-item v-if="pengujian.count === 0">
            <q-item-section>
              <q-item-label>Data pengujian belum ada.</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple
                  v-for="uji in pengujian.results"
                  :key="uji.id"
                  v-else
                  class="q-separator-item-list"
                  :active="idSelectedPengujian === uji.id"
                  @click="onRincianPengujian(uji.id)"
          >
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
        <q-card bordered class="q-ml-md-md q-ml-sm-none shadow-0" v-if="!selectedPengujian">
          <q-card-section>
            Pilih pengujian terlebih dahulu.
          </q-card-section>
        </q-card>

        <q-card bordered class="q-ml-md-md q-ml-sm-none shadow-0" v-else-if="paket.count === 0">
          <q-card-section>
            Paket pengujian belum ada.
          </q-card-section>
        </q-card>

        <div class="q-ml-md-md q-ml-sm-none" v-else-if="paket.count > 0">
          <q-card flat>
            <q-card-section class="q-px-none q-pt-none">
              <div class="text-overline text-orange-9">Durasi Pengujian</div>
              <q-linear-progress stripe color="orange-9" size="25px" :value="selectedRincianPengujian.persentase_durasi / 100">
                <div class="absolute-full flex flex-center">
                  <q-badge color="white" text-color="black" :label="Math.round(selectedRincianPengujian.persentase_durasi, 2)" />
                </div>
              </q-linear-progress>
              <div class="text-h5 q-mt-sm q-mb-xs">{{ selectedRincianPengujian.nama_fasilitas }}</div>
              <div class="text-body2 text-grey-7">
                {{ selectedRincianPengujian.deskripsi }}
              </div>

              <q-list class="q-mt-md">
                <q-item clickable>
                  <q-item-section avatar>
                    <q-icon color="primary" name="eva-clock-outline" />
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>Dibuat</q-item-label>
                    <q-item-label caption>{{ moment(selectedRincianPengujian.dibuat).format("LLLL") }}</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable>
                  <q-item-section avatar>
                    <q-icon color="red" name="eva-briefcase-outline" />
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>Berakhir</q-item-label>
                    <q-item-label caption>{{ moment(selectedRincianPengujian.berakhir).format("LLLL") }}</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable>
                  <q-item-section avatar>
                    <q-icon color="amber" name="eva-person-outline" />
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>Pengelola</q-item-label>
                    <q-item-label caption>{{ selectedRincianPengujian.nama_pemilik }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>

          <q-card bordered
                  class="q-mb-md shadow-0"
                  v-for="pkt in paket.results"
                  :key="pkt"
          >
            <q-card-section>
              <div class="text-h6">{{ pkt.nama }}</div>
              <div class="text-subtitle2 text-italic text-weight-regular">{{ pkt.nama_pengujian }}</div>
            </q-card-section>

            <q-card-section>
              <q-linear-progress stripe size="25px" :value="pkt.persentase / 100">
                <div class="absolute-full flex flex-center">
                  <q-badge color="white" text-color="black" :label="pkt.persentase" />
                </div>
              </q-linear-progress>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script src="./rincian.js" />
