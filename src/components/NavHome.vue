	<template>
	<div class="py-4">
		<v-app-bar dense fixed color="primary">

			<v-toolbar-title>
				<v-app-bar-nav-icon @click="drawer = true" color="white"></v-app-bar-nav-icon>

			</v-toolbar-title>
			<v-spacer></v-spacer>

			<v-icon color="white" @click="showDetail()">mdi-filter</v-icon>
			<v-text-field chips clearable hide-details hide-selected single-line item-text="name" item-value="symbol" label="گەڕان" prepend-inner-icon="mdi-magnify" dark>
			</v-text-field>
			<FilterFullScreen :detailDialog="detailDialog" @close="detailDialog = false"></FilterFullScreen>

			<v-spacer></v-spacer>

			<router-link to='/basket'>
				<v-badge color="error" overlap xs-small :content="orderCount" :value="orderCount">
					<v-icon color="white">mdi-basket</v-icon>
				</v-badge>
			</router-link>

		</v-app-bar>

		<v-navigation-drawer v-model="drawer" fixed temporary right>
			<v-list>
				<v-list-item-group v-model="group" active-class="text--accent-4">

					<v-list-item>
						<router-link to="/">
							<v-list-item-icon color="primary">
								<v-icon color="primary">mdi-home-outline </v-icon>
								<div class="mx-2">سەرەکی</div>
							</v-list-item-icon>
							<v-list-item-title>
							</v-list-item-title>
						</router-link>
					</v-list-item>

					<v-list-item>
						<router-link to="/">
							<v-list-item-icon>
								<v-icon color="primary">mdi-tag-outline </v-icon>
								<div class="mx-2">ئۆفەرەکان</div>
							</v-list-item-icon>
							<v-list-item-title>
							</v-list-item-title>
						</router-link>
					</v-list-item>

					<v-list-item>
						<router-link to="/">
							<v-list-item-icon>
								<v-icon color="primary">mdi-format-list-checks</v-icon>
								<div class="mx-2">داواکاریەکانی پێشوو</div>
							</v-list-item-icon>
							<v-list-item-title>
							</v-list-item-title>
						</router-link>
					</v-list-item>

					<v-list-item>
						<router-link to="/setting">
							<v-list-item-icon>
								<v-icon color="primary">mdi-tooltip-edit-outline</v-icon>
								<div class="mx-2">ڕێکخستن</div>
							</v-list-item-icon>
							<v-list-item-title>
							</v-list-item-title>
						</router-link>
					</v-list-item>
					<v-list-item>
						<router-link to="/about">
							<v-list-item-icon>
								<v-icon color="primary">mdi-alert-circle-outline </v-icon>
								<div class="mx-2">دەربارە</div>
							</v-list-item-icon>
							<v-list-item-title>
							</v-list-item-title>
						</router-link>
					</v-list-item>
					<v-list-item>
						<router-link to="/signup">
							<v-list-item-icon>
								<v-icon color="primary">mdi-account </v-icon>
								<div class="mx-2">دروستکردنی هەژمار</div>
							</v-list-item-icon>
							<v-list-item-title>
							</v-list-item-title>
						</router-link>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>
	</div>
</template>
    <script>
	import { mapGetters } from 'vuex'
	import FilterFullScreen from './FilterFullScreen'

	export default {
		data: () => ({
			drawer: false,
			group: null,
			detailDialog: false,

		}),

		watch: {
			group() {
				this.drawer = false
			},
		},
		methods: {
			true() {
				this.model = 'ture'
			},
			showDetail() {
				this.detailDialog = true
			}
		},
		computed: {
			...mapGetters([
				'orderCount'
			]),
		},
		components: {
			FilterFullScreen
		}
	}
</script>