<template>
	<v-container>
		<NavSettingComponents></NavSettingComponents>
		<v-col>
			<h2 class="my-5">گۆڕینی ئیمەیڵ</h2>
		</v-col>

		<v-form ref="form" v-model="valid" lazy-validation>
			<v-text-field v-model=oldEmail label="ئیمەیڵی پێشوو" required readonly></v-text-field>

			<v-text-field v-model="email" :rules="emailRule" label="ئیمەیڵی نوێ" required></v-text-field>
			<v-text-field v-model="password" :rules="passwordRule" label="وشەی نهێنی" required></v-text-field>
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
			oldEmail: 'larefadhil@gmail.com',
			password: '',
			passwordRule: [
				v => !!v || 'تکایە ئەم خاتەیە بە دروستی پڕبکەرەوە',
				v => (v && v.length >= 8) || 'پێویستە لە هەشت کارەکتەر زیاتربێث',
			],
            email:'',
			emailRule: [
				v => !!v || 'تکایە ئەم خاتەیە بە دروستی پڕبکەرەوە',
				v => /.+@.+\..+/.test(v) || 'پێویستە ئیمەیڵێکی بەردەستبێت',
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