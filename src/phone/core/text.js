const replacements = [
  ['ÅŸ', 's'],
  ['Å', 's'],
  ['Åž', 'S'],
  ['Å', 'S'],
  ['Ä±', 'i'],
  ['Ä°', 'I'],
  ['Ã¼', 'u'],
  ['Ãœ', 'U'],
  ['Ã¶', 'o'],
  ['Ã–', 'O'],
  ['Ã§', 'c'],
  ['Ã‡', 'C'],
  ['ÄŸ', 'g'],
  ['Äž', 'G'],
  ['â€¹', '‹'],
  ['â€º', '›'],
  ['â€¢', '•'],
  ['â€œ', '"'],
  ['â€', '"'],
  ['â€™', "'"],
  ['âœ“', '✓'],
  ['âš¡', '⚡'],
  ['ğŸ‘‹', 'wave'],
  ['ğŸ‘', 'OK'],
  ['ğŸ“', 'PIN'],
  ['ğŸ“·', 'CAM'],
  ['ğŸŽ¤', 'VOICE'],
  ['ğŸ‘¤', 'CARD'],
]

export function normalizeText(value, fallback = '') {
  if (typeof value !== 'string') return fallback
  let next = value
  for (const [broken, fixed] of replacements) {
    next = next.split(broken).join(fixed)
  }
  return next
}

export function readNormalized(value, lang = 'tr', fallback = '') {
  if (value && typeof value === 'object') {
    return normalizeText(value[lang] || value.en || fallback, fallback)
  }
  return normalizeText(value, fallback)
}

export default normalizeText
