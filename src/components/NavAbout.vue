<template>
	<div class="py-4">
	<v-app-bar dense fixed color="primary">
		<v-app-bar-nav-icon @click="drawer = true" color="white"></v-app-bar-nav-icon>

	
		<v-spacer></v-spacer>
			<span class=" text-center white--text">دەربارە</span>
		<v-spacer></v-spacer>

		<router-link to='/'>

			<v-icon color="white">
				mdi-arrow-left
			</v-icon>
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

				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>
        </div>
</template>
    <script>
	export default {
		data: () => ({
			drawer: false,
			group: null,
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
	}
</script>