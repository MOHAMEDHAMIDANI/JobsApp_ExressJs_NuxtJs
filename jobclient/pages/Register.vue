<template>
    <Mainlayout>
            <div class="w-[500px] h-[600px] mx-auto mt-10 border-t-purple-500 border-t-4 rounded-md bg-white shadow-md">
                <h3  class="mt-2  text-center text-2xl font-medium capitalize
                ">Register</h3>
                    <div class="flex flex-col  items-center  mt-10 h-[450px] ">
                        <div class="flex flex-col  w-[300px] mb-3">
                            <label for="name" class="text-start text-md mb-1 capitalize">name</label>
                            <input required id="name" v-model="name" type="text" class="h-8 border-[1px] border-slate-300 bg-gray-50 rounded  outline-purple-400 px-1">
                        </div>
                        <div class="flex flex-col w-[300px] mb-3">
                            <label for="email" class="text-start text-md mb-1 capitalize">email</label>
                            <input required v-model="email" id="email" type="email" class="h-8 border-[1px] border-slate-300 bg-gray-50 rounded outline-purple-400 px-1">
                        </div>
                        <div class="flex flex-col w-[300px] mb-4">
                            <label for="password" class="text-start text-md mb-1 capitalize">password</label>
                            <input required v-model="password" id="password" type="password" class="h-8 border-[1px] border-slate-300 bg-gray-50 rounded outline-purple-400 px-1">
                        </div>
                        <div class="flex flex-col w-[300px] mb-4">
                            <label for="confirmPassword" class="text-start text-md mb-1 capitalize">confirm your Password</label>
                            <input required v-model="confirmPassword" id="confirmPassword" type="password" class="h-8 border-[1px] border-slate-300 bg-gray-50 rounded outline-purple-400 px-1">
                        </div>
                        <button @click="register()" class="bg-purple-600 w-[200px] hover:bg-purple-700 h-8 rounded-lg text-white capitalize text-lg duration-500 hover:scale-110 hover:text-white">
                        submit
                    </button>
                    </div>
                    <div class="mx-auto w-fit flex capitalize items-center">
                        <h3 class="text-sm font-medium text-slate-700 mr-2">already have an account ?</h3> 
                        <nuxt-link :to="{name : 'Login'}"><span class="hover:scale-110 cursor-pointer text-md text-purple-500 duration-500"> login</span></nuxt-link>
                    </div>
            </div>
    </Mainlayout>
</template>

<script setup lang="ts">
import { usejobsStore } from '~/stores/jobs';
import Mainlayout from '../layouts/Mainlayout.vue';
import axios from 'axios';
const email = ref("");
const name = ref("");
const password = ref("");
const confirmPassword = ref("");
const store = usejobsStore();
const register = async () => {    
if(!email.value || !name.value || !password.value || !confirmPassword.value ){
    console.log('one of them are missing')
    return
}
if(password.value !== confirmPassword.value ){  
    console.log('cofirm password')
    return ;
}
const data = await axios.post(`http://localhost:3000/JobsApi/auth/Register`, {email :email.value , name :name.value , password :password.value} , {
                    headers: {
                        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTI3ZjJkMWE4ZTBiMjA2YTgyOWRkZGYiLCJuYW1lIjoiTW9oYW1lZCIsImlhdCI6MTY5NzIxNDY0MywiZXhwIjoxNjk5ODA2NjQzfQ.7eACzD1FOT26sZzDFsx7lbR9YU4X_o6vAzWLhG9x1ps`,
                    },
                }).then((res) =>  {
                    console.log(res.data)
                    return res.data
                })
                if(data){
                    store.token = data.token
                    store.username = data.user.name
                    useRouter().push({name : 'Login'})
                }
            }
</script>

<style scoped>

</style>