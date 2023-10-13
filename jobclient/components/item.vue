<template>
    <div class="w-[450px] h-[250px] bg-white shadow-md rounded-md overflow-hidden">
        <div class="w-full h-8 bg-purple-400 flex justify-between px-2 items-center">
            <nuxt-link :to="{ name: 'EditJob-id', params: { id: id } }">
                <Icon name="mdi:circle-edit-outline" size="30" color="white"
                    class="cursor-pointer hover:scale-110 hover:rotate-12" />
            </nuxt-link>
            <Icon @click="store.delete(id)" name="ic:outline-delete" size="30" color="white" class="cursor-pointer hover:scale-110 hover:rotate-12" />
        </div>
        <div class="flex justify-around h-8 items-center bg-slate-50">
            <Icon name="ph:calendar-bold" size="30" color="rgb(192 132 252 / var(--tw-bg-opacity))"
                class="cursor-pointer hover:scale-110 hover:rotate-12" />
            <h1 class="text-lg text-slate-700 font-medium"> {{ createdAt.slice(0 , 10) }}</h1>
        </div>
        <div class=" w-full h-36 capitalize flex flex-col justify-evenly">
            <div class=" w-full h-8 flex px-5 justify-around items-center">
                <h3 class="text-md text-slate-800 font-semibold">job's title :</h3>
                <h3 class="text-lg font-medium text-purple-500"> {{ position }}</h3>
            </div>
            <div class=" w-full h-8 flex px-5 justify-around items-center">
                <h3 class="text-md text-slate-800 font-semibold">company :</h3>
                <h3 class="text-lg font-medium text-purple-500"> {{ company }}</h3>
            </div>
            <div class=" w-full h-8 flex justify-center items-center">
                <h3  v-if="status  === 'pending'" class="text-lg capitalize bg-orange-400 w-28 rounded text-center text-white">pending</h3>
                <h3 v-if="status  === 'interview'" class="text-lg capitalize bg-blue-400 w-28 rounded text-center text-white">Interview</h3>
                <h3 v-if="status  === 'declined'" class="text-lg capitalize bg-red-400 w-28 rounded text-center text-white">Declined</h3>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { usejobsStore } from '~/stores/jobs';
interface Props {
    company:string,
    createdAt:string,
    createdBy:string,
    position:string,
    status:string,
    id:string,
}
const props = defineProps<Props>()
const store = usejobsStore();
</script>

<style scoped></style>