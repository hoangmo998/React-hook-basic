import {createContext} from 'react'

const peopleContext = createContext({
    people: [], 
    addPerson: (people) => {}
})

export default peopleContext
