<template>
	<v-container>
		<NavSetting></NavSetting>

		<!-- Rendered `v-list-group` content HTML Output -->
		<v-divider></v-divider>

		<v-list class="my-5">
			<v-list-item-group>
				<router-link to="/account">
					<v-list-item>
						<v-list-item-title>
							<span>زانیاری هەژمار</span>
							<span style="float:left">
								<v-icon color="primary">
									mdi-arrow-left
								</v-icon>
							</span>
						</v-list-item-title>
					</v-list-item>
				</router-link>
				<v-divider></v-divider>
				<router-link to="/location">
					<v-list-item>
						<v-list-item-title>
							<span>ناونیشانە خەزنکراوەکان</span>
							<span style="float:left">
								<v-icon color="primary">
									mdi-arrow-left
								</v-icon>
							</span>
						</v-list-item-title>
					</v-list-item>
				</router-link>
				<v-divider></v-divider>
				<router-link to="/password">
					<v-list-item>
						<v-list-item-title>
							<span>گۆڕینی وشەی نهێنی</span>
							<span style="float:left">
								<v-icon color="primary">
									mdi-arrow-left
								</v-icon>
							</span>
						</v-list-item-title>
					</v-list-item>
				</router-link>
				<v-divider></v-divider>
				<router-link to="/email">
					<v-list-item>
						<v-list-item-title>
							<span>گۆڕینی ئیمەیل</span>
							<span style="float:left">
								<v-icon color="primary">
									mdi-arrow-left
								</v-icon>
							</span>
						</v-list-item-title>
					</v-list-item>
				</router-link>
				<v-divider></v-divider>
				<v-list-item class="mt-10">
					<v-list-item-title>
						<span>چووەنەدەرەوە</span>
						<span style="float:left">
							<v-icon color="red">
								mdi-arrow-left
							</v-icon>
						</span>
					</v-list-item-title>
				</v-list-item>
				<v-divider></v-divider>
			</v-list-item-group>
		</v-list>
	</v-container>
</template>

<script>
	import NavSetting from './NavSetting';
	export default {
		components: {
			NavSetting
		}
	}
</script>

<style>
</style>