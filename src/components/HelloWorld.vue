<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

      <div>
          <ul>
            <li class="men-itm" v-for="item in items.quizzs" @click="setQuizz(item.id)">{{item.title}}</li>
          </ul>
          <router-link v-for="item in items.quizzs"  :to="'/quizz/'+ item.id"><button type="button" class="btn btn-primary">quizo</button></router-link>
          <!--  <div v-for="quiz of datas.quizzes" :key="quiz.id" class="col-lg-3 col-md-4 col-sm-6 portfolio-item"> -->
      </div>

  </div>
</template>

<script>
    import json from '../quizz.json'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
    data(){
      return{
          items:json
      }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
