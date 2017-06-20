<template>
	<div class="home" :style="{height: homeHeight + 'px'}">
		<!-- <div class="home"> -->
		<div class="boardBox">
			<div class="board" id="board">
				<p>恭喜玩家1xxxxxxxx赢得xx金币红包</p>
				<p>恭喜玩家1xxxxxxxx赢得xx金币红包</p>
				<p>恭喜玩家1xxxxxxxx赢得xx金币红包</p>
				<p>恭喜玩家1xxxxxxxx赢得xx金币红包</p>
				<p>恭喜玩家1xxxxxxxx赢得xx金币红包</p>
				<p>恭喜玩家2xxxxxxxx赢得xx金币红包</p>
				<p>恭喜玩家2xxxxxxxx赢得xx金币红包</p>
				<p>恭喜玩家2xxxxxxxx赢得xx金币红包</p>
				<p>恭喜玩家2xxxxxxxx赢得xx金币红包</p>
				<p>恭喜玩家2xxxxxxxx赢得xx金币红包</p>
				<p>恭喜玩家3xxxxxxxx赢得xx金币红包</p>
				<p>恭喜玩家3xxxxxxxx赢得xx金币红包</p>
				<p>恭喜玩家3xxxxxxxx赢得xx金币红包</p>
				<p>恭喜玩家3xxxxxxxx赢得xx金币红包</p>
				<p>恭喜玩家3xxxxxxxx赢得xx金币红包</p>
			</div>
		</div>

		<router-link to="/" class="btn ruleBtn"></router-link>
		<router-link to="/" class="btn comBtn"></router-link>

		<div class="redPocket">
			<div class="pockBox">
				<div class="pocket pocket5">
					<button>抢红包&gt;</button>
					<p>抢1~100金币</p>
				</div>
			</div>
			<div class="pockBox">
				<div class="pocket pocket10">
					<button>抢红包&gt;</button>
					<p>抢1~100金币</p>
				</div>
				<div class="pocket pocket20">
					<button>抢红包&gt;</button>
					<p>抢1~100金币</p>
				</div>
				<div class="pocket pocket50">
					<button>抢红包&gt;</button>
					<p>抢1~100金币</p>
				</div>
			</div>
			<div class="pockBox">
				<div class="pocket pocket100">
					<button>抢红包&gt;</button>
					<p>抢1~100金币</p>
				</div>
				<div class="pocket pocket200">
					<button>抢红包&gt;</button>
					<p>抢1~100金币</p>
				</div>
				<div class="pocket pocket500">
					<button>抢红包&gt;</button>
					<p>抢1~100金币</p>
				</div>
			</div>
		</div>
		
		<bottom-nav></bottom-nav>
	</div>
</template>

<script>
	import bottomNav from './bottomNav'
	export default {
		name: 'home',
		data () {
			return {
				homeHeight: 0,
				timer: ''
			}
		},
		components: {bottomNav},
		mounted () {
			var board = document.getElementById('board'),
			boardP = board.getElementsByTagName('p'),
			This = this;

			board.innerHTML = board.innerHTML + board.innerHTML;
			board.style.height = boardP[0].offsetHeight * boardP.length + 'px';

			// This.timer = setInterval(This.textScroll, 60);

			board.onmouseover = function(){
				// clearInterval(timer);
				clearTimeout(This.timer);
			}
			board.onmouseout = function(){
				// This.timer = setInterval(This.textScroll, 60);
			}
			This.textScroll();
		},
		created() {
			this.init();
		},
		methods: {
			init () {
				this.homeHeight = document.documentElement.clientHeight;			
			},
			textScroll () {
				if(board.offsetTop < -board.offsetHeight/2){
					board.style.top = '0';
				}
				if(board.offsetTop > 0){
					board.style.top = -board.offsetHeight/2 + 'px';
				}
				board.style.top = board.offsetTop - 2 + 'px';
				this.timer = setTimeout(this.textScroll, 60);
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.home{padding-top: 9.5rem;position: relative;background: #841208 url(../assets/images/bg1.jpg) center 0 no-repeat;background-size: cover;box-sizing: border-box;}
	.boardBox{position: relative;margin: 0 auto;width: 20rem;height: 15rem;overflow: hidden;}
	.board{position: absolute;top: 0;left: 0;}
	.board p{font-size: 1.3rem;color: #fae978;width: 100%;height: 3rem;line-height: 3rem;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;}

	.btn{position: absolute;top: 28rem;height: 2.95rem;}
	.ruleBtn{display: block;left: 0;background: url(../assets/images/ruleBtn.png) center no-repeat;background-size: 7.4rem auto;width: 7.4rem;}
	.comBtn{display: block;right: 0;background: url(../assets/images/commentBtn.png) center no-repeat;background-size: 5.5rem auto;width: 5.5rem;}

	.redPocket{padding: 0 2.5rem;padding-top: 3rem;width: 100%;height: 34rem;box-sizing: border-box;}
	.pockBox{margin-top: 1.5rem;display: -webkit-box;-webkit-box-pack: justify;-webkit-box-align: center;}
	.pockBox:first-child{-webkit-box-pack: center;}
	.pockBox .pocket{padding-top: 3.5rem;width: 8.9rem;height: 8.9rem;border-radius: 12px;text-align: center;box-sizing: border-box;}
	.pockBox .pocket5{background: url(../assets/images/5redBag.png) 0 0 no-repeat;background-size: 8.9rem;}
	.pockBox .pocket10{background: url(../assets/images/10redBag.png) 0 0 no-repeat;background-size: 8.9rem;}
	.pockBox .pocket20{background: url(../assets/images/20redBag.png) 0 0 no-repeat;background-size: 8.9rem;}
	.pockBox .pocket50{background: url(../assets/images/50redBag.png) 0 0 no-repeat;background-size: 8.9rem;}
	.pockBox .pocket100{background: url(../assets/images/100redBag.png) 0 0 no-repeat;background-size: 8.9rem;}
	.pockBox .pocket200{background: url(../assets/images/200redBag.png) 0 0 no-repeat;background-size: 8.9rem;}
	.pockBox .pocket500{background: url(../assets/images/500redBag.png) 0 0 no-repeat;background-size: 8.9rem;}
	.pockBox .pocket button{display: inline-block;padding: 0 .5rem;border-radius: 1rem;background: #fae978;border: none;font-size: 1.2rem;color: #ef2525;text-align: center;height: 2rem;line-height: 2rem;}
	.pockBox .pocket p{margin-top: 1rem;text-align: center;color: #fff;font-size: 1.2rem;}
</style>
