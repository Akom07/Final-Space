import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Allcharacter() {
    const [allChar, setAllChar] = useState([])
    const [shown, setShown] = useState([])

    const navigate = useNavigate()



    useEffect(() => {
        getitems()
    }, [])


    const getitems = () => {
        axios.get('https://finalspaceapi.com/api/v0/character')
            .then(function (response) {
                // handle success
                setAllChar(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });


    }

    const deleteItem = (e) => {
        setAllChar(allChar.filter((ele) => ele.id != e))
    }



    return (
        <div className='flex flex-wrap gap-4 justify-center items-center'>
            {
                allChar.map((e) => {
                    return (
                        <div key={e.id} className='flex flex-col items-center border rounded-lg gap-2 p-2 w-72 flex-wrap shadow-lg bg-zinc-800'>
                            <img src={e.img_url} alt="" />
                            <h1>{e.name}</h1>
                            <div className='w-full flex justify-around items-center'>
                                <button
                                    className='btn btn-info'
                                    onClick={() => navigate(`../${e.id}`)}
                                >More Detail</button>
                                <button
                                    onClick={() => deleteItem(e.id)}
                                    className='btn btn-error'>Delete</button>
                            </div>
                        </div>

                    )
                })
            }
        </div>
    )
}

export default Allcharacter