export function Form({
  block,
  notionSiteUrl
}: {
  block: any
  notionSiteUrl: string
}) {
  const formId = block?.id?.replace(/-/g, '')
  return (
    <iframe
      className='notion-form-iframe'
      src={`${notionSiteUrl}/ebd/${formId}`}
      width='100%'
      height='600'
      allowFullScreen
      title={`Notion Form: ${block?.id}`}
    />
  )
}
