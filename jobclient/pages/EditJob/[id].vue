<template>
    <Mainlayout>
            <div class="w-[500px] h-[450px] mx-auto mt-10 border-t-purple-500 border-t-4 rounded-md bg-white shadow-md">
                <h3  class="mt-2  text-center text-2xl font-medium capitalize
                ">Edit  job</h3>
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
                            <select name="status" id="status" class="h-8 mb-1 pl-1 capitalize bg-slate-200
                            ">
                                <option  value="interview" @click.prevent="status = 'interview'" class="h-8 capitalize bg-slate-200
                            ">Interview</option>
                                <option  value="pending" @click.prevent="status = 'pending'" class="h-8 capitalize bg-slate-200
                            ">pending</option>
                                <option  @click.prevent="status = 'declined'" value="declined" class="h-8 capitalize bg-slate-200
                            ">Declined</option>

                            </select>
                        </div>
                        <button @click="edit()" class="bg-purple-600 w-[200px] hover:bg-purple-700 h-8 rounded-lg text-white capitalize text-lg duration-500 hover:scale-110 hover:text-white">
                        submit
                    </button>
                    </div>
            </div>
    </Mainlayout>
</template>


<script setup lang="ts">
import Mainlayout from '../../layouts/Mainlayout.vue';
import { usejobsStore } from '@/stores/jobs'
const store = usejobsStore();
const id = useRoute().params.id
onBeforeMount(()  => {
    console.log(id)
    store.getSingleData(id)
})
const company = ref('')
const position = ref('')
const status = ref('')

company.value = store.Job.company;
position.value = store.Job.position;
const edit = () => {
    store.edit(id , {company : company , position:position , status :status })
    useRouter().push({name : 'Alljobs'})
}
</script>

<style scoped>

</style>