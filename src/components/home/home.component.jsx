import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { HomeContainer } from './home.styles';
import Student from '../students/students.component';
import FilterForm from '../filter-form/filter-form.component';

const Home = () => {
    const [fetchData, setFetchData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        const res = await axios.get(`https://api.hatchways.io/assessment/students`)
        setFetchData(res.data.students)
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    
    const filterStudent = fetchData.filter((student) => 
    student.firstName.toLowerCase().startsWith(search) || student.lastName.toLowerCase().startsWith(search))

    return(
        <HomeContainer>
            <div className='filter'>
               <FilterForm search={search} handleChange={handleChange}/>
            </div>
            <div className='container'>
                {
                    filterStudent.map((student) => <Student key={student.id} student={student}/>)
                }
            </div>
        </HomeContainer>
    )
}

export default Home;