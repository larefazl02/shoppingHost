<template>
	<div>
		<NavHome></NavHome>

		<v-col cols="12">
			<h3 class="my-2">{{name}}</h3>
		</v-col>
		<v-row>

			<v-col v-for="(item, index) in filteredProducts" :key="index" cols="12" sm="6" md="4" lg="4" xl="3" @click="showDetail(item)">
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
									{{item.price}} دینار
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
		<div class="wrapper">
			<v-col v-for="item in categories" :key="item" cols="6" sm="6" md="4" lg="2" xl="3" class="px-1">
				<router-link :to="'/categories/'+ item.id">
					<v-card style="overflow-y: auto;" flat outlined>

						<v-img :src='item.image' height=100px>
							<div class="pr-2" style="position:absolute; bottom:0px; background: rgba(0, 0, 0, 0.4); width:100%; color:white">
								{{item.name}}
							</div>
						</v-img>

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
				</router-link>

			</v-col>
		</div>
		<ItemDetailFullScreen :item="item" :detailDialog="detailDialog" @close="detailDialog = false"></ItemDetailFullScreen>

	</div>
</template>

<script>
	import ItemDetailFullScreen from './ItemDetailFullScreen.vue'
	import { mapGetters } from 'vuex'
	import NavHome from './NavHome.vue'

	export default {
		data() {
			return {
				detailDialog: false,
				id: this.$route.params.id,
				name: '',
				filteredProducts: []
			}
		},

		components: {
			ItemDetailFullScreen,
			NavHome
		},
		methods: {
			showDetail(item) {
				this.item = item
				this.detailDialog = true
			}
		},
		computed: {
			...mapGetters([
				'products',
				'categories'
			]),

		},
		created() {

			this.products.forEach(item => {
				if (item.category == this.id) {
					this.filteredProducts.push(item)
				}

			});
			this.categories.forEach(item => {
				if (item.id == this.id) {
					this.name = item.name
				}

			});
		},
	}
</script>

<style>
</style>