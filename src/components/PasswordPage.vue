<template>
	<v-container>
		<NavSettingComponents></NavSettingComponents>
		<v-col>
			<h2 class="my-5">گۆڕینی وشەی نهێنی</h2>
		</v-col>

		<v-form ref="form" v-model="valid" lazy-validation>
			<v-text-field v-model="oldPassword" :rules="passwordRule" label="وشەی نهێنی پێشوو" required></v-text-field>

			<v-text-field v-model="newPassword" :rules="passwordRule" label="وشەی نهێنی نوێ" required></v-text-field>
			<v-text-field v-model="newPassword2" :rules="passwordRule" label="وشەی نهێنی دووبارە" required></v-text-field>
			<v-col class="my-4">
				<v-btn :disabled="!valid" width=100% outlined color="green" @click="validate">
					هەڵگرتن
				</v-btn>
			</v-col>
		</v-form>
	</v-container>
</template>

<script>
	import NavSettingComponents from './NavSettingComponents'
	export default {
		components: {
			NavSettingComponents
		},
		data: () => ({
			valid: true,
			password: '',
			passwordRule: [
				v => !!v || 'تکایە ئەم خاتەیە بە دروستی پڕبکەرەوە',
				v => (v && v.length >= 8) || 'پێویستە لە هەشت کارەکتەر زیاتربێث',
			],

		}),

		methods: {
			validate() {
				this.$refs.form.validate()
			},
		},
	}
</script>

<style>
</style>