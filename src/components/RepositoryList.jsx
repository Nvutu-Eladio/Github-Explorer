import { useState, useEffect } from "react"
import { RepositoryItem } from "./RepositoryItem"
import '../styles/repositories.scss'

//https://api.github.com/users/Nvutu-Eladio/repos

export function RepositoryList() {

    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/Nvutu-Eladio/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
        // .then(data => console.log(data))
    }, [])

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}
            </ul>   
                
        </section>
    )
}