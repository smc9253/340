import React, {useState, useEffect} from 'react'
import getData from '../utils/getData'
import { TabPane, Tab } from 'semantic-ui-react'
import PeopleGroup from './PeopleGroup'

import './People.css'


// const PeopleTabs = () => <Tab panes={panes} />

const PeopleTabs = () => {
    //state
    const [loaded, setLoaded] = useState(false);
    const [pepObj, setPepObj] = useState();

    //useEffect
    useEffect(() => {
        getData('people/')
            .then((json) => {
                console.log('people got', json);
                setPepObj(json);
                setLoaded(true);
            });
    }, []);

    const panes = [
        { menuItem: 'Faculty', render: () => <TabPane>
          <PeopleGroup title="Faculty" whichGroup={pepObj.faculty}/>
        </TabPane> },
        { menuItem: 'Staff', render: () => <TabPane>
              <PeopleGroup title="Staff" whichGroup={pepObj.staff}/>
        </TabPane> }
      ]

    //if not loaded return

    if(!loaded) {
        return (
            <>
                <h1>Our People Loading...</h1>
            </>
        )
    }

    return (
        <>
        <div className="people" id="people">
            <h1>{pepObj.title}</h1>
            <h3>{pepObj.subTitle}</h3>
            <Tab panes={panes} />
        </div>
        </>
    )
}

export default PeopleTabs