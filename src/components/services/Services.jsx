import "./services.css"
import {GiCheckMark} from "react-icons/gi";
import {services_data} from "./services_data";

const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className="container container__services">
                {
                    services_data.map((item) => (
                        <article key={item.id} className="service">
                            <div className="service__head">
                                <h3>{item.title}</h3>
                            </div>

                            <ul className="service__list">
                                {item.contents.map((content, index) => (
                                    <li key={index}>
                                        <GiCheckMark className="service__list-icon"/>
                                        <p>{content.details}</p>
                                    </li>
                                ))
                                }
                            </ul>
                        </article>
                    ))
                }
            </div>
        </section>
    )
};

export default Services;
