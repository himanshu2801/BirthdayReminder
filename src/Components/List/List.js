import React from "react";
import './List.css'
const List = ({people}) =>{
    return(
        <ul>
            {iterate(people)}
        </ul>

    );
}
function iterate(data){
    return(
        <>
        {
            data.map((person,index)=>{
                return(
                    <li>
                        <div className="flex">
                            <img src={person.img} class="rounded image" alt={person.name}/>
                            <div className="title">
                                <h3>{person.name}</h3>
                                <h5>{person.age} years</h5>
                            </div>
                        </div>
                    </li>
                )
            })
        }
        </>
    )
}
export default List