export interface RecipientsDisplayProps {
  recipients: any
}

export default function RecipientsDisplay({
  recipients,
}: RecipientsDisplayProps) {
  return (
    <>
      {recipients.map((item, index) => {
        return (
          <span key={index} style={{ marginTop: '2rem' }}>
            {index + 1}. {item} <br />
          </span>
        )
      })}
    </>
  )
}
