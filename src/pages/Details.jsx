import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Details() {
    const [singleChar, setSingleChar] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()



    useEffect(() => {
        getitems()
    }, [])


    const getitems = async () => {
        await axios.get('https://finalspaceapi.com/api/v0/character')
            .then(function (response) {
                // handle success
                setSingleChar(...response.data.filter((e) => e.id == id));
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });


    }
    return (
        <div className='w-full h-screen flex justify-center items-center gap-4 flex-col'>
            <div className="diff  h-96 max-sm:h-[35rem] w-1/2 max-sm:w-screen max-md:w-4/5 max-lg:w-4/5 max-xl:w-3/4">
                <div className="diff-item-1">
                    < div className='h-96 max-sm:h-full flex max-sm:flex-col justify-center items-center gap-4 border bg-base-300' >
                        <img className='h-full' src={singleChar.img_url} alt="" />
                        <div className='h-full justify-between text-lg flex flex-col p-4'>
                            <span className=''>Name: {singleChar.name}</span>
                            <span className=''>Status: {singleChar.status}</span>
                            <span className=''>Species: {singleChar.species}</span>
                            <span className=''>Gender: {singleChar.gender}</span>
                            <span className=''>Hair: {singleChar.hair}</span>
                            <span className=''>Origin: {singleChar.origin}</span>
                            <span className='flex'>Abilities:   <ul className='list-none indent-2'> {singleChar.abilities && singleChar.abilities.length > 0 ? singleChar.abilities.slice(0, 2).map((ability, index) => (
                                <li key={index}>{ability}</li>
                            )) : <li>there is no abilities</li>}
                            </ul></span>
                        </div>
                    </div >
                </div>
                <div className="diff-item-2">
                    <div className='bg-primary flex justify-center items-center gap-4 max-sm:flex-col pointer-events-auto'>
                        <button className=' btn btn-error'>Delete</button>
                        <button className=' btn btn-info' onClick={() => navigate('../')}>Go back</button>
                        <button className=' btn btn-success'>Add To favorites</button>
                    </div>
                </div>
                <div className="diff-resizer w-0"></div>
            </div>
        </div>
    )
}

export default Details

// singleChar.abilities && singleChar.abilities.length > 2 ? singleChar.abilities.slice(0, 2) : singleChar.abilities?.length > 0 ? singleChar.abilities : 'Does Not Have An Abilities'
