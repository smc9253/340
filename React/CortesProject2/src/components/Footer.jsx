import React, {useState} from "react";
import './Footer.css';
import getData from '../utils/getData.js';

const Footer = () => {
    //state...
    const [loaded, setLoaded] = useState(false);
    const [fooObj, setFooObj] = useState();

    //go get data...
    React.useEffect(() => {
        getData('footer/')
            .then((json) => {
                console.log(json);
                setFooObj(json);
                setLoaded(true);
            })
    }, []);


    if(!loaded) return (
        <>
            <h1>...Loading Footer...</h1>
        </>
    )

    return (
        <>
        <div className="container">
        <div className="footer">
            <div className="socials">
                <h2>{fooObj.social.title}</h2>
                <p>{fooObj.social.tweet}</p>
                <p>{fooObj.social.by}</p>
                <p>{fooObj.social.twitter}</p>
                <p>{fooObj.social.facebook}</p>
            </div>

            <div className="links">
                <h2>Quick Links</h2>
                {fooObj.quickLinks.map((p) => [
                    <div key={p.href} className="linkListItem">
                        <a href={p.href} target="_blank">{p.title}</a>
                    </div>
                ])}
                <div className="linkListItem">
                    <div className="news">
                        <a href={fooObj.news} target="_blank">News</a>
                    </div>
                </div>
            </div>
        </div>

            <div className="copyright">
                <div dangerouslySetInnerHTML={{ __html: fooObj.copyright.html }} />
            </div>
        </div>
        </>
    )
};

export default Footer;