<template>
    <div>
        <h1>Times</h1>

        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon3">Id</span>
            </div>
            <input type="text" class="form-control" required id="txtNome" v-model="id" aria-describedby="basic-addon3">
        </div>

        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon3">Pais</span>
            </div>
            <input type="text" class="form-control" required id="txtNome" v-model="pais" aria-describedby="basic-addon3">
        </div>

        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon3">Continente</span>
            </div>
            <input type="text" class="form-control" required id="txtEmail" v-model="continente" aria-describedby="basic-addon3">
        </div>

        <div>
            <button  class="btn btn-info"  @click="adicionaTime ">Inserir</button>
        </div>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Pais</th>
                <th scope="col">Continente</th>
                </tr>
            </thead>
            <tbody>
            <tr v-for="(times, id) in times" :key="id">
                <td>{{times.id}}</td>
                <td>{{times.pais}}</td>
                <td>{{times.continente}}</td>
            </tr>
            </tbody>
        </table>
        <div>
            <button class="btn btn-info" @click="exibirTimes">Buscar</button>
            <button style="margin-left: 5px;" class="btn btn-success"  @click="incrementa">Ir para Home</button>
        </div>
    </div>
</template>


<script>
import axios from 'axios'
export default {
    
    data(){
        return{
           times:[]
        }
    },
    methods:{
        adicionaTime(){
            console.log(this.id)
            console.log(this.pais)
            console.log(this.continente)
            if(this.pais === "" || this.continente === "" || this.id === null){
                window.alert("Prenche tudo!")
                return;
            }
            axios.post('http://localhost:8080/times',{
                id: this.id,
                pais: this.pais,
                continente: this.continente,
            }).then(res=>console.log(res))

            
        },

       exibirTimes(){
            axios.get("http://localhost:8080/times").
            then(response =>{
              this.times = response.data;
            });
        }
    }

}
</script>