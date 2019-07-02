<template>
<div id="app1">
    <ul>
        <li v-for="mobile in mobiles">{{mobile.name}}</li>
        
    </ul>
     <p v-bind:obj="obj">LAkshman</p>

</div>
</template>
<script>

export default{
    props:{
        mobiles: Object,
         obj:Array
         
    }
}

</script>
