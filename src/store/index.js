import Vue from 'vue'
import Vuex from 'vuex'
import defaultList from '@/static/defaultList'

Vue.use(Vuex)

export default new Vuex.Store({
    state () {
        const items = JSON.parse(localStorage.getItem('data'))
        const list = items || defaultList


        return {
            list
        }
    },
    getters:{
        getList(state){
            return state.list
        }
    },
    mutations:{
        deleteUser(state, id){
            let index = state.list.findIndex(el => el.id == id)
            state.list.splice(index,1)
        },
        addUser(state, {name, surname, phone, email}){
            let id = 0;
            if(state.list.length > 0){
              id = state.list[state.list.length - 1].id + 1
            }
            state.list.push(
                {
                    id: id,
                    name: name,
                    surname: surname,
                    phone: phone,
                    email: email
                }
            )
        },
        edit(state, item){
            let id = item.item.id;
            let user = state.list.find(item => item.id == id )
                user.email = item.email
                user.name = item.name
                user.surname = item.surname
                user.phone = item.phone
        },
        addUserParse(state, item){
            let id = 0;
            if(state.list.length > 0){
              id = state.list[state.list.length - 1].id + 1
            }
            state.list.push(
                {
                    id: id,
                    name: item.name,
                    surname: item.surname,
                    phone: item.phone,
                    email: item.email
                }
            )
        }
    },
    actions:{
        deleteUser(ctx, id){
            ctx.commit('deleteUser',id)
        },
        addUser(ctx,{name, surname, phone, email}){
            ctx.commit('addUser',{name, surname, phone, email})
        },
        edit(ctx,item){
            ctx.commit('edit', item)
        },
        addUserParse(ctx,item){
            ctx.commit('addUserParse', item)
        }
    }
})
