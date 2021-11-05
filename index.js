Vue.component('movies-comp',{
  template: `
    <div>
      <h1>Pelculas</h1>
      <Movies v-for="(movie, key) in movies"
        :key="key"
        :id="movie.id"
        :title="movie.title"
        :synopsis="movie.synopsis"
        :cover="movie.cover"
        :like="movie.like"
        @toggleLike="onToggleLike"
      />
      <MoviesFav v-if="showFav" @hideFav="onHideFav"/>
    </div>
  `,
  data(){
    return {
      movies: [
        {
          id: 1,
          title: 'Titanic',
          synopsis: 'Durante las labores de recuperación de los restos del famoso trasatlántico Titanic, una anciana norteamericana se pone en contacto con la expedición para acudir…',
          cover: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/zraTDtulFw2wrpyuYf646k95MNq.jpg',
          like: false,
      },
      {
          id: 2,
          title: 'El Rey León',
          synopsis: 'Un remake del clásico animado de Disney de 1994 El rey león que estará dirigido por Jon Favreu. Simba (Donald Glover) es el hijo del rey de los leones, Mufasa…',
          cover: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/3A8ca8WOBacCRujSKJ2tCVKsieQ.jpg',
          like: false,
      },
      {
          id: 3,
          title: 'Toy Story',
          cover: 'https://images-na.ssl-images-amazon.com/images/I/51dPe9MTdgL._SX331_BO1,204,203,200_.jpg',
          like: false,
      }
      ],
      showFav: false,
    }
  },
  components: {
    Movies,
    MoviesFav,
  },
  methods:{
    onToggleLike(data){
      let movieLike = this.movies.find(movie => movie.id === data.id)
      movieLike.like = data.like
      this.showFav = data.like
      setTimeout(() => {
        this.showFav = false
      }, 1000) 
    },
    onHideFav(show){
      this.showFav = show
    }
  }
}) 