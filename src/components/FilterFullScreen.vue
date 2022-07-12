<template>
	<div>
		<v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
			<v-card>
				<v-toolbar dark color="primary">
					<v-btn icon dark @click="$emit('close')">
						<v-icon>mdi-close</v-icon>
					</v-btn>
				</v-toolbar>

				<v-card-title>
					<div>
						<h4>فلتەرکردن:</h4>
					</div>
				</v-card-title>

				<v-card-text>

					<v-row>
						<v-col v-for="n in filters" :key="n" cols="12" sm="6" md="4" lg="4" xl="3" class="py-0 my-0">
							<v-checkbox v-model="ex4" color="primary" :value="n.name" :label='n.name' hide-details></v-checkbox>
						</v-col>
					</v-row>

					<v-row>
						<v-col class="text-right" cols="7" style="align-self:center">

						</v-col>
						<v-col cols="5" class="text-left">
						</v-col>
					</v-row>
				</v-card-text>

				<v-divider></v-divider>
				<v-card-text class="mt-7">
				</v-card-text>

			</v-card>
		</v-dialog>
	</div>
</template>
<script>
	import { mapGetters } from 'vuex'
	export default {
		props: {
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
		computed: {
			...mapGetters([
				'filters'
			])
		}
	}
</script>