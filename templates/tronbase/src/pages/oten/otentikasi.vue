<template>
  <q-page padding class="flex flex-center">
    <q-card class="q-masuk">
      <q-bar>
        <q-icon name="eva-lock-outline" />
        <div class="text-uppercase">login aerotron</div>
      </q-bar>

      <q-card-section>
        <form
          @submit.prevent.stop="onSubmit"
          @reset.prevent.stop="onReset"
          class="q-gutter-md"
        >
          <q-input
            outlined
            lazy-rules
            ref="usernameRef"
            v-model="username"
            label="Username"
            :rules="usernameRules"
            model-value=""
          />

          <q-input
            outlined
            lazy-rules
            type="password"
            ref="passwordRef"
            v-model="password"
            label="Password"
            :rules="passwordRules"
          />

          <div>
            <q-btn label="Masuk" type="submit" color="primary" />
            <q-btn label="Ulang" type="reset" color="primary" flat class="q-ml-sm" />
          </div>
        </form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script src="./otentikasi.js" />
