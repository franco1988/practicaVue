let MoviesFav = {
  template: `
    <div v-show="show" class="movieFav-wrapper"> 
      <div :id="'fav-' + _uid" class="movieFav"> 
        
      </div>
    </div>
    `,
    props:{
      show: {
        type: Boolean,
        default(){
          return false
        }
      }
    },
  beforeCreate(){
    console.log('antes de crear')
  },
  created(){
    console.log('ya creado')
  },
  beforeMount(){
    console.log('antes de montar')
  },
  mounted(){
    let $element = document.getElementById(`fav-${this._uid}`)
    $element.addEventListener('animationend', () => {
      //this.$emit('hideFav', false)
      this.$emit('update:show', false)
    })
  },
  beforeDestroy(){
    console.log('antes de destruir')
  },
  destroyed(){
    console.log('ya destruido')
  }
}