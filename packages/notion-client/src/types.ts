import type {
  BlockObjectResponse,
  PageObjectResponse,
  PartialBlockObjectResponse,
  PartialPageObjectResponse
} from '@notionhq/client/build/src/api-endpoints'

export type Block = BlockObjectResponse
export type Page = PageObjectResponse

export type PartialBlock = PartialBlockObjectResponse
export type PartialPage = PartialPageObjectResponse

export type BlockChildren = (PartialBlock | Block)[]
export type BlockMap = { [id: string]: PartialBlock | Block }

export type PageMap = { [id: string]: PartialPage | Page }
export type ParentMap = { [id: string]: string }
export type BlockChildrenMap = { [id: string]: string[] }

export type RichTextItem =
  | {
      type: 'text'
      text: {
        content: string
        link: {
          url: string
        } | null
      }
      annotations: {
        bold: boolean
        italic: boolean
        strikethrough: boolean
        underline: boolean
        code: boolean
        color:
          | 'default'
          | 'gray'
          | 'brown'
          | 'orange'
          | 'yellow'
          | 'green'
          | 'blue'
          | 'purple'
          | 'pink'
          | 'red'
          | 'gray_background'
          | 'brown_background'
          | 'orange_background'
          | 'yellow_background'
          | 'green_background'
          | 'blue_background'
          | 'purple_background'
          | 'pink_background'
          | 'red_background'
      }
      plain_text: string
      href: string | null
    }
  | {
      type: 'mention'
      mention?:
        | {
            type: 'page'
            page: {
              id: string
            }
          }
        | {
            type: 'database'
            database: {
              id: string
            }
          }
      annotations: {
        bold: boolean
        italic: boolean
        strikethrough: boolean
        underline: boolean
        code: boolean
        color:
          | 'default'
          | 'gray'
          | 'brown'
          | 'orange'
          | 'yellow'
          | 'green'
          | 'blue'
          | 'purple'
          | 'pink'
          | 'red'
          | 'gray_background'
          | 'brown_background'
          | 'orange_background'
          | 'yellow_background'
          | 'green_background'
          | 'blue_background'
          | 'purple_background'
          | 'pink_background'
          | 'red_background'
      }
      plain_text: string
      href: string | null
    }
  | {
      type: 'equation'
      equation: {
        expression: string
      }
      annotations: {
        bold: boolean
        italic: boolean
        strikethrough: boolean
        underline: boolean
        code: boolean
        color:
          | 'default'
          | 'gray'
          | 'brown'
          | 'orange'
          | 'yellow'
          | 'green'
          | 'blue'
          | 'purple'
          | 'pink'
          | 'red'
          | 'gray_background'
          | 'brown_background'
          | 'orange_background'
          | 'yellow_background'
          | 'green_background'
          | 'blue_background'
          | 'purple_background'
          | 'pink_background'
          | 'red_background'
      }
      plain_text: string
      href: string | null
    }
