<template>
	<v-container>
		<NavAbout></NavAbout>
		<v-col>
			<h2 class="my-5">سیستەمی بازاری ئۆنڵاین</h2>
		</v-col>

		<v-list class="my-5">
			<router-link to="/about">
				<v-list-item>
					<v-list-item-title>
						<span>تایبەتمەندی ئەپڵیکەیشن</span>
						<span style="float:left">
							<v-icon color="primary">
								mdi-arrow-left
							</v-icon>
						</span>
					</v-list-item-title>
				</v-list-item>
			</router-link>
			<v-divider></v-divider>
			<router-link to="/about">
				<v-list-item>
					<v-list-item-title>
						<span>یاساکانی بەکارهێنان</span>
						<span style="float:left">
							<v-icon color="primary">
								mdi-arrow-left
							</v-icon>
						</span>
					</v-list-item-title>
				</v-list-item>
			</router-link>
			<v-divider></v-divider>

			<v-list-item-group class="mt-10">
				<a href="https://www.facebook.com/smartmedapp/">
					<v-list-item>
						<v-list-item-title>
							<span>فەیسبووک</span>
							<span style="float:left">
								<v-icon color="primary">
									mdi-arrow-left
								</v-icon>
							</span>
						</v-list-item-title>
					</v-list-item>
				</a>
				<v-divider></v-divider>
				<a href="https://www.instagram.com/smartmedapp_/">
					<v-list-item>
						<v-list-item-title>
							<span>ئینستاگرام</span>
							<span style="float:left">
								<v-icon color="primary">
									mdi-arrow-left
								</v-icon>
							</span>
						</v-list-item-title>
					</v-list-item>
				</a>
				<v-divider></v-divider>
				<a href="https://www.youtube.com/channel/UC4h8JKxp1Y5MweHyPeNAgTw">
					<v-list-item>
						<v-list-item-title>
							<span>یوتیوب</span>
							<span style="float:left">
								<v-icon color="primary">
									mdi-arrow-left
								</v-icon>
							</span>
						</v-list-item-title>
					</v-list-item>
				</a>
				<v-divider></v-divider>

			</v-list-item-group>
		</v-list>
<v-col class="text-center">وەشانی 1.0</v-col>
	</v-container>
</template>

<script>
	import NavAbout from './NavAbout'
	export default {
		components: {
			NavAbout
		}
	}
</script>

<style>
</style>