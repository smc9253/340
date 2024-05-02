import React, {useState} from "react";
import './Minors.css';
import getData from '../utils/getData.js';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MinorModal from "./MinorModal.jsx";

const Minors = () => {
    //state...
    const [loaded, setLoaded] = useState(false);
    const [minObj, setMinObj] = useState();

    //go get data...
    React.useEffect(() => {
        getData('minors/')
            .then((json) => {
                console.log(json);
                setMinObj(json);
                setLoaded(true);
            })
    }, []);


    if(!loaded) return (
        <>
            <h1>...Loading Minors...</h1>
        </>
    )

    
    return (
        <>
    
         <div className="minorList" id="minors">
            <h2>Minors</h2>
                    {minObj.UgMinors.map((m) => [
                        <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <div key={m.name}>
                                <Typography className="minorListItem">
                                    <h3>{m.title}</h3>
                                </Typography>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className="minorListDescription">{m.description}</Typography>
                            <h4>Courses</h4>
                                    <Typography className="minorListCourses">
                                        {m.courses.map((c) => [
                                            <div key={c}>
                                                <MinorModal course={c}/>
                                            </div>
                                        ])}
                                        <h4>Note:</h4>
                                        <p>{m.note}</p>
                                    </Typography>
                                
                        </AccordionDetails>
                        </Accordion>
                    ])}
            </div>
        </>
    )
};

export default Minors;