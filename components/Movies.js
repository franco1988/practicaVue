let Movies = {
  template: `
    <div :id="id | formatId" class="card" :class="{'movie-like': like}">
      <img :src="cover" class="card-img-top"/>
      <div class="card-body">
          <h2 class="card-title" >{{title | uppercase}}</h2>
          <p class="card-text" >{{synopsis | textCorto}}</p>
          <button class="btn" :class="btnStatus" @click="toggleLike">
            <span v-text="like ? 'Favorito' : 'Agregar a Favorito' "></span>
            <i class="fa-heart" :class="{
              'far': !like,
              'fas': like
            }"></i>
          </button>
      </div>
    </div>
  `,
  props:{
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    synopsis: {
      type: String,
      dafault: 'No posee synopsis'
    },
    cover: {
      type: String,
      required: true,
    },
    like: {
      type: Boolean,
      required: true,
      default(){
        return false
      }
    }
  },
  data(){
    return {
      className:{
        'btn-like': true,
        'btn-light': false
      }
    }
  },
  watch:{
    like(newVal, oldVal){
      
    }
  },
  filters:{
    formatId(value){
      return `moviecard-${value}`
    },
    uppercase(value){
      return value.toUpperCase()
    },
    textCorto(value){
      if(value){
        return value.substring(0, 40) + '...'
      }
      return '...'
    }
  },
  computed: {
    btnStatus(){
      return this.like? 'btn-like' : 'btn-light'
    }
  },
  methods: {
    toggleLike(){
      //se comenta para usar $parent
      /* let data = {
        id: this.id,
        like: !this.like,
      }
      this.$emit('toggleLike', data) */

      let movie = this.$parent.movies.find(m => m.id === this.id)
      movie.like = !this.like
      this.$parent.showFav = !this.like
    }
  }
}