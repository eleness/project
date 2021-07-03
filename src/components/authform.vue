<template>
    <v-dialog
      v-model="showAuth"
      max-width="600"
    >
  <v-card class="example">
        <v-card-title>
          <span class="text-h5">Авторизация</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>

              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  v-model="email"
                  :rules="emailRules"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Пароль*"
                  :rules="passwordRules"
                  type="password"
                  required
                ></v-text-field>
              </v-col>

            </v-row>
          </v-container>
          <small><a>    Восстановить пароль </a> </small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="#919191"
            depressed
            text
            @click.stop="showAuth=false"
          >
            оТМЕНА
          </v-btn>
           <v-btn
            color="#919191"
            depressed
            text
            @click="dialog  = false"
          >
            ЗАРЕГИСТРИРОВАТЬСЯ
          </v-btn>
          <v-btn
            color="blue darken-1"
            :disabled="false"
            depressed
            text
            @click="auth()"
          >
            Войти
          </v-btn>
        </v-card-actions>
      </v-card>
</v-dialog>
</template>
<script>

export default {
  name: "authform",
  props: ['visible'],
  computed: {
    showAuth: {
      get () {
        return this.visible
      },
      set (value) {
        if (!value) {
          this.$emit('close')
        }
      }
    }
  },
  data: () => ({
    emailRules: [
          v => !!v || 'Введите email адресс',
          v => /.+@.+/.test(v) || 'Введите настоящий email адресс',
      ],
    passwordRules: [
          v => !!v || 'Введите пароль',
          v => v.length >= 5 || "Введите настоящий пароль",
    ],
  }),
  methods: {
    auth() {
      console.log();
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
