Vue.component('movies-comp',{
  template: `
    <div class="container">
      <h5>Bienvenido {{user}}</h5>
      <h2>Peliculas</h2>
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4" v-for="(movie, key) in movies">
          <Movies 
            :key="key"
            :id="movie.id"
            :title="movie.title"
            :synopsis="movie.synopsis"
            :cover="movie.cover"
            :like="movie.like"
            @toggleLike="onToggleLike"
          />
        </div>
      </div>
      <label>
        Cambiar Nombre
        <input :value="user" @change="setNewUser"/>
      </label>
      {{oldUser}}
      <MoviesFav :show.sync="showFav"/>
    </div>
  `,
  data(){
    return {
      user: 'Franco',
      oldUser: null,
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
  watch:{
    user(newVal, oldVal){
      console.log(newVal, oldVal)
      this.oldUser = oldVal
    }
  },
  methods:{
    setNewUser(event){
      this.user = event.target.value
    },
    onToggleLike(data){
      let movieLike = this.movies.find(movie => movie.id === data.id)
      movieLike.like = data.like
      //this.showFav = data.like //comento esto para usar $parent en Movie.js
    },
    /* onHideFav(show){
      this.showFav = show
    } */
  }
}) 