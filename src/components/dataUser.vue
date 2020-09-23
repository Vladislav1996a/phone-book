<template>
    <div class="block">
        <div class="block__wrap">
            <router-link class="btn__add" :to="{name:'page-edit'}">Add user</router-link>
        </div>
        <table>
            <tr>
                <th>name</th>
                <th>surname</th>
                <th>phone</th>
                <th>email</th>
                <th>action</th>
            </tr>
             <tr v-for="item in list" :key="item.id">
                <td>{{item.name}}</td>
                <td>{{item.surname}}</td>
                <td>{{item.phone}}</td>
                <td>{{item.email}}</td>
                <td>
                    <button class="btn__delete" @click="deteleUser(item.id)">delete</button>
                    <router-link class="btn__edit" :to="{name:'page-edit', query:{item}}">edit</router-link>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>

export default {
    name: 'page-user',
    computed: {
      list () {
        return this.$store.getters.getList
      },
    },
    methods:{
        deteleUser(item){
            return this.$store.dispatch("deleteUser", item)
        }
    }
}
</script>

<style scoped>
.block{
    text-align: center;
}
 th, td{
    border: 1px solid black;
    padding: 12px;

}
table {
    border-collapse: collapse;
    margin: 0 auto;
    margin-top: 60px;
    margin-bottom: 50px;
}
.block__wrap{
    margin-top: 50px;
}
.btn__delete{
    border: none;
    background: rgb(255, 1, 1);
    border-radius: 11px;
    color: #fff;
    padding: 3px 19px;
    margin: 0 auto;
    transition: .5s ease;
}
.btn__delete:hover{
    background: rgb(146, 24, 24);
}
.btn__edit{
    border: none;
    background: rgb(19, 211, 19);
    border-radius: 11px;
    color: #fff;
    padding: 3px 19px;
    display: block;
    margin: 0 auto;
    margin-top: 15px;
    transition: .5s ease;
}
.btn__edit:hover{
    background: rgb(29, 145, 5);
}
.btn__add{
    padding: 20px 85px;
    background: rgb(19, 211, 19);
    color: #444;
    margin-top: 50px;
    border-radius: 11px;
    font-size: 25px;
    transition: .5s ease;
}
.btn__add:hover{
    background: rgb(29, 145, 5);
    color: #fff;
}

a{
    text-decoration: none;
}
</style>
