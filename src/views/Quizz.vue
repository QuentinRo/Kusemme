<template>
    <div class="hello">
        <h1>{{ msg }}</h1>

        <div v-for="(quiz, index) of items.quizzs"  style="display:flex" :key="quiz.id">
            <div v-if="quiz.id == $route.params.id" style="text-align:center">
                {{quiz.title}}
                {{quiz.id}}<br>
                {{quiz.questions[1].question}}
                {{quiz.questions[1].answers[1].name}}
            </div>
        </div>


        <div class="row col-lg-12 center question" id="header">
            {{items.quizzs.questions}}
        </div>



    </div>
</template>

<script>
    import json from '../quizz.json'
    export default {
        name: 'doQuizz',
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
