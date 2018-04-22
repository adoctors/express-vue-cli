<template>
	<div >
		Hello World！
	</div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
  	init(){
  		this.$axios.get('/login').then(res=>{
  			console.log(res)
  		}).catch(err=>{
  			console.log(err)
  		})
  	}
  },
  created(){
    this.init();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>