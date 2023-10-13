<template>
    <Mainlayout >
        <div class="absolute w-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  container flex justify-between items-center flex-wrap">
            <div>
                <h1 class="text-[40px] w-[500px] text-start font-bold"> Welcome to Job <span  class="text-purple-500">Tracking</span> App Your Ultimate Job Search Solution</h1>
                <p class="w-[650px]  mt-8 text-lg font-semibold">Are you ready to supercharge your career? Look no further!  <span class="text-xl font-bold">Job <span  class="text-purple-500">Tracking</span> App</span>  is here to make your job search experience easier, faster, and more efficient than ever before.</p>
                <div class="w-[330px] h-16 flex justify-between items-center ">
                    <nuxt-link :to="{name : 'Login'}">
                        <button class="bg-purple-600 w-[150px] hover:bg-purple-700 h-10 rounded-lg text-white capitalize text-lg duration-500 hover:scale-110 hover:text-white">
                            Login
                        </button>
                    </nuxt-link>
                    <nuxt-link :to="{name : 'Register'}">
                        <button class="bg-purple-600 w-[150px] hover:bg-purple-700 h-10 rounded-lg text-white capitalize text-lg duration-500 hover:scale-110 hover:text-white">
                            register
                        </button>
                    </nuxt-link>
                </div>
            </div>
            <div class="w-[500px] h-[500px] xl:block md:hidden">
                <img src="../download.png" alt="" class="clip-m w-full h-full object-contain object-center">
            </div>
        </div>
    </Mainlayout> 
</template>

<script setup lang="ts">
import Mainlayout from '../layouts/Mainlayout.vue';
</script>

<style scoped>

</style>