import {useState} from 'react'

type copiedFn = (text: string) => Promise<boolean>
type copiedText = string | null

function useCopyToClipboard(): [copiedText, copiedFn] {
  const [copiedText, setCopiedText] = useState<string | null>(null)

  const copy: copiedFn = async (text: string) => {  
    if (!navigator?.clipboard) {
      console.error('Clipboard API not available')
      return false
    }

    try {
      await navigator.clipboard.writeText(text)
      setCopiedText(text)

      return true
    } catch (error) {
      console.warn('Copy failed:', error)
      setCopiedText(null)
      return false
    }
  }

  return [copiedText, copy]
}

export default useCopyToClipboard