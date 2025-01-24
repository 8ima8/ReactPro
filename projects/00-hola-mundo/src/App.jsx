import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'fabian_ima8',
        name: 'Fabian Beltran xdxd',
        isFollowing: true
        
    },
    {
        userName: 'milica_yb',
        name: 'Milica sape',
        isFollowing: false
        
    },
    {
        userName: 'TripRex7',
        name: 'tripita rex',
        isFollowing: true
        
    },
    {
        userName: 'MUnitedEs',
        name: 'Forever United CR7',
        isFollowing: false
    }

]
export function App () {



    return(
       <section className='App'>
        {
            users.map(user => {
                const {userName,name, isFollowing}= user
                return (
                    <TwitterFollowCard
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                )
            })
        }
       </section>
    )
}