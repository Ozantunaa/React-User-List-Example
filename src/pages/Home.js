import { useState, useEffect } from "react"
/* import _ from 'lodash' */

import Line from "../components/Line"
import { ChartWrapper, HomeContainer, Search } from "../components/ScStyle"
import Skeleton from "../components/Skeleton"
import { getUsers } from "../services/UserService"

const Home = () => {
    const [user, setUser] = useState([])
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(true)
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    /* const debouncedSearchTerm = _.debounce(() => setSearch(search), 500); */

    const fetchUser = async () => {
        try {
            setLoading(true)
            await new Promise((resolve) => setTimeout(resolve, 3000))
            const res = await getUsers()
            setUser(res.data.results)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchUser()
    }, [])

    const removeItem = (name) => {
        const newItems = user.filter(user => user.name !== name)
        setUser(newItems)
    }

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const setModalIsOpenToTrue = () => {
        setModalIsOpen(true)
    }
    const setModalIsOpenToFalse = () => {
        setModalIsOpen(false)
    }

    const filteredUsers = user.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));

    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedValue(value);
    };



    return (

        <HomeContainer>
            <div style={{ flexDirection: 'row' }}>
                <Search type={"search"} placeholder="search" value={search} onChange={handleSearch} />
                <select onChange={handleChange} style={{ backgroundColor: '#191919', color: 'white',borderColor:'black', padding:'4px', borderRadius:'10px' }} >
                    <option >All</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <ChartWrapper>
                <div className="wrapper2">
                    <ul className="categoryItem">Name</ul>
                    <ul className="categoryItem">Height</ul>
                    <ul className="categoryItem">Gender</ul>
                    <ul className="categoryItem">Films</ul>
                </div>

                {loading ? (
                    <Skeleton />
                ) :
                    <>

                        {selectedValue === 'male' ?
                            user.filter(user => user.gender === 'male').map((user) => (
                                <Line user={user} key={user.name} removeItem={removeItem} openModal={setModalIsOpenToTrue} closeModal={setModalIsOpenToFalse} modalIsOpen={modalIsOpen} />
                            ))
                            : selectedValue === 'female' ?
                                user.filter(user => user.gender === 'female').map((user) => (
                                    <Line user={user} key={user.name} removeItem={removeItem} openModal={setModalIsOpenToTrue} closeModal={setModalIsOpenToFalse} modalIsOpen={modalIsOpen} />
                                ))
                                :
                                filteredUsers.map((user) => (
                                    <Line user={user} key={user.name} removeItem={removeItem} openModal={setModalIsOpenToTrue} closeModal={setModalIsOpenToFalse} modalIsOpen={modalIsOpen} />
                                ))
                        }

                    </>

                }

            </ChartWrapper>
        </HomeContainer>

    )
}

export default Home

