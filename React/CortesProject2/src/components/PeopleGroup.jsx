import React from "react";
import PeopleModal from "./PeopleModal";

const PeopleGroup = ({title, whichGroup}) => {
    return (
        <>
            <h2>{title}</h2>
            <div className="peopleList">
                {whichGroup.map((p) => [
                    <div className="peopleListItem" key={p.username}>
                        {/* <h3>{p.name}</h3> */}
                        <img src={p.imagePath} alt="person"/>
                        <PeopleModal {...p}/>
                    </div>
                ])}
            </div>
        </>
    )
}

export default PeopleGroup