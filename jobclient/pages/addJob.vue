<template>
    <Mainlayout>
            <div class="w-[500px] h-[450px] mx-auto mt-10 border-t-purple-500 border-t-4 rounded-md bg-white shadow-md">
                <h3  class="mt-2  text-center text-2xl font-medium capitalize
                ">add  job</h3>
                    <div class="flex flex-col  items-center  mt-10 h-[450px] ">
                        <div class="flex flex-col  w-[300px] mb-3">
                            <label for="position" class="text-start text-md mb-1 capitalize">position</label>
                            <input id="position" v-model="position" type="text" class="h-8 border-[1px] border-slate-300 bg-gray-50 rounded  outline-purple-400 px-1">
                        </div>
                        <div class="flex flex-col w-[300px] mb-3">
                            <label for="company" class="text-start text-md mb-1 capitalize">company</label>
                            <input v-model="company" id="company" type="text" class="h-8 border-[1px] border-slate-300 bg-gray-50 rounded outline-purple-400 px-1">
                        </div>
                        <div class="flex flex-col w-[300px] mb-4">
                            <label for="status" class="text-start text-md mb-1 capitalize">Job Status</label>
                            <select v-model="status" name="status" id="status" class="h-8 mb-1 pl-1 capitalize bg-slate-200
                            ">
                                <option  value="interview"  class="h-8 capitalize bg-slate-200
                            ">Interview</option>
                                <option  value="pending" class="h-8 capitalize bg-slate-200
                            ">pending</option>
                                <option  value="declined" class="h-8 capitalize bg-slate-200
                            ">Declined</option>
                            </select>
                        </div>
                        <button @click="addJob ()" class="bg-purple-600 w-[200px] hover:bg-purple-700 h-8 rounded-lg text-white capitalize text-lg duration-500 hover:scale-110 hover:text-white">
                        submit
                    </button>
                    </div>
            </div>
    </Mainlayout>
</template>


<script setup lang="ts">
import Mainlayout from '../layouts/Mainlayout.vue';
import { usejobsStore } from '@/stores/jobs'
const store = usejobsStore();
const company = ref('')
const position = ref('')
const status = ref('')
const addJob  = () => {
    store.add({company : company.value , position:position.value , status :status.value })
    useRouter().push({name : 'Alljobs'})
}
</script>

<style scoped>

</style>