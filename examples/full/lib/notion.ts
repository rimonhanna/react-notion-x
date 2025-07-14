import { Client } from '@notionhq/client'
import { NotionAPI } from 'notion-client'
import {
  type ExtendedRecordMap,
  type SearchParams,
  type SearchResults
} from 'notion-types'

import { previewImagesEnabled } from './config'
import { getPreviewImageMap } from './preview-images'

const notion = new NotionAPI(
  new Client({
    auth: process.env.NOTION_TOKEN
  })
)

export async function getPage(pageId: string): Promise<ExtendedRecordMap> {
  const recordMap = await notion.getPage(pageId)

  if (previewImagesEnabled) {
    const previewImageMap = await getPreviewImageMap(recordMap)
    ;(recordMap as any).preview_images = previewImageMap
  }

  return recordMap
}

export async function search(params: SearchParams): Promise<SearchResults> {
  return notion.search(params)
}
