import React from 'react';
import style from '../styles/Experiences.module.scss';

class ExperienceCard extends React.PureComponent {
    render() {
        const { job_title, company, tools, description, location_date, image } = this.props;

        return (
            <div className={style.experience_card}>
                <img className={style.experience_image} src={image} alt="Company Logo"/>
                <div className={style.experience_content}>
                    <div className={style.job_title}>{job_title}</div>
                    <div className={style.company}>{company}</div>
                    <div className={style.tools}>Tools: {tools}</div>
                    <div className={style.description}>
                        {description.map(point => (
                            <ul>
                                <li>{point}</li>
                            </ul>
                        ))}
                    </div>
                    <div className={style.location_date}>{location_date}</div>
                </div>
            </div>
        )
    }
}

class Experiences extends React.PureComponent {
    render() {
        const { experiences } = this.props;
        return (
            <div>
                <div className={style.title}>Experience</div>
                <div className={style.container}>
                    {experiences.map(exp => (
                        <ExperienceCard
                            job_title={exp.job_title}
                            company={exp.company}
                            tools={exp.tools}
                            description={exp.description}
                            location_date={exp.location_date}
                            image={exp.image}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Experiences;