import {describe,it,expect, beforeEach, vi} from 'vitest'
import { cleanup, render,screen,fireEvent } from '@testing-library/react'
import { Router } from './Router'
import { Route } from './Route'
import { Link } from './Link'
import { getCurrentPath } from './utils/getCurrentPath'
import { waitFor } from '@testing-library/react'
import React from 'react'

vi.mock('./utils/getCurrentPath.js', () => ({
    getCurrentPath: vi.fn()
}))

describe('Router',()=>{
    beforeEach(()=>{
        cleanup()
        vi.clearAllMocks()
    })

    it('should render without problems', ()=>{
        render(<Router routes={[]}/>)
        expect(true).toBeTruthy()
        //expect(1).toBe(1)
    })

    it('should render 404 if no routes match',()=>{
        render(<Router routes={[]} defaultComponent={()=> <h1>404</h1>}/>)
        console.log(screen.debug())
        expect(screen.getByText('404')).toBeTruthy()
    })

    it('should render the component of the first route that matches', () => {
        getCurrentPath.mockReturnValue('/about')
    
        const routes = [
        {
            path: '/',
            Component: () => <h1>Home</h1>
        },
        {
            path: '/about',
            Component: () => <h1>About</h1>          }
        ]
    
        render(<Router routes={routes} />)
        expect(screen.getByText('About')).toBeTruthy()
    })

    it('should navigate using Links', async () => {
        getCurrentPath.mockReturnValueOnce('/')
    
        render(
        <Router>
            <Route
            path='/' Component={() => {
                return (
            <>
                    <h1>Home</h1>
                    <Link to='/about'>Go to About</Link>
            </>
                )
        }}
            />
            <Route path='/about' Component={() => <h1>About</h1>} />
        </Router>
        )
    
        // Click on the link
        const anchor = screen.getByText(/Go to About/)
        fireEvent.click(anchor)
    
        const aboutTitle = await screen.findByText('About')
    
        // Check that the new route is rendered
        expect(aboutTitle).toBeTruthy()
    })



})