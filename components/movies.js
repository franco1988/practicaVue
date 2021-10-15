let Movies = {
  template: `
    <div>
      <img :src="cover"/>
      <h2 v-text="title"></h2>
      <p v-text="synopsis"></p>
    </div>
  `,
  props:[
    'id',
    'title',
    'synopsis',
    'cover'
  ]
}