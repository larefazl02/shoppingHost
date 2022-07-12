<template>
	<v-container>
		<NavSettingComponents></NavSettingComponents>
		<v-row>
			<v-col cols=6>
				<h2 class="my-5">ناونیشانەکان</h2>
			</v-col>
			<v-col cols=6 class="text-left">
				<v-btn class="my-5" @click="editMode==false ? editMode=true : editMode=false">زیادکردن</v-btn>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import NavSettingComponents from './NavSettingComponents'
	export default {
		components: {
			NavSettingComponents
		}
	}
</script>

<style>
</style>