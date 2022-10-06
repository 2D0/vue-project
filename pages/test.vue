<template>
  <div class="myPage page container__inner--mid container__inner--padding">
    <div class="myPage__info page__margin--big">
      <div class="myPage__badgeBox page__margin--mid">
        <div class="myPage__badgeBox--inner page__shadow" style="background:none; box-shadow:none">
          <Hooper
            :settings="hooperSetting"
            class="myPage__badge"
          >
            <Slide class="myPage__badge--inner">
              <ul class="myPage__badgeList">
                <li
                  v-for="(badge, idx) in badgeList"
                  :key="idx"
                  @click="selectBadge(idx, $event)"
                >
                  <p class="myPage__badge--img" style="background:#ddd">
                    <img :src="badge.img" :alt="badge.name">
                    <span class="myPage__badge--count">
                      {{count}}
                    </span>
                  </p>
                </li>
              </ul>
            </Slide>
            <HooperNavigation slot="hooper-addons" class="myPage__badge--nav"></HooperNavigation>
          </Hooper>
        </div>
      </div>
    </div><!-- myPage__info -->
  </div>
</template>

<script>
  import { 
    Hooper, 
    Slide,
    Navigation  as HooperNavigation  //슬라이드 화살표
  } from 'hooper';
  import 'hooper/dist/hooper.css';

  export default {
    name: 'profileEdit',
    // layout: 'default',
    components: {
      Hooper, 
      Slide,
      HooperNavigation 
    },
    data: () => ({
      profilePhotoOn    : false,
      select            : false,
      count             : 1,
      selectIdx         : 0,
      badgeList         :[
        {
          img       :'~assets/img/test/test-card8.png',
          name      :'새싹',
          idx       : 0,
        },
        {
          img       :'~assets/img/test/test-card8.png',
          name      :'꽃',
          idx       : 1,
        },
        {
          img       :'~assets/img/test/test-card8.png',
          name      :'저울',
          idx       : 2,
        },
        {
          img       :'~assets/img/test/test-card8.png',
          name      :'저울',
          idx       : 3,
        },
        {
          img       :'~assets/img/test/test-card8.png',
          name      :'저울',
          idx       : 4,
        },
        {
          img       :'~assets/img/test/test-card8.png',
          name      :'저울',
          idx       : 5,
        },
        {
          img       :'~assets/img/test/test-card8.png',
          name      :'저울',
          idx       : 6,
        },
        {
          img       :'~assets/img/test/test-card8.png',
          name      :'저울',
          idx       : 7,
        }
      ],
      hooperSetting: {
        itemsToShow : 1, 
      },
    }),
    methods: {
      selectBadge(idx, event){
        
        let activeClass = event.target.classList.contains('active')
        if(!activeClass){
          this.count++
          if(this.count < 4){
          event.target.classList.add('active')
        }
          } else if(activeClass){
          this.count--
          if(this.count < 4){
          event.target.classList.remove('active')
        }
          }
        

        
      },
      
    }
  }
</script>
