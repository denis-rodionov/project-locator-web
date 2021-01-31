import React, {Component} from 'react'
import './ProjectList.css'
import {Accordion, Icon, List, Grid, Label} from 'semantic-ui-react'
import {API} from "aws-amplify";

export default class ProjectList extends Component {
    state = {activeIndex: -1, projects: []}

    handleClick = (e, titleProps) => {
        const {index} = titleProps
        const {activeIndex, _} = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({activeIndex: newIndex})
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData() {
        const apiName = 'searchprojects';
        const path = '/project';
        const myInit = { // OPTIONAL
            headers: {}, // OPTIONAL
            response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
            queryStringParameters: {  // OPTIONAL
                name: 'param',
            },
        };

        console.log("getting projects...")
        API
          .get(apiName, path, myInit)
          .then(response => {
            console.log("Response: " + JSON.stringify(response.data));
            this.setState({ projects: response.data })
          })
          .catch(error => {
            console.log(error + ", " + error.response);
         });
    }

    render() {
        const {activeIndex, projects} = this.state

        const renderedSkills = projects.map((project, index) =>
            project['skills'].map((skill, index) =>
                <Label as='span' className='skill-tag'>{skill}</Label>
            )
        );
        console.log(renderedSkills)

        const renderedProjects = projects.map((project, index) => [
                <Accordion.Title
                    active={activeIndex === index}
                    index={index}
                    onClick={this.handleClick}
                    key={"title" + index}
                >
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={1}>
                                    <Icon name='dropdown'/>
                                </Grid.Column>
                                <Grid.Column width={11}>
                                    { project['title'] }
                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <div className="ui label orange">
                                        { new Date(project['publication_timestamp'] * 1000).toDateString() }
                                    </div>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                </Accordion.Title>,
                <Accordion.Content active={activeIndex === index} key={"content" + index}>
                    <List>
                        <List.Item icon='calendar alternate outline' content={project['start']} />
                        <List.Item icon='clock' content={project['duration']} />
                        <List.Item icon='marker' content={project['location']} />
                        <List.Item
                            icon='linkify'
                            content={<a href={project['url']}>Gulp</a>}
                        />
                        <List.Item icon='euro sign' content={project['rate']} />
                        <List.Item icon='search' content={project['query']} />
                        <List.Item icon='leanpub' content={ "Publication time: " + project['publication_time']} />
                        <List.Item icon='users' content={project['provider']} />
                        <List.Item/>
                        <List.Description>
                            <h5>Description:</h5>
                            <p>
                                {project['description']}
                            </p>
                        </List.Description>
                        <List.Item icon='search' content={project['search_query']} />
                        <List.Item icon='address card' content='Skills'>
                            {renderedSkills[index]}
                        </List.Item>
                    </List>
                </Accordion.Content>]
        );

        return (
            <Accordion styled>
                {renderedProjects}
            </Accordion>
        )
    }
}