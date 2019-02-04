<template>
    <div class="hello">

        <div class="row">
            <div class="col s12 m4 l2"></div>
            <div class="col s12 m4 l8">
                <div class="quizz" v-for="(item, index) in this.items.quizzs[this.quizindex].questions">
                <ul class="collection with-header" >
                    <li class="collection-header"  style="text-align:center">
                    {{item.question}}
                        {{WichQuizz(index)}}
                    </li>
                        <div v-for="(answer, index) in item.answers">
                            <li> <a href="#!" class="collection-item" onclick="this.classList.toggle('active');" v-on:click="nextquestion(index)">{{answer.name}}</a></li>
                        </div>
                </ul>

            </div>
            </div>
        </div>

        <div class="questions" v-show="end">
            vous avez {{this.correct}} reponse juste
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
    data() {
        return {
            items: json,
            question: null,
            quizindex: 0,
            currentQuestion: 0,
            correct: 0,
            end: false
        }
    }, methods: {
        WichQuizz: function(index){
            this.quizindex = index;
        },
        //Method to go on the next question
        nextquestion: function(index){
            //Scoring
            if(this.items.quizzs[this.quizindex].questions[this.currentQuestion].answers[index].value == 'true'){
                this.correct++
            }
            //Check if it's the last question or not
            if(this.currentQuestion == this.items.quizzs[this.quizindex].questions.length - 1) {
                this.end = true;
            } else {
                this.currentQuestion++
            }
        }
    }
}
</script>
