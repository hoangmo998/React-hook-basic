import React, {useEffect} from 'react'
import PeopleCount from './PeopleCount'
const NewestPerson = ({newestPerson, peopleCount}) => {
    useEffect(() => {
        const newestPersonName = `${newestPerson.firstName} ${newestPerson.lastName}`;
        document.title = newestPersonName;
        console.log('useEffect')
    }, [newestPerson])
    return (
        <div className='col col-sm-12'>
            <h2 className='mt-4 text-center'>Newest Person: {`${newestPerson.firstName} ${newestPerson.lastName}`}</h2>
            <PeopleCount peopleCount={peopleCount} />
        </div>
    )
}

export default NewestPerson
