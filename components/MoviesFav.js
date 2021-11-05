let MoviesFav = {
  template: `
    <div class="movieFav-wrapper"> 
      <div :id="'fav-' + _uid" class="movieFav"> 
        
      </div>
    </div>
    `,
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
      this.$emit('hideFav', false)
    })
  },
  beforeDestroy(){
    console.log('antes de destruir')
  },
  destroyed(){
    console.log('ya destruido')
  }
}