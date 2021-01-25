<template>
    <div>
        test test v-1.1.2 {{componentName}}
        <div>
            this is a test
        </div>
        <div>
            this is a test
        </div>
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
