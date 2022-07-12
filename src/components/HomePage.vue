<template>
	<v-container>
		<NavHome></NavHome>
		<v-col cols="12" sm="12">
			<h3 class="mt-3">کۆمەڵەکان</h3>
		</v-col>
		<div class="wrapper">
			<v-col v-for="item in priorityCategory" :key="item" cols="6" sm="6" md="4" lg="2" xl="3" class="px-1">
				<router-link :to="'/categories/'+ item.id">
					<v-card style="overflow-y: auto;" flat outlined>

						<v-img :src='item.image' height=100px>
							<div class="pr-2" style="position:absolute; bottom:0px; background: rgba(0, 0, 0, 0.4); width:100%; color:white">
								{{item.name}}
							</div>
						</v-img>
					</v-card>
				</router-link>

			</v-col>
		</div>
		<HomeItems>
		</HomeItems>
		<BasketNav></BasketNav>
	</v-container>
</template>
<script>
	import { mapGetters } from 'vuex'
	import HomeItems from './HomeItems.vue'
	import BasketNav from './BasketNav.vue'
	import NavHome from './NavHome.vue'
	export default {
		data() {
			return {
			}
		},
		components: {
			HomeItems: HomeItems,
			BasketNav: BasketNav,
			NavHome: NavHome,
		},
		computed: {

			...mapGetters([
				'priorityCategory'
			]),


		}
	}
</script>
<style>
	a {
		text-decoration: none;
	}
	.wrapper {
		margin: 0px;
		padding: 0px;
		display: flex;
		overflow-x: auto;
	}
	.wrapper::-webkit-scrollbar {
		width: 0;
	}
</style>


