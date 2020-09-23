<template>
	<div class="block">
		<div class="block__wrap">
			<input class="block__inp" type="text" placeholder="name" v-model="name">
			<input class="block__inp" type="text" placeholder="surname" v-model="surname">
			<input class="block__inp" type="text" placeholder="phone" v-model="phone">
			<input class="block__inp" type="text" placeholder="email" v-model="email">
		</div>
		<p v-if='error' class="color_red">name and phone fields are required</p>

		<button v-if="!item" class="btn__save" @click="addUser({name, surname, phone, email})">save</button>
		<button v-if="item" class="btn__save" @click="edit({name, surname, phone, email, item})">edit</button>
	
		<div class="mt block__wrap">
			<textarea v-model="jsonParese" placeholder="Import JSON" name="name" id="" cols="30" rows="10"></textarea>
			<button @click="addUserParse" class="btn__save">Import JSON</button>
		</div>
	</div>
</template>

<script>
export default {
	name:'page-edit',
	data(){
		return{
			name:'',
			surname:'',
			phone:'',
			email:'',
			item: this.$route.query.item,
			jsonParese:'',
			error: false
		}
	},
	methods:{
		addUser({name, surname, phone, email}){
			if(name.length >0 && phone.length >0){
				this.$store.dispatch("addUser", {name, surname, phone, email}) 
				{
					this.name = ''
					this.surname =''
					this.phone =''
					this.email =''
				}
				this.$router.push('/')
			}
			else{
				this.error = true
			}
		},
		editUser(){
			if(this.item){
				this.name = this.item.name
				this.surname = this.item.surname
				this.phone = this.item.phone
				this.email = this.item.email
			}
		},
		edit({name, surname, phone, email, item}){
			if(name.length >0 && phone.length >0){
				this.$store.dispatch("edit", {name, surname, phone, email, item})
				this.$router.push('/')
			}
			else{
				this.error = true
			}
		},
		addUserParse(){
			let userJson = JSON.parse(this.jsonParese)
			this.$store.dispatch("addUserParse", userJson)
		}
	},
	mounted(){
		this.editUser()
	}
}
</script>

<style scoped>
.block__inp::placeholder{
    color: #333;
    font-size: 18px;
}

.block__wrap{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.mt{
	margin-top: 25px;
}

.block__inp{
    border: none;
    width: 400px;
    height: 35px;
    border-radius: 11px;
    background: #999;
    font-size: 21px;
    padding-left: 30px;
    margin-top: 30px;
}

.btn__save{
	padding: 10px 25px;
	font-size: 21px;
	background: rgb(96, 210, 30);
	border-radius: 11px;
	border: none;
	margin-top: 50px;
	transition: .5s ease;
}

.btn__save:hover{
	background: rgb(74, 160, 16);
	color: rgb(241, 204, 204);
}

.color_red{
	color: red;
}
</style>
