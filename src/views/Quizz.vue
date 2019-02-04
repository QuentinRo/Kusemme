<template>
    <div class="hello">



        <div v-for="(quiz, index) of items.quizzs"  style="display:flex" :key="quiz.id">
            <div v-if="quiz.id == $route.params.id" style="text-align:center">
                {{quiz.title}}
                {{quiz.questions[1].question}}
                {{quiz.questions[1].answers[1].name}}
                {{WichQuizz(index)}}
            </div>
        </div>


<!-- <a href="#!" class="collection-item" onclick="this.classList.toggle('active');">{{item.name}}</a> -->
        <div class="row">
            <div class="col s12 m4 l2"></div>
            <div class="col s12 m4 l8">
                <div class="quizz">
                <ul class="collection with-header" >
                    <li class="collection-header"><h4>{{this.items.quizzs[this.quizindex].questions[this.currentQuestion].question}}</h4></li>
                    <li class="collection-header" v-for="(item, index) in this.items.quizzs[this.quizindex].questions[this.currentQuestion].answers">
                        <p>
                            <label>
                                <input name="group1" :id="index" type="radio" :value="item.name" v-model="picked"/>
                                <span :id="index">{{item.name}}</span>

                            </label>

                        </p>

                    </li>
                </ul>
                    <span>Choisi : {{ picked }}</span>
            </div>
                <button v-on:click="next">
                    Suivant{{picked}}
                </button>
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
            picked: '',
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
        },
        // Go to next question
        next: function() {
            this.currentQuestion++;
        }

    }
}
</script>
