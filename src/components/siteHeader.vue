<template>
<v-app class="header-wrapp">
    <div class="header">
        <a href="/"><img src="https://i.ibb.co/MnQ2x6q/10.png" class="logoImg"></a>
        <nav>
            <li><router-link class="router-link" to="/"><v-btn depressed> Главная</v-btn></router-link></li>
            <v-menu offset-y transition="slide-y-transition" origin="center center" open-on-hover rounded="b-xl">
              <template v-slot:activator="{on, attrs}">
                <li><router-link class="router-link" to="/rating">
                  <v-btn
                    depressed
                    class="rating"
                    v-bind="attrs"
                    v-on="on"
                    >      Рейтинг <v-icon dense color="#ffa500" class="button-icons">mdi-star</v-icon></v-btn> </router-link> </li>
              </template>

        <v-list class="rating-nav-menu" dense nav>
          <v-list-item link href="/top" class="rating-btn-best">
             <v-icon dense color="#ffa500" class="button-icons">mdi-star</v-icon> <a> Лучшее аниме </a>
          </v-list-item>

          <v-list-item link href="/categories" class="rating-btn-categories">
            <v-icon dense color="#2a8027">mdi-menu</v-icon> <a> Категории </a>
          </v-list-item>
        </v-list>

      </v-menu>


            <li><v-btn depressed> Новости</v-btn></li>
            <li><v-btn depressed> Коллекции</v-btn></li>
            <li><v-btn
            depressed
            class="auth"
            @click.stop="showAuth = true"> Войти <v-icon dense color="#2d5aab" class="button-icons">mdi-account-circle</v-icon></v-btn> </li>
            <authform :visible="showAuth" @close="showAuth=false"/>

        </nav>

    </div>
</v-app>

</template>

<script>
import authform from "./authform.vue"

export default {
  name: "siteHeader",
  data () {
    return {
      showAuth: false
    }
  },
  components: {
    authform
  }
}
</script>


<style scoped>
@media (min-width: 1300px) and (max-width: 1600px){
  .header-wrapp {
    height: 10rem;

  }
  .header {
      padding: 1rem 10rem;
      text-align: justify;
      display: inline-block;
      float: none;
      display: flex; /* Включаем режим Flexbox. */
      flex-direction: row; /* Держим элементы в строке */
      justify-content: space-between; /* Распределяем элементы внутри шапки */
      flex-wrap: wrap; /* Разрешаем перенос элементов на новую строку */

  }
    .header .logoImg{
      max-width: 300px;
      transition: 350ms;
      transition-timing-function: cubic-bezier(0.68, -0.24, 0.05, 1.65);
  }
    .header nav li {
      padding: 0 0 10px 10px;
  }

}


  .header nav li{
        font-family: 'Rubik', sans-serif;
        padding: 0.5rem 10px 0 0px;
        display: inline-block;
  }

  .header nav li .auth{
    margin: 0 0 0 15px;
    color: #2d5aab;
  }
  .header nav li .rating{
    color: #ffa500
  }
  .header nav li .button-icons{
    left: 4px;
  }

  .logoImg:hover {
      transform: scale(1.04, 1.04);
  }


.rating-nav-menu a{
  font-family: 'Rubik', sans-serif;
  font-weight: 450;
  padding: 0 5px;
  text-align: center;
  opacity: 0.90
}

.rating-btn-best a{
  color: #ffa500;
}

.rating-btn-categories a{
  color: #2a8027
}

@media (max-width: 1300px) {
  .header-wrapp {
    height: 7rem;

  }
  .header {
      padding: 1rem 1rem;
      text-align: justify;
      display: inline-block;
      float: none;
      display: flex; /* Включаем режим Flexbox. */
      flex-direction: row; /* Держим элементы в строке */
      justify-content: space-between; /* Распределяем элементы внутри шапки */
      flex-wrap: wrap; /* Разрешаем перенос элементов на новую строку */
  }
  .header nav li{
        font-family: 'Rubik', sans-serif;
        padding: 0.5rem 10px 0 0px;
        display: inline-block;
  }
  .header nav li .v-btn {
    font-size: 1.5vw;
  }
  .header .logoImg {
      max-width: 300px;
      transition: 350ms;
      transition-timing-function: cubic-bezier(0.68, -0.24, 0.05, 1.65);
  }
}

@media (min-width: 1600px) and (max-width: 1800px){
  .header-wrapp {
    height: 10rem;

  }
  .header {
      padding: 1rem 20rem;
      text-align: justify;
      display: inline-block;
      float: none;
      display: flex; /* Включаем режим Flexbox. */
      flex-direction: row; /* Держим элементы в строке */
      justify-content: space-between; /* Распределяем элементы внутри шапки */
      flex-wrap: wrap; /* Разрешаем перенос элементов на новую строку */

  }
    .header .logoImg{
      max-width: 300px;
      transition: 350ms;
      transition-timing-function: cubic-bezier(0.68, -0.24, 0.05, 1.65);
  }

}

@media (min-width: 1800px){
  .header-wrapp {
    height: 10rem;

  }
  .header {
      padding: 1rem 27rem;
      text-align: justify;
      display: inline-block;
      float: none;
      display: flex; /* Включаем режим Flexbox. */
      flex-direction: row; /* Держим элементы в строке */
      justify-content: space-between; /* Распределяем элементы внутри шапки */
      flex-wrap: wrap; /* Разрешаем перенос элементов на новую строку */

  }
    .header .logoImg{
      max-width: 300px;
      transition: 350ms;
      transition-timing-function: cubic-bezier(0.68, -0.24, 0.05, 1.65);
  }

}
.router-link {
  text-decoration: none;
}
</style>
