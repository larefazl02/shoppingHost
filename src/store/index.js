import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        categories: [
            { id: 1, name: 'گۆشت', priority: true, image: require('../../public/images/meats.webp') },
            { id: 2, name: 'سەوزە و میوە', priority: true, image: require('../../public/images/fruits.webp') },
            { id: 3, name: 'خواردن', priority: true, image: require('../../public/images/wshka.jpeg') },
            { id: 4, name: 'خواردنەوە', priority: true, image: require('../../public/images/beverage.jpeg') },
            { id: 5, name: 'چەرەسات', priority: false, image: require('../../public/images/nuts.webp') },
        ],

        products: [
            { id: 1, name: 'دۆشاوی ئاڵتونسا گەورە', price: 2500, quantity: 20, orderQuantity: 1, category: 3, image: require('../../public/products/altunsa_tomato.png') },
            { id: 2, name: 'برنجی مەرجان 5 کیلۆ', price: 13750, quantity: 10, orderQuantity: 1, category: 3, image: require('../../public/products/marjan5kg.jpeg') },
            { id: 4, name: 'زەیتی عافیە 2.9 لیتر', price: 7000, quantity: 14, orderQuantity: 1, category: 3, image: require('../../public/products/afia2.9l.jpeg') },
            { id: 5, name: 'چای ئەحمەد بۆندار', price: 4500, quantity: 200, orderQuantity: 1, category: 3, image: require('../../public/products/chabondar.png') },
            { id: 6, name: 'کۆکاکۆڵا 1.5 لیتر', price: 750, quantity: 200, orderQuantity: 1, category: 4, image: require('../../public/products/cola1.5l.jpeg') },
            { id: 3, name: 'دۆشاوی ئاڵتونسا گەورە', price: 2500, quantity: 200, orderQuantity: 1, category: 3, image: require('../../public/products/altunsa_tomato.png') },
            { id: 7, name: 'کۆکاکۆڵا 1.5 لیتر', price: 750, quantity: 200, orderQuantity: 1, category: 4, image: require('../../public/products/cola1.5l.jpeg') },
        ],
        locations: [
            { id: 1, name: 'دۆشاوی ئاڵتونسا گەورە', price: 2500, quantity: 20, orderQuantity: 1, category: 3, image: require('../../public/products/altunsa_tomato.png') },
            { id: 2, name: 'برنجی مەرجان 5 کیلۆ', price: 13750, quantity: 10, orderQuantity: 1, category: 3, image: require('../../public/products/marjan5kg.jpeg') },
            { id: 4, name: 'زەیتی عافیە 2.9 لیتر', price: 7000, quantity: 14, orderQuantity: 1, category: 3, image: require('../../public/products/afia2.9l.jpeg') },
            { id: 5, name: 'چای ئەحمەد بۆندار', price: 4500, quantity: 200, orderQuantity: 1, category: 3, image: require('../../public/products/chabondar.png') },
            { id: 6, name: 'کۆکاکۆڵا 1.5 لیتر', price: 750, quantity: 200, orderQuantity: 1, category: 4, image: require('../../public/products/cola1.5l.jpeg') },
            { id: 3, name: 'دۆشاوی ئاڵتونسا گەورە', price: 2500, quantity: 200, orderQuantity: 1, category: 3, image: require('../../public/products/altunsa_tomato.png') },
            { id: 7, name: 'کۆکاکۆڵا 1.5 لیتر', price: 750, quantity: 200, orderQuantity: 1, category: 4, image: require('../../public/products/cola1.5l.jpeg') },
        ],

        orders: [
        ]
        ,
        filters:[
            { id: 1, name:'گۆشت'},
            { id: 2, name: 'سەوزە و میوە'},
            { id: 3, name:'خواردن'},
            { id: 4, name:'خواردنەوە'},
            { id: 5, name:'چەرەسات'},
            { id: 6, name:'وشکە'},
        ]
    },
    getters: {
        orders: state => state.orders,
      
        categories: state => state.categories,

        products: state => state.products,

        filters: state => state.filters,

       
        priorityCategory: state => {
            return state.categories.filter(user => user.priority)
        },
        totalCheckout(state) {
            let total = 0;
            state.orders.forEach(v => {
                total = total + v.price * v.orderQuantity
            })
            return total
        }, 
        orderCount(state) {
            return state.orders.length
        }
    },

    mutations: {

        PLUS_ORDER(state, itemId) {
            state.orders.forEach(v => {
                if (v.id == itemId && v.orderQuantity < v.quantity) {
                    ++v.orderQuantity
                }
            })
            state.products.forEach(v => {
                if (v.id == itemId && v.orderQuantity < v.quantity) {
                    ++v.orderQuantity
                }
            })

        },
        MINUS_ORDER(state, itemId) {
            state.orders.forEach(v => {
                if (v.id == itemId && v.orderQuantity > 1) {
                    --v.orderQuantity
                }
            })
            state.products.forEach(v => {
                if (v.id == itemId && v.orderQuantity > 1) {
                    --v.orderQuantity
                }
            })

        },
        DELETE_ORDER(state, itemId) {
            let orders = state.orders.filter(v => v.id != itemId)
            state.orders = orders;
        },
        ADD_TO_BASKET(state, item) {
            state.orders.push(item)
        },

    },
    actions: {

        async deleteOrder({ commit }, item) {
            commit('DELETE_ORDER', item.id)
        },
        async plusOrder({ commit }, item) {
            commit('PLUS_ORDER', item.id)
        },
        async minusOrder({ commit }, item) {
            commit('MINUS_ORDER', item.id)
        },
        async addToBasket({ commit }, item) {
            commit('ADD_TO_BASKET', item)
        }
    },
    modules: {
    }
})
//icon right left]backgrounf y nav aka nayawe 
//dway dfr betaw darawa delete button cyak ka 
//