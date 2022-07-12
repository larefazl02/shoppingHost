<template>
	<div>
		<v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
			<v-card>
				<v-toolbar dark color="primary">
					<v-btn icon dark @click="$emit('close')">
						<v-icon>mdi-close</v-icon>
					</v-btn>
					<v-toolbar-title></v-toolbar-title>
				</v-toolbar>

				<div class="text-center"> <img :src='item.image' height=200px class="my-2">
				</div>
				<v-card-title>
					<h4>{{item.name}}</h4>
				</v-card-title>

				<v-card-text>
					<h4> نرخ {{item.price}} دینار</h4>
					<br>
					<v-row>
						<v-col>
							<h4>دانە:</h4>
						</v-col>
						<PlusMinusButtons :item="item"></PlusMinusButtons>
						<v-col>
							<v-row>

							</v-row>
						</v-col>

					</v-row>
					<v-row>
						<v-col class="text-right" cols="7" style="align-self:center">
							<h3> نرخی گشتی :{{item.price*item.orderQuantity}}
							</h3>
						</v-col>
						<v-col cols="5" class="text-left">
							<v-btn @click="$emit('close'), addToBasket()" style="color:white" color="primary">
								<v-icon small>
									mdi-basket-fill
								</v-icon> هەڵگرتن
							</v-btn>
						</v-col>
					</v-row>
				</v-card-text>

				<v-divider></v-divider>
				<v-card-text class="mt-7">
					<RelatedItems></RelatedItems>
				</v-card-text>

			</v-card>
		</v-dialog>
	</div>
</template>
<script>
	import PlusMinusButtons from './PlusMinusButtons.vue'
	import RelatedItems from './RelatedItems.vue'
	export default {
		// props: ['item', 'detailDialog'],
		props: {
			item: { type: Object, require: true },
			detailDialog: { type: Boolean, default: false },
		},

		data() {
			return {
				dialog: false,
			}
		},
		watch: {
			detailDialog() {
				this.dialog = this.detailDialog
			}
		},
		methods: {

			addToBasket() {
				this.$store.dispatch('addToBasket', this.item, this.order)
			},
		},
		components: {
			PlusMinusButtons,
			RelatedItems
		}
	}
</script>