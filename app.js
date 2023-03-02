const app = Vue.createApp({
  data(){
    return{
      show:false,
      title:"Hello world",
      author:"Minh Duke",
      age:20
    }
  },
  methods:{
    showBooks(){
      this.show=!this.show;
    }
  }
});
app.mount('#app');