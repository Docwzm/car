<template>
	<view class="publish-wrap">
		<view class="top">
			<view class="start">{{data.startaddress}}</view>
			<view class="time-wrap">
				<uni-icon type="arrowthinright" size="30" />
				<view class="time">
					{{data.starttime}}
				</view>
			</view>
			<view class="end">{{data.targetaddress}}</view>
		</view>
		<view class="bottom">
			<view class="left">
				<view class="name-wrap">name：{{data.name}}</view>
				<view class="bakup-wrap">bakup：{{data.remark}}</view>
			</view>
			<view class="right">
				<button v-if="canCancel" type="primary" @click="cancel">删除</button>
				<button v-else type="primary" @click="call">约ta</button>
			</view>
		</view>
	</view>
</template>
<script>
	import uniIcon from '../uni-icon/uni-icon.vue'
	
	export default {
		name: 'publish',
		components:{
			uniIcon,
		},
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
			flex:2;
			word-break: break-all;
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
