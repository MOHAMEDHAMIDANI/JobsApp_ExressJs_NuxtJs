<template>
    <Mainlayout>
        <div class="mt-10 w-full h-full flex justify-center items-center gap-5 flex-wrap ">
            <item v-for="job in store.allJobs.jobs" :key="job" :company="job.company" :createdAt="job.createdAt" :createdBy="job.createdBy" :position="job.position" :status="job.status" :id="job._id" />
        </div>
    </Mainlayout>
</template>
<script setup lang="ts">
import { usejobsStore } from '@/stores/jobs'
import Mainlayout from '../layouts/Mainlayout.vue';
const store = usejobsStore();
onBeforeMount(async () => {
    await store.fetchdata()
})
</script>

<style scoped>

</style>