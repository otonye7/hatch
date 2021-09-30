import React, {useState} from 'react';
import { StudentContainer } from './students.styles';
import  Form from '../add-form/add-form.component';

const Student = ({student}) => {
    const [toggle, setToggle] = useState(false);
    const [inputs, setInputs] = useState('')
    const [tags] = useState([])
    

    const handleToggle = () => {
        setToggle(!toggle)
    }
    
    let grades = student.grades
    let summedGrades = grades.reduce((x, y) => parseInt(x) + parseInt(y), 0)
    let averageGrades = summedGrades / 8

    const handleInput = (e) => {
        setInputs(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        tags.push(inputs)
    }

    console.log(tags)

    return(
        <StudentContainer>
            <div className='student-container'>
                <div className='image-container'>
                   <img src={student.pic} alt='' />
                </div>
                <div className='others-container'>
                    <div className='name'>
                        <p className='name'>{student.firstName.toUpperCase() + ' ' + student.lastName.toUpperCase()}</p>
                    </div>
                    <div className='rest'>
                        <p className='others'>Email: {student.email}</p>
                        <p className='others'>Company: {student.company}</p>
                        <p className='others'>Skill: {student.skill}</p>
                        <p className='others'>Average: {averageGrades}%</p>
                    </div>
                    {
                        toggle ?
                        <div className='grades'>
                        {
                            grades.map((g) => <p className='others'>{g}%</p>)
                        }
                    </div>
                    :
                    null
                    }
                     <div className='preview'>
                        {
                            tags.map((t) => <p className='tag'>{t} </p>)
                        }
                    </div>
                    <div className='grades'>
                        <Form inputs={inputs} handleInput={handleInput} handleSubmit={handleSubmit}/>
                    </div>
                </div>
            </div>
            {
                toggle ?
                <div className='button-container'>
                  <button onClick={handleToggle} className='plus'>-</button>
               </div>
               :
            <div className='button-container'>
                <button onClick={handleToggle} className='plus'>+</button>
            </div>
            }
        </StudentContainer>
    )
}

export default Student