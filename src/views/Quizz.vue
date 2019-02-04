<template>
    <div class="hello">


        <div class="row">
        <div class="col s12" v-for="(quiz, index) of items.quizzs"  style="display:flex" :key="quiz.id">
            <div v-if="quiz.id == $route.params.id" style="text-align:center">
                <div ><h3>{{quiz.title}}</h3></div>
                {{WichQuizz(index)}}
            </div>
        </div>


            <div class="col s12 m4 l2"></div>
            <div class="col s12 m4 l8">
                <div class="quizz">
                <ul class="collection with-header" >
                    <li class="collection-header"><h4>{{this.items.quizzs[this.quizindex].questions[this.currentQuestion].question}}</h4></li>
                    <li class="collection-header" v-for="(item, index) in this.items.quizzs[this.quizindex].questions[this.currentQuestion].answers">
                        <p>
                            <label>
                                <input name="group1" :id="index" type="radio" :value="item.name"  v-on:click="next(index)"/>
                                <span :id="index">{{item.name}}</span>
                            </label>
                        </p>
                    </li>
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
            picked: '',
            correct: 0,
            end: false
        }
    }, methods: {
        WichQuizz: function(index){
            this.quizindex = index;
        },
        // Go to next question
        next: function(index) {
            if (this.items.quizzs[this.quizindex].questions[this.currentQuestion].answers[index].value == 'true')
            {
                this.correct++
            }
            if(this.items.quizzs[this.quizindex].questions.length -1 == this.currentQuestion )
            {
                this.end = true;
            }else {
                this.currentQuestion++;
            }
        }
    }
}
</script>
