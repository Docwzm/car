<template>
	<view class="uni-collapse">
		<slot />
	</view>
</template>
<script>
	export default {
		name: 'UniCollapse',
		props: {
			accordion: {
				// 是否开启手风琴效果
				type: [Boolean, String],
				default: false
			}
		},
		data() {
			return {}
		},
		provide() {
			return {
				collapse: this
			}
		},
		created() {
			this.childrens = []
		},
		methods: {
			onChange() {
				let activeItem = []
				this.childrens.forEach((vm, index) => {
					if (vm.isOpen) {
						activeItem.push(vm.nameSync)
					}
				})
				this.$emit('change', activeItem)
			},
			resize() {
				this.childrens.forEach(vue => {
					console.log('更新')
					vue._getSize()
				})
			}
		}
	}
</script>
<style>
	@charset "UTF-8";

	.uni-collapse {
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column
	}

</style>