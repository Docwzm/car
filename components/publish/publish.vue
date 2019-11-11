<template>
	<view class="publish-wrap">
		<view class="top">
			<view class="start">{{data.start}}</view>
			<view class="time">{{data.time}}</view>
			<view class="end">{{data.end}}</view>
		</view>
		<view class="bottom">
			<view class="left">
				<view class="name-wrap">name：{{data.name}}</view>
				<view class="bakup-wrap">bakup：{{data.bakup}}</view>
			</view>
			<view class="right">
				<button v-if="canCancel" type="primary" @click="cancel">cancel</button>
				<button v-else type="primary" @click="call">call</button>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		name: 'publish',
		props: {
			canCancel: {
				type: Boolean,
				default: false
			},
			data: {
				type: Object,
				default:() => {}
			}
		},
		data() {
			return {}
		},

		methods: {
			call() {
				this.$emit('call')
			},
			cancel() {
				this.$emit('cancel')
			}
		}
	}
</script>

<style lang="scss">
	@import '@/styles/mixin.scss';

	.publish-wrap {
		background: #fff;
		margin-top: 20upx;
	}

	.top {
		padding: 50upx 40upx;
		@include uni-border-bottom(#c8c7cc) text-align: center;

		.start,
		.end {
			flex: 2;
		}

		.start {
			text-align: left;
		}

		.end {
			text-align: right;
		}

		.time {}
	}

	.top,
	.bottom {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
	}

	.bottom {
		padding: 30upx;
	}
</style>
