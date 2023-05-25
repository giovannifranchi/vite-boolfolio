<template>
    <main class="flex-grow-1">
        <div class="container">
        Main
        </div>
    </main>
</template>

<script>
    export default {
        name:'AppMain',
        props: {
            info: {
                type: Array,
                required: true,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>