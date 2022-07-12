<template>
	<div>
		<v-row>
			<!-- Cards -->
			<v-col cols="12" class="mt-9 pb-0">
				<h3 class="ma-0">پڕفڕۆشترین کاڵاکان</h3>
			</v-col>
			<v-col v-for="(item, index) in products" :key="index" cols="12" sm="6" md="4" lg="4" xl="3" @click="showDetail(item)">
				<!-- <router-link :to="'/order/'+ item.id"> -->
				<v-card flat>
					<!-- <ItemDetail :item="item"></ItemDetail> -->
					<v-card-text>
						<v-row align="center">
							<v-col cols="8">
								<h4 class="font-weight-light">
									{{item.name}}
								</h4>
								<h5 class=" my-2 font-weight-light">
									{{money(item)}}{{a}} دینار
								</h5>
							</v-col>
							<v-col cols="4" class="text-center">
								<div style="width: 80px; height: 80px">
									<img :src='item.image' style="width: 100%; height: 100%; object-fit: contain">
								</div>
							</v-col>
						</v-row>

					</v-card-text>
				</v-card>
				<v-divider></v-divider>
			</v-col>
		</v-row>
		<!-- 2 CARDS IN A ROW  -->
		<!-- <v-row>
			<v-col cols="12" sm="12">
			</v-col>
			<v-col v-for="item in products" :key="item" cols="6" sm="6" md="4" lg="2" xl="3">
				<v-card style="overflow-y: auto;text-align: center; position:relative; border-color:#ffebeb" flat outlined rounded="xl">
					<ItemDetail :item="item"></ItemDetail>

					<img :src='item.image' height=100px class="my-2" style="vertical-align: -webkit-baseline-middle;">

					<h5 class="font-weight-light text-center">
						{{item.name}}
					</h5>
					<v-divider></v-divider>

					<h5 class=" my-2 font-weight-light text-center">
						{{item.price}} دینار
					</h5>
				</v-card>

			</v-col>

		</v-row>-->

		<ItemDetailFullScreen :item="item" :detailDialog="detailDialog" @close="detailDialog = false"></ItemDetailFullScreen>
	</div>
</template>

<script>
	// import ItemDetail from './ItemDetail.vue'
	import ItemDetailFullScreen from './ItemDetailFullScreen.vue'
	import { mapGetters } from 'vuex'
	export default {
		data() {
			return {
				detailDialog: false,
				item: {}
			}
		},
		components: {
			// ItemDetail
			ItemDetailFullScreen
		},

		computed: {
			...mapGetters([
				'products'
			]),
		},

		methods: {
			showDetail(item) {
				this.item = item
				this.detailDialog = true
			},
			money(item) {
				let b = item.price
				if (b > 999 && b < 9999) {
					let number = b.toString()
					let firstNumber = number.slice(0, 1)
					let restNumbers = number.slice(1)
					number = firstNumber + ',' + restNumbers
					return number
				}
				else if (b > 9999 && b < 99999) {
					let number = b.toString()
					let firstNumber = number.slice(0, 2)
					let restNumbers = number.slice(2)
					number = firstNumber + ',' + restNumbers
					return number
				}
				else {
					let a = b
					return a
				}
			}
		},
	}
</script>

<style>
</style>