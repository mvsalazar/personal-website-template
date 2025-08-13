import { render, screen } from '@testing-library/react'
import App from './App'

// Fix matchMedia mock (for useDarkMode or CSS media queries)
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
    }),
})

// Define before any other test or import
if (typeof globalThis.IntersectionObserver === 'undefined') {
    class MockIntersectionObserver {
        constructor() {}
        observe() {}
        unobserve() {}
        disconnect() {}
        takeRecords() { return [] }
    }

    globalThis.IntersectionObserver = MockIntersectionObserver as any
}

test('renders navigation component', () => {
    render(<App />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
})

test('renders hero section', () => {
    render(<App />)
    expect(screen.getByTestId('hero-section')).toBeInTheDocument()
})

test('renders about section', () => {
    render(<App />)
    expect(screen.getByTestId('about-section')).toBeInTheDocument()
})

test('renders skills section', () => {
    render(<App />)
    expect(screen.getByTestId('skills-section')).toBeInTheDocument()
})

test('renders experience section', () => {
    render(<App />)
    expect(screen.getByTestId('experience-section')).toBeInTheDocument()
})

test('renders projects section', () => {
    render(<App />)
    expect(screen.getByTestId('projects-section')).toBeInTheDocument()
})

test('renders contact section', () => {
    render(<App />)
    expect(screen.getByTestId('contact-section')).toBeInTheDocument()
})

test('renders footer', () => {
    render(<App />)
    expect(screen.getByTestId('footer-section')).toBeInTheDocument()
})