import { useState } from "react"

export function TwitterFollowCard ({userName='unknown', children}){
    const [isFollowing, setIsFollowing] = useState(false)
    // es lo mismo que
    //const state = useState(false)
    //const isFollowing = state[0]
    //const setIsFollowing = state[1]
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing? 'tw-followCard-button is-following' : 'tw-followCard-button'
    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }

    return(
        <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img className="tw-followCard-avatar" alt="avatar de 8ima8" 
            src={`https://unavatar.io/${userName}`}/>
            <div className="tw-followCard-info">
                <strong>{children}</strong>
                <span className="tw-followCard-infoUserName">@{userName}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                <span className="tw-followCard-text">{text}</span>
                <span className="tw-followCard-stopFollow">Dejar de Seguir</span>
            </button>
        </aside>    
       </article>

    )
}