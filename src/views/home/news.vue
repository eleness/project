<template>

  <div class="news-block">
  <h1 style="color:#f44336"><v-icon large color='#f44336'>mdi-fire</v-icon> Лучшие Новинки <small><v-btn small depressed><p style='color:#808080'>Показать ещё </p><v-icon dense color="#808080">mdi-chevron-double-right</v-icon></v-btn> </small>

  </h1>

  <template v-for="(anime, i) in newsData">
  <v-row :key="i" class="col-news">
    <v-card class="news-card"
    max-width="200"
    href="#"
  >
  <v-img :src="anime.img"/>
<v-card-title><p class="news-anime-title">{{anime.title}}</p></v-card-title>

            <v-rating
          class="news-rating-bar"
          :value="anime.ratingCount / 2"
          length="5"
          color="#ffa500"
          dense
          half-increments
          readonly
          size="15"
        > </v-rating>

  <div class="rating-numbers"> {{ anime.ratingCount }} </div>
  </v-card>
</v-row>
</template>
</div>

</template>
<script>

export default {
  name: "news",
  data: () => ({
    newsData : ""
  }),
created() {
  this.getAnimeNews();
},
methods: {
  async getAnimeNews() {
      this.$storage.remember('news', async () => {
        let response = await axios.get("api/news/");
        this.newsData = response.data;
      })

  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.news-block{
  padding: 0rem 0px 0px 12vw;
  max-width: device-width;

}
.news-card {
  left: 3rem;
  top: 20px;
  word-wrap: break-word;
  display: inline-block;
  margin-left: 15px;
  transition: 0.15s;
}

.news-card:hover {
  transform: scale(1.04, 1.04);
}
.news-block h1{
  color: gray;
  font-weight: 500;
}
.news-rating-bar {
  padding-left: 15px;
  padding-bottom: 5px;
  display: inline-block;

}
.rating-numbers {
  display: inline-block;
  padding-left: 10px;
  color: gray;
}
.news-anime-title {
  word-break:normal;
}


</style>
