<template>
    <div>
        test test v-1.0.9 {{componentName}}
        <div>this is a test</div>

    </div>
</template>

<script>
    export default {
        name: 'testComponent',
        data() {
            return {
                componentName: 'hello world'
            }
        }
    }
</script>
