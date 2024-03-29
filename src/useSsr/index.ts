export default function useSsr() {
  const isDOM = typeof window !== undefined && window.document && window.document.documentElement

  return {
    isBrowser: isDOM,
    isService: !isDOM
  }
}