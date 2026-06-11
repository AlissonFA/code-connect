import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Input } from './Input'

describe('Input Component', () => {
  it('should render the label and input field', () => {
    render(<Input label="Test Label" id="test-input" placeholder="Enter text" />)
    
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument()
  })

  it('should call onChange handler when text is typed', async () => {
    const handleChange = vi.fn()
    render(<Input label="Test Label" id="test-input" onChange={handleChange} />)
    
    const input = screen.getByLabelText('Test Label')
    await userEvent.type(input, 'hello')
    
    expect(handleChange).toHaveBeenCalledTimes(5)
  })
})
