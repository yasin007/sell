<template>
  <div class="recommend" ref="recommend">
    <div>
      <div v-if='recommends.length' class="slider-wrapper">
        <slider>
          <div v-for='item in recommends' :key="item.id">
            <a :href='item.linkUrl'>
              <img class="needsclick" @load="loadImage" :src="item.picUrl" alt="">
            </a>
          </div>
        </slider>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Slider from 'base/slider/slider'
  import {getRecommend} from 'api/recommend'
  import {ERR_OK} from 'api/config'

  export default {
    data() {
      return {
        recommends: []
      }
    },
    created() {
      this._getRecommend()
    },
    methods: {
      _getRecommend() {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            this.recommends = res.data.slider
          }
        })
      }
    },
    components: {
      Slider
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
</style>
