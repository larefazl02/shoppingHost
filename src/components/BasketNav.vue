<template>

	<router-link to='/basket' aria-disabled="true" v-show="orderCount">

		<v-bottom-navigation fixed>
			<v-list dense color="primary" class="my-1 mx-10" rounded width=-webkit-fill-available>
				<v-list-item-group >

					<v-list-item>
						<v-list-item-icon>
							<v-badge color="error" overlap xs-small :content="orderCount" :value="orderCount">
								<v-icon color="white">mdi-basket</v-icon>
							</v-badge>
						</v-list-item-icon>
						<v-list-item-title style="color:white">بینینی سەبەتە</v-list-item-title>
						<v-list-item-title style="color:white" class="text-left">{{totalCheckout}} د.ع</v-list-item-title>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-bottom-navigation>
	</router-link>

</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		computed: {
			...mapGetters([
				'totalCheckout',
				'orderCount'
			]),
		}

	}
</script>

<style>
</style>