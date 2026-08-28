import type { Movie, Scene } from './types'

const s = (scene: Scene) => scene

export const movie: Movie = {
  start: 's01_black',

  scenes: {
    // ---------- 序章 ----------
    s01_black: s({
      id: 's01_black',
      kind: 'fade',
      next: 's02_chapter',
    }),

    s02_chapter: s({
      id: 's02_chapter',
      kind: 'chapter',
      chapter: 'CHAPTER 01',
      chapterSub: '那一天',
      next: 's03_intro',
    }),

    s03_intro: s({
      id: 's03_intro',
      kind: 'narration',
      lines: [
        '故事开始于一个很普通的日子。',
        '那天，天气有点阴。',
        '他刚做完单片机的仿真实验，正和室友去吃饭。',
        '如果那天，他只是低头走过去了……',
        '故事，可能就不会发生了。',
      ],
      next: 's03b_photo_campus',
    }),

    s03b_photo_campus: s({
      id: 's03b_photo_campus',
      kind: 'photo',
      photo: 'photos/这张照片出现在开头的一幕.jpg',
      placeholder: '江苏海洋大学 · 故事开始的地方',
      hint: '故事开始的地方',
      next: 's04_bridge',
    }),

    s04_bridge: s({
      id: 's04_bridge',
      kind: 'anime',
      bg: 'photos/anime_bridge.png',
      animeLines: [
        { text: '2025 年 5 月 12 日，江海桥。' },
        { text: '她让室友，来要我的联系方式。', photo: 'photos/去年512刚在一起.jpg', photoCaption: '2025.5.12 · 刚在一起' },
        { text: '她躲在桥的后面，偷偷看我。' },
        { text: '如果那天，我们就这样错过了……' },
        { text: '故事，还会开始吗？' },
      ],
      next: 's05_firstChoice',
    }),

    s05_firstChoice: s({
      id: 's05_firstChoice',
      kind: 'choice',
      text: '如果回到那一天\n你会选择……',
      options: [
        { label: '走过去', go: 's06a_walk' },
        { label: '转身离开', go: 's06b_leave' },
      ],
    }),

    // ---- 分支 A：走过去 ----
    s06a_walk: s({
      id: 's06a_walk',
      kind: 'narration',
      lines: [
        '于是，我们认识了。',
        '她室友走过来的时候，好像还笑了一下。',
        '因为他的手机上用的，还是英文系统。',
        '扫码，加好友。',
        '那天下午四五点，她先发来消息——',
        '你是什么星座呀？你是哪里人？',
      ],
      next: 's09_ourStory_meet',
    }),

    // ---------- OUR STORY · 相遇分支 ----------
    s09_ourStory_meet: s({
      id: 's09_ourStory_meet',
      kind: 'chapter',
      chapter: 'OUR STORY',
      chapterSub: '这就是我们真正的故事',
      next: 's10_ch2',
    }),

    // ---- 分支 B：转身离开（平行世界）----
    s06b_leave: s({
      id: 's06b_leave',
      kind: 'narration',
      lines: [
        '于是，他们错过了。',
        '没有她的那一年，好像也没什么不同。',
        '一样的教室，一样的实验，一样的日子一天天过去。',
        '只是有一天，他路过学校那条河的时候——',
        '总觉得桥的那头，好像少了点什么。',
      ],
      next: 's06b_library',
    }),

    s06b_library: s({
      id: 's06b_library',
      kind: 'narration',
      lines: [
        '他去了图书馆。',
        '有人在书架之间，从他面前走过，去拿一样东西。',
        '他抬起头的时候，她已经走了。',
        '他并不知道，那条路，她本来不用走的。',
      ],
      next: 's06b_photo_library',
    }),

    s06b_photo_library: s({
      id: 's06b_photo_library',
      kind: 'photo',
      photo: 'photos/独自自习镜头.jpg',
      placeholder: '平行世界 · 独自自习',
      hint: '没有遇见他的她，一个人在图书馆。',
      next: 's06b_return',
    }),

    s06b_return: s({
      id: 's06b_return',
      kind: 'narration',
      lines: [
        '即使没有那次相遇——',
        '他们还是会在另一个地方遇见。',
        '学校的河，图书馆，某条走过无数次的路。',
        '命运的红线，怎么绕，都绕回原点。',
      ],
      next: 's06b_photo_alone',
    }),

    s06b_photo_alone: s({
      id: 's06b_photo_alone',
      kind: 'photo',
      photo: 'photos/当没有遇见我独自自习的校园空镜.jpg',
      placeholder: '平行世界 · 空镜',
      hint: '当没有遇见我 · 独自自习的校园',
      next: 's09_ourStory_miss',
    }),

    // ---------- OUR STORY · 错过分支（从平行世界回归现实）----------
    s09_ourStory_miss: s({
      id: 's09_ourStory_miss',
      kind: 'chapter',
      chapter: 'OUR STORY',
      chapterSub: '但这不是我们真正的故事',
      next: 's10_ch2',
    }),

    s10_ch2: s({
      id: 's10_ch2',
      kind: 'chapter',
      chapter: '靠近',
      year: '2025',
      next: 's11_walkInvite',
    }),

    s11_walkInvite: s({
      id: 's11_walkInvite',
      kind: 'narration',
      lines: [
        '后来的故事，是从一句“要不要一起散步”开始的。',
        '是她先发来的消息，问他要不要一起散步。',
        '消息发出去之后，她不好意思地把手机翻了过去。',
      ],
      next: 's11_choice_walk',
    }),

    s11_choice_walk: s({
      id: 's11_choice_walk',
      kind: 'choice',
      text: '收到她的邀约\n你会……',
      options: [
        { label: '马上答应', go: 's11a_walk_yes' },
        { label: '假装淡定', go: 's11b_walk_cool' },
      ],
    }),

    s11a_walk_yes: s({
      id: 's11a_walk_yes',
      kind: 'narration',
      lines: ['好呀。两个字，回得比谁都快。', '那一边，他也听见了自己心跳的声音。'],
      next: 's12_wudan',
    }),

    s11b_walk_cool: s({
      id: 's11b_walk_cool',
      kind: 'narration',
      lines: ['嗯，可以。明明心跳得厉害，还装作很淡定。', '那一边，她也弯了弯嘴角。'],
      next: 's12_wudan',
    }),

    s12_wudan: s({
      id: 's12_wudan',
      kind: 'narration',
      lines: [
        '他们第一次坐在一起，是因为一起吐槽吴丹。',
        '吐槽完，从教室到长椅，从长椅到校园外面——',
        '一圈一圈地走，像是怎么都走不完。',
      ],
      next: 's13_hugSong',
    }),

    s13_hugSong: s({
      id: 's13_hugSong',
      kind: 'anime',
      bg: 'photos/anime_classroom.png',
      animeLines: [
        { text: '然后，有了第一个拥抱。' },
        { text: '再后来，是在教室里，第一次一起听歌。' },
        { text: '那首歌，是 Sugar。', photo: 'photos/第一次一起听歌.jpg', photoCaption: '教室里 · 第一次一起听歌' },
        { text: '后来每一次听到，都会想起那个夜晚。', photo: 'photos/一起听歌2.jpg', photoCaption: '那个夜晚' },
      ],
      next: 's13b_anime_shower',
    }),

    s13b_anime_shower: s({
      id: 's13b_anime_shower',
      kind: 'anime',
      bg: 'photos/anime_bath.png',
      animeLines: [
        { text: '还没在一起的时候，总是想让你一直出现在我的生活里。' },
        { text: '那天她举起沐浴露，我偷偷拍了照片。', photo: 'photos/沐浴露.jpg', photoCaption: '那瓶沐浴露' },
        { text: '那张照片，我一直留着，没有删除。' },
        { text: '那大概，是她第一次出现在我的朋友圈。' },
      ],
      next: 's13c_photo_yuedao',
    }),

    s13c_photo_yuedao: s({
      id: 's13c_photo_yuedao',
      kind: 'anime',
      bg: 'photos/anime_yuedao.png',
      animeLines: [
        { text: '还没在一起的时候，他们去了月牙岛。' },
        { text: '考完试，两个人骑着电瓶车就去了。' },
        { text: '那天是中午，天气很热，找不到阴凉的地方。' },
        { text: '他们干脆在路中间铺了一个野餐垫。' },
        { text: '我说：我要睡一会儿。' },
        { text: '然后，我慢慢地，朝她身上靠过去。' },
        { text: '她有点惊讶：是不是我记错了？' },
        { text: '我说：没错，这就是我的小心机。' },
      ],
      next: 's13d_choice_yuedao',
    }),

    s13d_choice_yuedao: s({
      id: 's13d_choice_yuedao',
      kind: 'choice',
      text: '我靠过来的时候\n她的反应……',
      options: [
        { label: '心跳漏了一拍', go: 's13e_yuedao_thump' },
        { label: '装作没发现', go: 's13f_yuedao_hide' },
      ],
    }),

    s13e_yuedao_thump: s({
      id: 's13e_yuedao_thump',
      kind: 'narration',
      lines: ['她心跳漏了一拍，但还是没有躲开。', '两个人就这样，在野餐垫上靠了很久很久。', '回去前因为待得太久，还去吃了甜品店，差点赶不上回家的高铁。'],
      next: 's14_together',
    }),

    s13f_yuedao_hide: s({
      id: 's13f_yuedao_hide',
      kind: 'narration',
      lines: ['她装作没发现，可嘴角已经藏不住了。', '风从湖面吹过来，谁也没说破。', '回去前因为待得太久，还去吃了甜品店，差点赶不上回家的高铁。'],
      next: 's14_together',
    }),

    s14_together: s({
      id: 's14_together',
      kind: 'chapter',
      chapter: '在一起',
      year: '2025.5.12',
      next: 's14b_photo_firstday',
    }),

    s14b_photo_firstday: s({
      id: 's14b_photo_firstday',
      kind: 'photo',
      photo: 'photos/去年512刚在一起.jpg',
      placeholder: '那一天 · 刚在一起',
      hint: '2025.5.12 · 刚在一起',
      next: 's15_pizzahut',
    }),

    s15_pizzahut: s({
      id: 's15_pizzahut',
      kind: 'anime',
      bg: 'photos/anime_pizza.png',
      animeLines: [
        { text: '他第一次请她吃饭，是在大润发楼下的必胜客。' },
        { text: '那应该是……他们第一次一起吃饭吧。' },
        { text: '她很客气，最后还和他 AA 了。', photo: 'photos/大润发.jpg', photoCaption: '大润发 · 第一次一起吃饭' },
        { text: '他不停地把菜单翻来翻去，其实一个字也没看进去。' },
        { text: '她低着头，用叉子慢慢卷着面条，卷了好几次，才吃一口。' },
      ],
      next: 's16_memory',
    }),

    // ---- 温柔一问 ----
    s16_memory: s({
      id: 's16_memory',
      kind: 'choice',
      text: '你还记得这里吗？\n大润发楼下 · 必胜客',
      options: [
        { label: '记得', go: 's17a_remember' },
        { label: '不记得', go: 's17b_forgot' },
      ],
    }),

    s17a_remember: s({
      id: 's17a_remember',
      kind: 'narration',
      lines: ['我就知道，你会记得。'],
      next: 's18_darunfa',
    }),

    s17b_forgot: s({
      id: 's17b_forgot',
      kind: 'narration',
      lines: ['没关系。', '所以我替你记得。'],
      next: 's18_darunfa',
    }),

    s18_darunfa: s({
      id: 's18_darunfa',
      kind: 'narration',
      lines: [
        '两个人都有点紧张。',
        '他不停地把菜单翻过来、翻过去，其实一个字也没看进去。',
        '她低着头，用叉子慢慢地卷着面条，卷了好几次，才吃一口。',
        '中间不知道是谁先笑出了声，然后两个人就一起笑了。',
      ],
      next: 's19_darunfa2',
    }),

    s19_darunfa2: s({
      id: 's19_darunfa2',
      kind: 'anime',
      bg: 'photos/anime_darunfa.png',
      animeLines: [
        { text: '这家店真难找——停车停了好久，找电梯又找了好久。' },
        { text: '等坐下来的时候，连紧张都变成了好笑。' },
        { text: '吃完饭，他们去逛大润发。', photo: 'photos/大润发.jpg', photoCaption: '大润发 · 货架之间' },
        { text: '在货架之间走来走去，明明什么也没买，却走了很久很久。' },
        { text: '她忽然说：我从来没想到，我们会过上这么平淡的生活。' },
        { text: '像婚后柴米油盐那样。可如果以后真的是这样的日子——', photo: 'photos/大润发.jpg', photoCaption: '柴米油盐的平淡' },
        { text: '那也会非常非常幸福。' },
        { text: '他们买了猫条，还买了一个小熊的纪念挂件。' },
      ],
      next: 's20_darunfa3',
    }),

    s20_darunfa3: s({
      id: 's20_darunfa3',
      kind: 'narration',
      lines: [
        '原来超市的灯光那么亮，照得他们都不好意思抬头。',
        '原来推着购物车慢慢走，和牵着的手，没什么两样。',
      ],
      next: 's20b_photo_yueyangji',
    }),

    s20b_photo_yueyangji: s({
      id: 's20b_photo_yueyangji',
      kind: 'photo',
      photo: 'photos/去年五月越洋记.jpg',
      placeholder: '越洋记 · 越南米粉店',
      hint: '那家常去的越南米粉店 · 越洋记',
      next: 's20c_photo_yueyangji2',
    }),

    s20c_photo_yueyangji2: s({
      id: 's20c_photo_yueyangji2',
      kind: 'photo',
      photo: 'photos/越洋记2.jpg',
      placeholder: '越洋记 · 再去一次',
      hint: '去了很多次 · 还是想再去',
      next: 's20d_photo_birthday',
    }),

    s20d_photo_birthday: s({
      id: 's20d_photo_birthday',
      kind: 'photo',
      photo: 'photos/去年生日.jpg',
      placeholder: '在一起第 3 天 · 她的生日',
      hint: '2025.5.15 · 她的生日，在一起的第 3 天',
      next: 's20e_photo_birthday2',
    }),

    s20e_photo_birthday2: s({
      id: 's20e_photo_birthday2',
      kind: 'photo',
      photo: 'photos/去年生日 (2).jpg',
      placeholder: '她的生日',
      hint: '2025.5.15 · 她的生日',
      next: 's20f_strait',
    }),

    s20f_strait: s({
      id: 's20f_strait',
      kind: 'narration',
      lines: [
        '他反过来问她：海南那边，是不是真的管大陆叫大陆？',
        '她答：对啊，中间隔着一片琼州海峡。',
        '那时候谁也没想到——',
        '这条海峡，后来成了他跨越几百公里去看她的理由。',
      ],
      next: 's22_ch4',
    }),

    s22_ch4: s({
      id: 's22_ch4',
      kind: 'chapter',
      chapter: '出发',
      year: '2025 夏',
      next: 's23_yangzhou',
    }),

    s23_yangzhou: s({
      id: 's23_yangzhou',
      kind: 'anime',
      bg: 'photos/anime_shouxihu.png',
      animeLines: [
        { text: '端午，他们一起去了扬州。' },
        { text: '瘦西湖的柳树，白墙黛瓦。', photo: 'photos/瘦西湖.jpg', photoCaption: '扬州 · 瘦西湖' },
        { text: '走在东关街的石板路上。', photo: 'photos/yangzhou_street.jpg', photoCaption: '扬州 · 街头' },
        { text: '那晚，他们住在扬州的酒店里。', photo: 'photos/扬州酒店bathroom_kiss.jpg', photoCaption: '扬州 · 酒店那晚' },
        { text: '考完期末，又一起去了上海。' },
      ],
      next: 's23c_anime_bund',
    }),

    s23c_anime_bund: s({
      id: 's23c_anime_bund',
      kind: 'anime',
      bg: 'photos/anime_bund.png',
      animeLines: [
        { text: '上海，外滩。' },
        { text: '黄浦江边的风，灯火通明。', photo: 'photos/shanghai_bund.jpg', photoCaption: '上海 · 外滩夜景' },
      ],
      next: 's23c_choice_bund',
    }),

    s23c_choice_bund: s({
      id: 's23c_choice_bund',
      kind: 'choice',
      text: '站在黄浦江边\n你会……',
      options: [
        { label: '牵她的手', go: 's23c1_bund_hand' },
        { label: '并肩看江', go: 's23c2_bund_watch' },
      ],
    }),

    s23c1_bund_hand: s({
      id: 's23c1_bund_hand',
      kind: 'narration',
      lines: ['他轻轻牵起她的手。', '江风很大，手却一直没松开。'],
      next: 's23d_anime_hainan',
    }),

    s23c2_bund_watch: s({
      id: 's23c2_bund_watch',
      kind: 'narration',
      lines: ['他们并肩靠在栏杆上，看着江对岸的灯火。', '谁也不说话，就这样站了很久。'],
      next: 's23d_anime_hainan',
    }),

    s23d_anime_hainan: s({
      id: 's23d_anime_hainan',
      kind: 'anime',
      bg: 'photos/anime_hainan.png',
      animeLines: [
        { text: '然后暑假，因为她说想他——' },
        { text: '他直接跨越了两千公里，来到海南。', photo: 'photos/陵水清水湾.jpg', photoCaption: '海南 · 陵水' },
        { text: '海风，椰树，白沙，是海南。' },
        { text: '他们租了一辆三轮车，在夜里骑过灯塔。', photo: 'photos/陵水清水湾.jpg', photoCaption: '海南 · 陵水清水湾' },
        { text: '穿过新村夜市，路过一个没有路标的路牌。', photo: 'photos/新村夜市.jpg', photoCaption: '新村夜市 · 那晚的车' },
        { text: '那晚的风，那晚的车，她说她到现在都记得特别清楚。' },
        { text: '他说，他也记得。' },
      ],
      next: 's23e_photo_haikou_cruise',
    }),

    s23e_photo_haikou_cruise: s({
      id: 's23e_photo_haikou_cruise',
      kind: 'photo',
      photo: 'photos/haikou_cruise.jpg',
      placeholder: '海口 · 夜游船',
      hint: '海口 · 夜游船',
      next: 's23f_photo_lingshui',
    }),

    s23f_photo_lingshui: s({
      id: 's23f_photo_lingshui',
      kind: 'photo',
      photo: 'photos/陵水清水湾.jpg',
      placeholder: '陵水 · 清水湾',
      hint: '陵水 · 清水湾那晚',
      next: 's23fb_photo_makeup',
    }),

    s23fb_photo_makeup: s({
      id: 's23fb_photo_makeup',
      kind: 'photo',
      photo: 'photos/海南最惊艳的一次化妆.jpg',
      placeholder: '海南 · 她',
      hint: '海南最惊艳的一次化妆',
      next: 's23g_photo_market',
    }),

    s23g_photo_market: s({
      id: 's23g_photo_market',
      kind: 'photo',
      photo: 'photos/新村夜市.jpg',
      placeholder: '陵水 · 新村夜市',
      hint: '新村夜市 · 那晚的车',
      next: 's23g2_photo_rice',
    }),

    s23g2_photo_rice: s({
      id: 's23g2_photo_rice',
      kind: 'photo',
      photo: 'photos/去新村夜市前吃的糯米饭忘不了.jpg',
      placeholder: '去夜市前 · 糯米饭',
      hint: '去新村夜市前吃的糯米饭 · 忘不了',
      next: 's23g3_photo_rain',
    }),

    s23g3_photo_rain: s({
      id: 's23g3_photo_rain',
      kind: 'photo',
      photo: 'photos/在海口的最后一天下了很大的雨.jpg',
      placeholder: '海口 · 最后一天 · 大雨',
      hint: '在海口的最后一天 · 下了很大的雨',
      next: 's23g4_photo_lastmeal',
    }),

    s23g4_photo_lastmeal: s({
      id: 's23g4_photo_lastmeal',
      kind: 'photo',
      photo: 'photos/离开海口前最后一顿你要去除浮沫.jpg',
      placeholder: '离开海口前 · 最后一顿',
      hint: '离开海口前的最后一顿 · 她在去除浮沫，那首歌很应景，他一直很不舍得',
      next: 's24_airport',
    }),

    s24_airport: s({
      id: 's24_airport',
      kind: 'narration',
      lines: [
        '后来，他们依依不舍地分开，约好开学见。',
        '寒假，他从新加坡回来，转机到海口，又见了一面。',
      ],
      next: 's25_ch5',
    }),

    s25_ch5: s({
      id: 's25_ch5',
      kind: 'chapter',
      chapter: '日常与惊喜',
      year: '2025 秋',
      next: 's26_suzhou',
    }),

    s26_suzhou: s({
      id: 's26_suzhou',
      kind: 'narration',
      lines: [
        '开学。一切回到平常。',
        '肉蟹煲，东海县，平淡又温热的日子。',
      ],
      next: 's27_shengjian',
    }),

    s27_shengjian: s({
      id: 's27_shengjian',
      kind: 'anime',
      bg: 'photos/anime_suzhou.png',
      animeLines: [
        { text: '去年国庆，她来苏州。' },
        { text: '第一天，他们一起逛了街、吃了哑巴生煎。', photo: 'photos/suzhou_metro.jpg', photoCaption: '苏州 · 地铁 · 西树泡芙' },
        { text: '粉墙黛瓦，青石板路，两个人并肩走。' },
        { text: '他不知道从哪变出一束花——', photo: 'photos/suzhou_flowers.jpg', photoCaption: '苏州 · 那束花' },
        { text: '原来，他早就和她闺蜜串通好了。' },
        { text: '她说过很多次喜欢，他记成了那天她眼睛亮起来的样子。' },
      ],
      next: 's27b_photo_hotel',
    }),

    s27b_photo_hotel: s({
      id: 's27b_photo_hotel',
      kind: 'photo',
      photo: 'photos/去年国庆酒店.jpg',
      placeholder: '苏州 · 去年国庆 · 酒店',
      hint: '去年国庆 · 她来苏州',
      next: 's27c_photo_metro',
    }),

    s27c_photo_metro: s({
      id: 's27c_photo_metro',
      kind: 'photo',
      photo: 'photos/suzhou_metro.jpg',
      placeholder: '苏州 · 地铁',
      hint: '苏州 · 地铁 · 西树泡芙',
      next: 's27d_photo_dumplings',
    }),

    s27d_photo_dumplings: s({
      id: 's27d_photo_dumplings',
      kind: 'photo',
      photo: 'photos/suzhou_dumplings.jpg',
      placeholder: '苏州 · 街边',
      hint: '煎饺 · 馄饨 · 那一口',
      next: 's27e_photo_meal',
    }),

    s27e_photo_meal: s({
      id: 's27e_photo_meal',
      kind: 'photo',
      photo: 'photos/suzhou_meal.jpg',
      placeholder: '苏州 · 吃饭',
      hint: '一起去吃的那顿饭',
      next: 's27f_photo_flowers',
    }),

    s27f_photo_flowers: s({
      id: 's27f_photo_flowers',
      kind: 'photo',
      photo: 'photos/suzhou_flowers.jpg',
      placeholder: '苏州 · 送花',
      hint: '那束花 · 和她亮起来的眼睛',
      next: 's27g_photo_haidilao',
    }),

    s27g_photo_haidilao: s({
      id: 's27g_photo_haidilao',
      kind: 'photo',
      photo: 'photos/去年11月吃海底捞.jpg',
      placeholder: '去年11月 · 海底捞',
      hint: '去年11月 · 一起去吃的海底捞',
      next: 's27h_photo_november',
    }),

    s27h_photo_november: s({
      id: 's27h_photo_november',
      kind: 'photo',
      photo: 'photos/去年1月日常.jpg',
      placeholder: '去年11月 · 日常',
      hint: '去年11月 · 平平常常的日常',
      next: 's27i_photo_march',
    }),

    s27i_photo_march: s({
      id: 's27i_photo_march',
      kind: 'photo',
      photo: 'photos/今年三月日常二食堂.jpg',
      placeholder: '今年3月 · 二食堂',
      hint: '今年3月 · 二食堂日常',
      next: 's28_ch6',
    }),

    s28_ch6: s({
      id: 's28_ch6',
      kind: 'chapter',
      chapter: '波折',
      year: '2025 冬',
      next: 's29_ticket',
    }),

    s29_ticket: s({
      id: 's29_ticket',
      kind: 'narration',
      lines: [
        '那年十二月，考完期末，他们一起去做了戒指。',
        '然后，他们买好了去北京的车票。',
        '因为退票，白白亏了一百块钱。',
        '为这事，他们好像闹了好几天的小别扭。',
      ],
      next: 's29a_photo_warm',
    }),

    s29a_photo_warm: s({
      id: 's29a_photo_warm',
      kind: 'photo',
      photo: 'photos/去年12月我做模电课设给我送温暖.jpg',
      placeholder: '去年12月 · 模电课设 · 送温暖',
      hint: '他做模电课设的时候，她来送温暖',
      next: 's29b_photo_ring',
    }),

    s29b_photo_ring: s({
      id: 's29b_photo_ring',
      kind: 'photo',
      photo: 'photos/去年12月期末结束一起做戒指.jpg',
      placeholder: '去年12月 · 一起做戒指',
      hint: '考完期末 · 一起做的戒指',
      next: 's30_redo',
    }),

    // ---- 改变过去 ----
    s30_redo: s({
      id: 's30_redo',
      kind: 'choice',
      text: '如果可以重新选择一次\n那几天，你会怎么做？',
      options: [
        { label: '早点说开', go: 's31a_early' },
        { label: '但还是去了北京', go: 's31b_beijing' },
      ],
    }),

    s31a_early: s({
      id: 's31a_early',
      kind: 'narration',
      lines: [
        '如果那天，他们早点说出心里话……',
        '也许那几天，就不用偷偷躲着难过。',
        '但无论重来几次，最后他都会牵起她的手，一起上车。',
      ],
      next: 's32_beijing',
    }),

    s31b_beijing: s({
      id: 's31b_beijing',
      kind: 'narration',
      lines: [
        '最后他们还是收拾好心情，一起踏上了那趟去北京的列车。',
      ],
      next: 's32_beijing',
    }),

    s32_beijing: s({
      id: 's32_beijing',
      kind: 'anime',
      bg: 'photos/anime_gugong.png',
      animeLines: [
        { text: '北京，红墙黄瓦，故宫。', photo: 'photos/beijing_gugong.jpg', photoCaption: '北京 · 故宫' },
        { text: '旅途上有小小的争执，但他们仍然一起走完了全程。' },
      ],
      next: 's32c_anime_tianjin',
    }),

    s32c_anime_tianjin: s({
      id: 's32c_anime_tianjin',
      kind: 'anime',
      bg: 'photos/anime_tianjin.png',
      animeLines: [
        { text: '然后，他们去了天津。' },
        { text: '西洋式的老建筑，傍晚的街灯。', photo: 'photos/tianjin.jpg', photoCaption: '天津 · 街头' },
        { text: '吃了很好吃的东西，一起走过的街。' },
      ],
      next: 's32d_photo_tianjin',
    }),

    s32d_photo_tianjin: s({
      id: 's32d_photo_tianjin',
      kind: 'photo',
      photo: 'photos/tianjin.jpg',
      placeholder: '天津 · 街头',
      hint: '天津',
      next: 's33_ch7',
    }),

    s33_ch7: s({
      id: 's33_ch7',
      kind: 'chapter',
      chapter: '重逢 · 现在',
      year: '2026',
      next: 's34_birthday',
    }),

    s34_birthday: s({
      id: 's34_birthday',
      kind: 'narration',
      lines: [
        '4 月 5 日，清明节，她来苏州陪他过生日。',
        '那天的日料自助，那天的万象天地。',
        '第二天临走前，她还陪他去看了他的高中母校。',
        '劳动节，他们去赣榆采蓝莓——',
        '坐着天价的出租车，遇到好心的老板，',
        '又转公交、骑共享单车，绕了很久才回到酒店。',
        '还有那家药膳鸡。',
      ],
      next: 's34b_photo_salmon',
    }),

    s34b_photo_salmon: s({
      id: 's34b_photo_salmon',
      kind: 'photo',
      photo: 'photos/今年生日自助.jpg',
      placeholder: '生日 · 日料自助',
      hint: '4.5 生日 · 日料自助',
      next: 's34bb_photo_wxtd',
    }),

    s34bb_photo_wxtd: s({
      id: 's34bb_photo_wxtd',
      kind: 'photo',
      photo: 'photos/万象天地.jpg',
      placeholder: '生日 · 万象天地',
      hint: '万象天地 · 那天的你',
      next: 's34d_photo_qingming',
    }),

    s34d_photo_qingming: s({
      id: 's34d_photo_qingming',
      kind: 'photo',
      photo: 'photos/今年四月份清明节结束后返校看到的柳絮.jpg',
      placeholder: '清明 · 返校 · 柳絮',
      hint: '今年四月 · 清明结束，返校路上看到的柳絮',
      next: 's34c2_photo_ganyu1',
    }),

    s34c2_photo_ganyu1: s({
      id: 's34c2_photo_ganyu1',
      kind: 'photo',
      photo: 'photos/赣榆蓝莓1.jpg',
      placeholder: '赣榆 · 采蓝莓',
      hint: '劳动节 · 赣榆 · 采蓝莓',
      next: 's34c3_photo_ganyu2',
    }),

    s34c3_photo_ganyu2: s({
      id: 's34c3_photo_ganyu2',
      kind: 'photo',
      photo: 'photos/赣榆蓝莓2.jpg',
      placeholder: '赣榆 · 她',
      hint: '采蓝莓那天 · 她',
      next: 's34c4_photo_ganyu3',
    }),

    s34c4_photo_ganyu3: s({
      id: 's34c4_photo_ganyu3',
      kind: 'photo',
      photo: 'photos/赣榆蓝莓3.jpg',
      placeholder: '赣榆 · 蓝莓园',
      hint: '蓝莓园里',
      next: 's34d2_photo_bister',
    }),

    s34d2_photo_bister: s({
      id: 's34d2_photo_bister',
      kind: 'photo',
      photo: 'photos/比斯特.jpg',
      placeholder: '生日 · 比斯特购物村',
      hint: '生日那天 · 比斯特购物村',
      next: 's34g_photo_anniversary',
    }),

    s34g_photo_anniversary: s({
      id: 's34g_photo_anniversary',
      kind: 'photo',
      photo: 'photos/512纪念日.jpg',
      placeholder: '5.12 纪念日',
      hint: '2026.5.12 · 纪念日那顿饭',
      next: 's34h_photo_anniversary2',
    }),

    s34h_photo_anniversary2: s({
      id: 's34h_photo_anniversary2',
      kind: 'photo',
      photo: 'photos/今年512纪念日.jpg',
      placeholder: '5.12 纪念日',
      hint: '纪念日 · 两个人',
      next: 's34i_photo_watermelon',
    }),

    s34i_photo_watermelon: s({
      id: 's34i_photo_watermelon',
      kind: 'photo',
      photo: 'photos/今年五月西瓜.jpg',
      placeholder: '学校 · 五月 · 西瓜',
      hint: '今年五月 · 学校日常',
      next: 's35_korea',
    }),

    s35_korea: s({
      id: 's35_korea',
      kind: 'anime',
      bg: 'photos/anime_haeundae.png',
      animeLines: [
        { text: '然后，他们为了一趟旅行，一起备考了整整两个月。' },
        { text: '韩国。釜山，首尔。一周。' },
        { text: '海云台的沙滩，海鸥。', photo: 'photos/釜山海云台.jpg', photoCaption: '釜山 · 海云台' },
        { text: '故事讲到这里，好像已经写下了很长很长的一页。' },
      ],
      next: 's35a_photo_busan',
    }),

    s35a_photo_busan: s({
      id: 's35a_photo_busan',
      kind: 'photo',
      photo: 'photos/busan_cable.jpg',
      placeholder: '釜山 · 去松岛的路上',
      hint: '釜山 · 去松岛缆车的路上',
      next: 's35a2_photo_haeundae',
    }),

    s35a2_photo_haeundae: s({
      id: 's35a2_photo_haeundae',
      kind: 'photo',
      photo: 'photos/釜山海云台.jpg',
      placeholder: '釜山 · 海云台',
      hint: '釜山 · 海云台',
      next: 's35a3_photo_seaside',
    }),

    s35a3_photo_seaside: s({
      id: 's35a3_photo_seaside',
      kind: 'photo',
      photo: 'photos/釜山海边.jpg',
      placeholder: '釜山 · 海边',
      hint: '釜山 · 海边',
      next: 's35a4_photo_makeup',
    }),

    s35a4_photo_makeup: s({
      id: 's35a4_photo_makeup',
      kind: 'photo',
      photo: 'photos/釜山刚刚化好妆回复老师消息.jpg',
      placeholder: '釜山 · 化好妆',
      hint: '釜山 · 刚刚化好妆',
      next: 's35a5_photo_lastnight',
    }),

    s35a5_photo_lastnight: s({
      id: 's35a5_photo_lastnight',
      kind: 'photo',
      photo: 'photos/釜山最后一晚.jpg',
      placeholder: '釜山 · 最后一晚',
      hint: '釜山 · 最后一晚',
      next: 's35a6_anime_seoul',
    }),

    s35a6_anime_seoul: s({
      id: 's35a6_anime_seoul',
      kind: 'anime',
      bg: 'photos/anime_seoul.png',
      animeLines: [
        { text: '然后到了首尔。' },
        { text: '霓虹灯，咖啡店，圣水洞的街头。', photo: 'photos/首尔圣水洞.jpg', photoCaption: '首尔 · 圣水洞' },
        { text: '那几天，走在异国的街头，身边有她。' },
      ],
      next: 's35b_photo_seoul',
    }),

    s35b_photo_seoul: s({
      id: 's35b_photo_seoul',
      kind: 'photo',
      photo: 'photos/首尔圣水洞.jpg',
      placeholder: '首尔 · 圣水洞',
      hint: '首尔 · 圣水洞',
      next: 's35bb_photo_seoul_metro',
    }),

    s35bb_photo_seoul_metro: s({
      id: 's35bb_photo_seoul_metro',
      kind: 'photo',
      photo: 'photos/seoul_metro.jpg',
      placeholder: '首尔 · 地铁',
      hint: '首尔 · 去圣水的路上',
      next: 's35bc_photo_seoul_night',
    }),

    s35bc_photo_seoul_night: s({
      id: 's35bc_photo_seoul_night',
      kind: 'photo',
      photo: 'photos/seoul.jpg',
      placeholder: '首尔 · 夜街',
      hint: '首尔 · 那几天',
      next: 's35bd_photo_incheon',
    }),

    s35bd_photo_incheon: s({
      id: 's35bd_photo_incheon',
      kind: 'photo',
      photo: 'photos/仁川机场回上海.jpg',
      placeholder: '仁川机场 · 回上海',
      hint: '仁川机场 · 回上海',
      next: 's35c_narration_home',
    }),

    s35c_narration_home: s({
      id: 's35c_narration_home',
      kind: 'narration',
      lines: ['更多的日子，是平平常常地待在一起。'],
      next: 's36_found01',
    }),

    // ---- FOUND: 01 隐藏片段 ----
    s36_found01: s({
      id: 's36_found01',
      kind: 'chapter',
      chapter: 'FOUND: 01',
      chapterSub: 'The Things I Never Told You',
      next: 's37_hidden1',
    }),

    s37_hidden1: s({
      id: 's37_hidden1',
      kind: 'narration',
      lines: [
        '有些话，我从来没有告诉过你。',
        '我们好像，总是在吵架。',
        '有时因为一句没回的消息，有时因为一个小小的误会。',
        '很多次，我们把话都说重了。',
      ],
      next: 's38_hidden2',
    }),

    s38_hidden2: s({
      id: 's38_hidden2',
      kind: 'narration',
      lines: [
        '可我想告诉你——',
        '就算我们天天吵，就算我们有很多矛盾，',
        '我心里，也从没想过要放弃。',
        '因为只要我们两个人，都愿意往同一个方向走，',
        '我们一定可以，一直走下去。',
      ],
      next: 's39_hidden3',
    }),

    s39_hidden3: s({
      id: 's39_hidden3',
      kind: 'narration',
      lines: [
        '我想给你满满的安全感，',
        '也希望你，能给我一点属于自己的空间。',
        '我向你保证——只要我看到了，我一定会回你。',
        '所以如果我很久没有回你，那不是我不在乎你，',
        '那是我……真的还没有看到。',
      ],
      next: 's40_hidden4',
    }),

    s40_hidden4: s({
      id: 's40_hidden4',
      kind: 'narration',
      lines: [
        '不是不想回。是那一刻，脑袋里装的事情太多了。',
        '事情总是一件接一件，做完一件，又来一件，',
        '注意力就那么被带走了。',
        '等终于停下来，才发现——啊，原来我忘了回你。',
      ],
      next: 's41_hidden5',
    }),

    s41_hidden5: s({
      id: 's41_hidden5',
      kind: 'narration',
      lines: [
        '我忘了回你，是因为我在努力，',
        '努力把手边的事情做完，',
        '好让自己能安心地，回来陪你。',
        '而不是因为，我心里没有你。',
      ],
      next: 's42_hidden6',
    }),

    s42_hidden6: s({
      id: 's42_hidden6',
      kind: 'narration',
      lines: [
        '所以下一次，如果我很久很久没有回你，',
        '你能不能不要生气，先相信我一件事——',
        '我从来没有走远。',
      ],
      next: 's43_hidden7',
    }),

    s43_hidden7: s({
      id: 's43_hidden7',
      kind: 'narration',
      lines: [
        '有些话，平时真的说不出口。',
        '今天，借着这部电影，说给你听。',
        '如果我们每次吵架，都能记得一件事——',
        '我们是站在同一边的。',
        '那我们，就永远吵不散。',
      ],
      next: 's44_end',
    }),

    // ---------- 最终章 ----------
    s44_end: s({
      id: 's44_end',
      kind: 'fade',
      next: 's45_theEnd',
    }),

    s45_theEnd: s({
      id: 's45_theEnd',
      kind: 'chapter',
      chapter: 'THE END',
      next: 's46_wait',
    }),

    s46_wait: s({
      id: 's46_wait',
      kind: 'narration',
      lines: ['Wait.', 'There is one more scene.'],
      next: 's47_timeline',
    }),

    s47_timeline: s({
      id: 's47_timeline',
      kind: 'narration',
      lines: [
        '我们已经一起写了这么多故事。',
        '可是后面的故事……还没有发生。',
        '所以，这部电影还不能结束。',
      ],
      next: 's47b_anime_future',
    }),

    s47b_anime_future: s({
      id: 's47b_anime_future',
      kind: 'anime',
      bg: 'photos/anime_future.png',
      animeLines: [
        { text: '站在这里，望向远方。' },
        { text: '前面的路还很长，很长。' },
        { text: '但我们，会一起走。' },
      ],
      next: 's48_future',
    }),

    s48_future: s({
      id: 's48_future',
      kind: 'narration',
      lines: [
        '2025 ✓',
        '2026 ✓',
        '2027 ？',
        '2028 ？',
        '2029 ？',
        '2030 ？',
        '下一幕，等我们一起拍。',
      ],
      next: null,
    }),
  },
}
