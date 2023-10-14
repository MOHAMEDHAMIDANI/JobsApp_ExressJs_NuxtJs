<template>
    <Mainlayout>
            <div class="w-[500px] h-[500px] mx-auto mt-10 border-t-purple-500 border-t-4 rounded-md bg-white shadow-md">
                <h3  class="mt-2 capitalize text-center text-2xl font-medium">login</h3>
                    <div class="flex flex-col  items-center  mt-10 h-[350px] ">
                        <div class="flex flex-col w-[300px] mb-3">
                            <label for="email" class="text-start text-md mb-1 capitalize">email</label>
                            <input v-model="email" id="email" type="email" class="h-8 border-[1px] border-slate-300 bg-gray-50 rounded outline-purple-400 px-1">
                        </div>
                        <div class="flex flex-col w-[300px] mb-4">
                            <label for="password" class="text-start text-md mb-1 capitalize">password</label>
                            <input v-model="password" id="password" type="password" class="h-8 border-[1px] border-slate-300 bg-gray-50 rounded outline-purple-400 px-1">
                        </div>
                        <div class="flex flex-col w-[300px] mb-4">
                            <label for="confirmPassword" class="text-start text-md mb-1 capitalize">confirm your Password</label>
                            <input v-model="confirmPassword" id="confirmPassword" type="password" class="h-8 border-[1px] border-slate-300 bg-gray-50 rounded outline-purple-400 px-1">
                        </div>
                        <button @click="login" class="bg-purple-600 w-[200px] hover:bg-purple-700 h-8 rounded-lg text-white capitalize text-lg duration-500 hover:scale-110 hover:text-white">
                        submit
                    </button>
                    </div>
                    <div class="mx-auto w-fit flex capitalize items-center">
                        <h3 class="text-sm font-medium text-slate-700 mr-2">don't have an account  yet ?</h3> 
                        <nuxt-link :to="{name : 'Register'}"><span class="hover:scale-110 cursor-pointer text-md text-purple-500 duration-500"> Register</span></nuxt-link>
                    </div>
            </div>
    </Mainlayout>
</template>

<script setup lang="ts">
import axios from 'axios';
import { usejobsStore } from '~/stores/jobs';
import Mainlayout from '../layouts/Mainlayout.vue';
const store = usejobsStore();
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const login = async () => {    
if(!email.value || !password.value || !confirmPassword.value ){
    console.log('one of them are missing')
    return
}
if(password.value !== confirmPassword.value ){  
    console.log('cofirm password')
    return ;
}
console.log("you're save to go sir" )
const data = await axios.post(`http://localhost:3000/JobsApi/auth/Login`, {email :email.value , name :name.value , password :password.value}).then((res) =>  {
                    console.log(res.data)
                    return res.data
                })
                if(data){
                    store.token = data.token
                    useRouter().push({name : 'Alljobs'})
                }
}
</script>

<style scoped>

</style>