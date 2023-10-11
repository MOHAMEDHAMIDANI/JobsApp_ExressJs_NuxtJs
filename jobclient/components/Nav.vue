<template>
    <div>
    <nav class="w-full px-36 h-12 bg-white-400 flex justify-between items-center bg-white shadow-sm">
        <div class="logo">
            <nuxt-link :to="{name :'index'}">
                <h3 class="text-2xl font-medium capitalize">Jobs<span class="text-purple-600">App</span></h3>
            </nuxt-link>
        </div>
        <div class="w-28 h-7 rounded-full flex justify-evenly items-center border-2 border-purple-500">
            <h3 class="capitalize font-medium text-sm">
                no user
            </h3>
            <Icon size="20" name="dashicons:admin-users" color="purple"/>
        </div>  
    </nav>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>