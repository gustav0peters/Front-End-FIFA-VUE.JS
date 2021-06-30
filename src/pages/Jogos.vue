<template>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Time 1</th>
                <th scope="col">Time 2</th>
                <th scope="col">Data</th>
                </tr>
            </thead>
            <tbody>
            <tr v-for="(jogos, id) in jogos" :key="id">
                <td>{{jogos.id}}</td>
                <td>{{jogos.time1.pais}}</td>
                <td>{{jogos.time2.pais}}</td>
                <td>{{jogos.data}}</td>
            </tr>
            </tbody>
        </table>
        <div>
            <button class="btn btn-info" @click="exibirJogos">Buscar</button>
        </div>
</template>

<script>
import axios from 'axios'
export default {
    
    data(){
        return{
           jogos:[]
        }
    },
    methods:{
       exibirJogos(){
            axios.get("http://localhost:8080/jogos").
            then(response =>{
              this.jogos = response.data;
            });
        }
    }

}
</script>
