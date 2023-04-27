import React from 'react';
import about from '../styles/About.module.scss';

class Statements extends React.PureComponent {
    render() {
        return (
            <div>
                {this.props.statements.map((statement, index) => {
                    return <Statement statement={statement} key={index} />;
                })}
            </div>
        )
    }
}

class Statement extends React.PureComponent {
    render() {
        return (
            <div className={about.statement}>
                <div className={about.topic_statement}>{this.props.statement.topic}</div>
                <div 
                    className={about.answer_statement}
                    dangerouslySetInnerHTML={{ __html: this.props.statement.answer }}
                />
            </div>
        )
    }
}

class About extends React.PureComponent {
    render() {
        return (
            <div className={about.container}>
                <div className={about.terminal_bar}>
                    <div className={`${about.circle_button} ${about.red}`}/>
                    <div className={`${about.circle_button} ${about.yellow}`} />
                    <div className={`${about.circle_button} ${about.green}`} />
                </div>
                <div className={about.terminal_window}>
                    <Statements statements={this.props.statements} />
                </div>
            </div>
        )
    }
}

export default About;