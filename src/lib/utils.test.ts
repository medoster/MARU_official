import { cn } from './utils'

describe('cn utility', () => {
  it('concatenates class names', () => {
    expect(cn('a', 'b')).toBe('a b')
  })

  it('merges conflicting class names', () => {
    expect(cn('p-2', 'p-4')).toBe('p-4')
  })
})
