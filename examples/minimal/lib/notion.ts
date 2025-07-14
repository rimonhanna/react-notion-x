import { Client } from '@notionhq/client'
import { NotionAPI } from 'notion-client'

export const notion = new NotionAPI(
  new Client({
    auth: process.env.NOTION_TOKEN
  })
)
