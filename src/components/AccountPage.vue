<template>
	<v-container>
		<NavSettingComponents></NavSettingComponents>
		<v-row>
			<v-col cols=6>
				<h2 class="my-5">زانیاری هەژمار</h2>
			</v-col>
			<v-col cols=6 class="text-left">
				<v-btn class="my-5" @click="editMode==false ? editMode=true : editMode=false">گۆڕانكاری</v-btn>
			</v-col>
		</v-row>

		<v-text-field value="لەرێ" label="ناوی یەکەم" outlined readonly></v-text-field>

		<v-text-field value="فاضل" label="ناوی دووەم" outlined readonly></v-text-field>

		<v-text-field value="07707707147" label="ژمارەی مۆبایل" outlined readonly></v-text-field>

		<v-text-field value="larefadhil@gmail.com" label="ئیمەیل" outlined readonly></v-text-field>

		<v-col class="my-3">
			<v-btn width=100% outlined color="green" v-show="editMode">هەڵگرتن</v-btn>
		</v-col>

		<v-dialog v-model="dialog" max-width="400">
			<template v-slot:activator="{ on, attrs }">
				<v-col>
					<v-btn width=100% outlined color="red" dark v-bind="attrs" v-on="on">
						سڕینەوەی هەژمار
					</v-btn>
				</v-col>
			</template>
			<v-card>
				<v-card-title class="text-h6 red--text">
					دڵنیای لە سڕینەوەی هەژمارەکەت؟
				</v-card-title>
				<v-card-text>پاش سڕینەوە ناتوانیت بگەڕێیتەوە سەر هەمان هەژمار!</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="green darken-1" text @click="dialog = false">
						نەخێر
					</v-btn>
					<v-btn color="red darken-1" text @click="dialog = false">
						بەڵێ
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>

	</v-container>
</template>

<script>
	import NavSettingComponents from './NavSettingComponents'
	export default {
		data() {
			return {
				editMode: false,
				dialog: false,

			}
		},
		components: {
			NavSettingComponents
		}
	}
</script>

<style>
</style>