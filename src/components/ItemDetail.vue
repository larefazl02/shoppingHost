<template>
	<div class="text-center">
		<v-dialog v-model="dialog" width="500">
			<template v-slot:activator="{ on, attrs }">
				<div v-bind="attrs" v-on="on" cols="12" sm="6" md="4" lg="2" xl="3" style="position:absolute;width:100%; height:100%;"></div>
			</template>

			<v-card>
				<div class="text-center"> <img :src='item.image' height=200px class="my-2">
				</div>
				<v-card-title>
					<!-- <v-icon aria-hidden="false" @click="dialog = false" small>
						mdi-close
					</v-icon> -->
					{{item.name}}
				</v-card-title>

				<v-card-text>
					<h3> نرخ {{item.price}} دینار</h3>
					<br>
					<v-row>
						<v-col>
							<h4>دانە:</h4>
						</v-col>
                        <PlusMinusButtons :item="item"></PlusMinusButtons>
						<!-- <v-col class="mx-0  px-0 text-left">
							<v-btn>
								<v-icon small>
									mdi-plus
								</v-icon>
							</v-btn>
						</v-col>
						<v-col class="mx-0 px-0">
							<v-text-field label="Solo" solo dense hide-details></v-text-field>
						</v-col>
						<v-col class="mx-0 px-0">
							<v-btn>
								<v-icon small>
									mdi-minus
								</v-icon>
							</v-btn>
						</v-col> -->
						<v-col>
							<v-row>
							
							</v-row>
						</v-col>

					</v-row>

				</v-card-text>

				<v-divider></v-divider>

				<v-card-actions  class="pa-3">
					<v-col class="text-right">
						<h5> نرخی گشتی :{{item.price*item.orderQuantity}}
						</h5>
					</v-col>
					<!-- <v-spacer></v-spacer> -->
					<v-col>
						<v-btn @click="dialog = false, addToBasket()" style="color:white" color="primary">
							<v-icon small>
								mdi-basket-fill
							</v-icon> هەڵگرتن
						</v-btn>
					</v-col>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
import PlusMinusButtons from './PlusMinusButtons.vue'
	export default {
		props: ['item'],

		data() {
			return {
				dialog: false,
				price: this.item.price,

			}
		},
		methods: {

			addToBasket() {
				this.$store.dispatch('addToBasket', this.item, this.order)
			},
		},
        components:{
            PlusMinusButtons:PlusMinusButtons
        }
	}
</script>
