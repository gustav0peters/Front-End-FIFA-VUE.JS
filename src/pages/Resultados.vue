<template>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Time 1</th>
                <th scope="col">Time 2</th>
                <th scope="col">Data</th>
                <th scope="col">Vencedor</th>

                </tr>
            </thead>
            <tbody>
            <tr v-for="(resultados, id) in resultados" :key="id">
                <td>{{resultados.id}}</td>
                <td>{{resultados.jogo.time1.pais}}</td>
                <td>{{resultados.jogo.time2.pais}}</td>
                <td>{{resultados.jogo.data}}</td>
                <td>{{resultados.time_vencedor.pais}}</td>
            </tr>
            </tbody>
        </table>
        <div>
            <button class="btn btn-info" @click="exibirResultados">Buscar</button>
        </div>
</template>

<script>
import axios from 'axios'
export default {
    
    data(){
        return{
           resultados:[]
        }
    },
    methods:{
       exibirResultados(){
            axios.get("http://localhost:8080/resultados").
            then(response =>{
              this.resultados = response.data;
            });
        }
    }
}
</script>
