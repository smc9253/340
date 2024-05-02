import React, {useState} from "react";
import './Degrees.css';
import getData from '../utils/getData.js';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Degrees = () => {
    //state...
    const [loaded, setLoaded] = useState(false);
    const [degObj, setDegObj] = useState();

    //go get data...
    React.useEffect(() => {
        getData('degrees/')
            .then((json) => {
                console.log(json);
                setDegObj(json);
                setLoaded(true);
            })
    }, []);


    if(!loaded) return (
        <>
            <h1>...Loading Degrees...</h1>
        </>
    )

    
    return (
        <>
        <div className="degreeList" id="degrees">
            <h2 className="title">Undergraduate Degrees</h2>
                    {degObj.undergraduate.map((d) => [
                        <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <div key={d.degreeName}>
                                <Typography className="degreeListItem"><h3>{d.title}</h3></Typography>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className="degreeListDescription">{d.description}</Typography>
                                    <h4>Concentrations</h4>
                                    <Typography className="degreeListConcentration">
                                        {d.concentrations.map((c) => [
                                            <p key={c}>{c}</p>
                                        ])}
                                    </Typography>
                        </AccordionDetails>
                        </Accordion>
                    ])}
            </div>

            <div className="degreeList">
            <h2 className="title">Graduate Degrees</h2>
                    {degObj.graduate.map((d) => [
                        <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <div key={d.degreeName}>
                                <Typography className="degreeListItem"><h3>{d.title ? d.title : d.degreeName}</h3></Typography>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className="degreeListDescription">{d.description}</Typography>
                                    <Typography className="degreeListConcentration">
                                    {d.concentrations && 
                                        <div>
                                            <h4>Concentrations</h4>
                                            {d.concentrations.map((e) => [ 
                                                <p key={e}>{e}</p>
                                            ])}
                                        </div> 
                                    }
                                    {d.availableCertificates && 
                                        <div>
                                            <h4>Available Certificates</h4>
                                            {d.availableCertificates.map((e) => [ 
                                            <p key={e}>{e}</p>
                                            ])}
                                        </div>
                                    }
                                    </Typography>
                        </AccordionDetails>
                        </Accordion>
                    ])}
            </div>
        </>
    )
};

export default Degrees;