// 电影引擎核心类型定义

/** 动漫场景里的一行对话/旁白，可触发真实照片浮现 */
export interface AnimeLine {
  text: string
  /** 该句出现时浮现的真实照片（public/photos/ 下） */
  photo?: string
  /** 照片浮现时的说明文字 */
  photoCaption?: string
}

/** 一个剧情节点：一段画面 + 可选旁白 + 可选交互 */
export interface Scene {
  id: string
  /** 视觉层类型 */
  kind: 'fade' | 'chapter' | 'narration' | 'photo' | 'choice' | 'memoryCard' | 'found' | 'anime'
  /** 黑屏 / 字幕等场景的台词文本 */
  text?: string
  /** 照片路径（public/photos/ 下） */
  photo?: string
  /** 动漫场景背景图（public/photos/ 下，anime 用） */
  bg?: string
  /** 动漫场景对话序列（anime 用），每句可触发照片浮现 */
  animeLines?: AnimeLine[]
  /** 章节标题（chapter 用） */
  chapter?: string
  /** 章节副标题（chapter 用） */
  chapterSub?: string
  /** 旁白（多句，逐句淡入） */
  lines?: string[]
  /** 选择交互选项 */
  options?: { label: string; go: string }[]
  /** 当前场景要展示的年份（chapter 用） */
  year?: string
  /** 生成一张照片的方式（暂用占位） */
  placeholder?: string
  /** 提示文案 */
  hint?: string
  /** 下一场景 id（null = 电影结束） */
  next?: string | null
}

/** 电影根节点：从 start 进入 */
export interface Movie {
  start: string
  scenes: Record<string, Scene>
}
