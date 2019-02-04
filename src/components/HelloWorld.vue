@@ -1,54 +0,0 @@
<template>

    <div id="quizz_all">

        <div class="row">
            <div class="col s12"><h3>Séléctionner un quizz</h3></div>
            <div class="col s12 m4" v-for="item in items.quizzs">
                <div class="card-panel teal orange lighten-1">
	        <span class="white-text">{{item.title}}
	        </span>
                    <router-link :to="'/quizz/'+ item.id"><a href="play.html" class="waves-effect waves-light btn blue-grey lighten-4">Jouer !</a></router-link>
                </div>
            </div>
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
