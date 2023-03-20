import { useState } from 'react'

export const Cat = () => {
    const [cat, setCat] = useState({
        name: 'Dexter',
        age: 5
    })
    const handleClick = () => {
        console.log('click')
        //ssetCat({ ...cat, age: cat.age + 1})
        setCat((prev) => ({...prev, age: cat.age + 1}))
        console.log('click: ', cat.age)
    }
    return (
        <>
            <h2>{cat.name} - {cat.age}</h2>
            <button className='btn btn-dark mg-2' onClick={handleClick}>Update age</button>
        </>
    )
}