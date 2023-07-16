export default function useSsr() {
  const isDom = typeof window !== undefined && window.document && window.document.documentElement

  return {
    isBrowser: isDom,
    isService: !isDom
  }
}