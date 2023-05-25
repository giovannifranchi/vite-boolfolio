<template>
    <main class="flex-grow-1">
        <div class="container py-3">
            <div class="row gy-3">
                <div class="col col-md-4" v-for="(project, index) in info" :key="index">
                    <CardComponent :detail="project"/>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import CardComponent from './utils/CardComponent.vue';




    export default {
    name: "AppMain",
    props: {
        info: {
            type: Array,
            required: true,
        }
    },
    components: { CardComponent, },
}
</script>

<style lang="scss" scoped>

</style>