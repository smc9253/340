import React, {useState} from "react";
import './Employment.css';
import getData from '../utils/getData.js';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const Employment = () => {
    //state...
    const [loaded, setLoaded] = useState(false);
    const [empObj, setEmpObj] = useState();

    //go get data...
    React.useEffect(() => {
        getData('employment/')
            .then((json) => {
                console.log(json);
                setEmpObj(json);
                setLoaded(true);
            })
    }, []);


    if(!loaded) return (
        <>
            <h1>...Loading Employment...</h1>
        </>
    )

    return (
        <>
        <div className="Employment" id="statistics">
            <div>
                <h2>{empObj.introduction.title}</h2>
                <div className="contentList">
                    {empObj.introduction.content.map((p) => [
                        <div key={p.title} className="contentListItem">
                            <h3 className="contentValue">{p.title}</h3>
                            <p>{p.description}</p>
                        </div>
                    ])}
                </div>
            </div>
        </div>

            <div className="stats">
                <h3>{empObj.degreeStatistics.title}</h3>
                <div className="statList">
                    {empObj.degreeStatistics.statistics.map((p) => [
                        <div key={p.value} className="statListItem">
                            <h2 className="statValue">{p.value}</h2>
                            <p>{p.description}</p>
                        </div>
                    ])}
                </div>
            </div>

        <div className="dataList">
            <div className="accor">
            <List sx={{ width: '100%', maxWidth: 700, bgcolor: 'background.paper' }}>
                <ListItem>
                    <ListItemText primary={empObj.employers.title} />
                </ListItem>
                <Divider />
                <div className="employerList">
                            {empObj.employers.employerNames.map((p) => [
                                <div key={p} className="employerListItem">
                                    <ListItem>
                                        <ListItemText primary={p} />
                                    </ListItem>
                                </div>
                            ])}
                        </div>
                </List>
            </div>

            <div className="accor">
            <List sx={{ width: '100%', maxWidth: 700, bgcolor: 'background.paper' }}>
                <ListItem>
                    <ListItemText primary={empObj.careers.title} />
                </ListItem>
                <Divider />
                <div className="careerList">
                            {empObj.careers.careerNames.map((p) => [
                                <div key={p} className="careerListItem">
                                    <ListItem>
                                        <ListItemText primary={p} />
                                    </ListItem>
                                </div>
                            ])}
                        </div>
                </List>
            </div>
        </div>
        </>
    )
};

export default Employment;