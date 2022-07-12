<template>
	<v-container>
		<NavBasket></NavBasket>
        <v-col class="mt-10"><h2>کاڵا هەڵگیراوەکان</h2>
        </v-col>
        <v-divider></v-divider>
		<v-col v-for="item in orders" :key="item">
			<v-card class="my-1" flat>
				<v-row class="pa-1">
					<v-col cols=9 style="align-self: center;">
						<span @click="deleteOrder(item)">
							<v-icon color="red" small>mdi-trash-can</v-icon> {{item.name}}
						</span>
						<v-row class="py-3">
							<v-col>{{item.price*item.orderQuantity}}د.ع</v-col>
							<v-col cols="6" style="align-self: center;">
								<PlusMinusButtons :item="item"></PlusMinusButtons>
							</v-col>
						</v-row>
					</v-col>

					<v-col cols=3>
						<v-img :src='item.image' height=70px width="60px" style="float:left">
						</v-img>
					</v-col>
				</v-row>
				<v-divider></v-divider>
				<!-- <v-card-title>
							<div class="text-subtitle-1">
								<p>{{item.name}}</p>
							</div>
						</v-card-title> -->

				<!-- 
							<v-card-actions>

								<v-btn color="deep-purple lighten-2" text>
									Order Now
								</v-btn>
							</v-card-actions> -->
			</v-card>

		</v-col>
		<v-bottom-navigation fixed>

			<v-list dense color="primary" class="my-1 mx-10" rounded width=-webkit-fill-available>
				<v-list-item-group>

					<v-list-item>
						<v-list-item-icon>
							<v-icon color="white"> mdi-truck-fast</v-icon>
						</v-list-item-icon>
						<v-list-item-title style="color:white">پارەدانی کۆتایی</v-list-item-title>
						<v-list-item-title style="color:white; text-align:left; font-weight: bolder;">{{totalCheckout}} د.ع</v-list-item-title>
					</v-list-item>
				</v-list-item-group>
			</v-list>

		</v-bottom-navigation>
	</v-container>
</template>

<script>
	import { mapGetters } from 'vuex'
	import NavBasket from './NavBasket.vue'
	import PlusMinusButtons from './PlusMinusButtons.vue'

	export default {
		computed: {
			...mapGetters([
				'orders',
				'totalCheckout'

			]),
			subTotal() {
				return this.item.price * 2
			}
		},
		components: {
			NavBasket: NavBasket,
			PlusMinusButtons: PlusMinusButtons
		},
		methods: {

			deleteOrder(item) {
				this.$store.dispatch('deleteOrder', item)
			}
		}
	}
</script>

<style>
</style>