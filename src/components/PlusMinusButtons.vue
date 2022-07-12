<template>
	<v-row>
		<v-btn fab depressed @click="minusOrder(item)" x-small plain style="align-self: center;">
			<v-icon small>
				mdi-minus
			</v-icon>
		</v-btn>
		<h4 class="text-center mx-4" style="align-self: center;">
			{{item.orderQuantity}}
		</h4>
		<v-btn fab depressed @click="plusOrder(item)" x-small plain style="align-self: center;">
			<v-icon small>
				mdi-plus
			</v-icon>
		</v-btn>
	</v-row>
</template>

<script>
	export default {
		props: ['item'],
		methods: {
			plusOrder(item) {
				this.$store.dispatch('plusOrder', item)
			},
            minusOrder(item) {
				this.$store.dispatch('minusOrder', item)
			},
		},
	}
</script>

<style>
</style>