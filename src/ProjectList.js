import React, {Component} from 'react'
import './ProjectList.css'
import {Accordion, Icon, List, Grid, Label} from 'semantic-ui-react'

export default class ProjectList extends Component {
    state = {activeIndex: -1}

    handleClick = (e, titleProps) => {
        const {index} = titleProps
        const {activeIndex} = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({activeIndex: newIndex})
    }

    render() {
        const {activeIndex} = this.state

        return (
            <Accordion styled>
                <Accordion.Title
                    active={activeIndex === 0}
                    index={0}
                    onClick={this.handleClick}
                >

                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={1}>
                                    <Icon name='dropdown'/>
                                </Grid.Column>
                                <Grid.Column width={11}>
                                    Java Developer
                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <div className="ui label orange">
                                        Today
                                    </div>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>

                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                    <List>
                        <List.Item icon='calendar alternate outline' content='March 2021'/>
                        <List.Item icon='clock' content='3 Month' />
                        <List.Item icon='marker' content='Munich, Germany'/>
                        <List.Item
                            icon='linkify'
                            content={<a href='http://www.semantic-ui.com'>Gulp</a>}
                        />
                        <List.Item icon='euro sign' content='50 euro per hour' />
                        <List.Item icon='search' content='Java' />
                        <List.Item icon='leanpub' content='Publication time: 19.01.2021 14:31 h' />
                        <List.Item icon='users' content='Provider: 30' />
                        <List.Item/>
                        <List.Description>
                            <h5>Description:</h5>
                            <p>
                                A dog is a type of domesticated animal. Known for its loyalty and
                                faithfulness, it can be found as a welcome guest in many households
                                across the world.
                            </p>
                        </List.Description>
                        <List.Item icon='address card' content='Skills'>
                            <Label as='span' class='skill-tact'>Java</Label>
                            <Label as='span' className='skill-tag'>Linux</Label>
                            <Label as='span' className='skill-tag'>Linux</Label>
                            <Label as='span' className='skill-tag'>Linux</Label>
                            <Label as='span' className='skill-tag'>Linux</Label>
                            <Label as='span' className='skill-tag'>Linux</Label>
                            <Label as='span' className='skill-tag'>Linux</Label>
                            <Label as='span' className='skill-tag'>Linux</Label>
                            <Label as='span' className='skill-tag'>Linux</Label>
                            <Label as='span' className='skill-tag'>Linux</Label>
                            <Label as='span' className='skill-tag'>Linux</Label>
                            <Label as='span' className='skill-tag'>Linux</Label>
                            <Label as='span' className='skill-tag'>Linux</Label>
                            <Label as='span' className='skill-tag'>Linux</Label>
                            <Label as='span' className='skill-tag'>Linux</Label>
                        </List.Item>
                    </List>

                </Accordion.Content>

                <Accordion.Title
                    active={activeIndex === 1}
                    index={1}
                    onClick={this.handleClick}
                >
                    <Grid>
                            <Grid.Row>
                                <Grid.Column width={1}>
                                    <Icon name='dropdown'/>
                                </Grid.Column>
                                <Grid.Column width={11}>
                                    Python Developer
                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <div className="ui label orange">
                                        19.01.2021
                                    </div>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                    <p>
                        There are many breeds of dogs. Each breed varies in size and
                        temperament. Owners often select a breed of dog that they find to be
                        compatible with their own lifestyle and desires from a companion.
                    </p>
                </Accordion.Content>

                <Accordion.Title
                    active={activeIndex === 2}
                    index={2}
                    onClick={this.handleClick}
                >
                    <Grid>
                            <Grid.Row>
                                <Grid.Column width={1}>
                                    <Icon name='dropdown'/>
                                </Grid.Column>
                                <Grid.Column width={11}>
                                    Ruby Developer
                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <div className="ui label gray">
                                        03.01.2021
                                    </div>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 2}>
                    <p>
                        Three common ways for a prospective owner to acquire a dog is from
                        pet shops, private owners, or shelters.
                    </p>
                    <p>
                        A pet shop may be the most convenient way to buy a dog. Buying a dog
                        from a private owner allows you to assess the pedigree and
                        upbringing of your dog before choosing to take it home. Lastly,
                        finding your dog from a shelter, helps give a good home to a dog who
                        may not find one so readily.
                    </p>
                </Accordion.Content>
            </Accordion>
        )
    }
}