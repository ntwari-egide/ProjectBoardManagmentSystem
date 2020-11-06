import React,{Component} from "react";

let Backlog = [
    {
        title: "Nulla volupat aliquam  velit",
        description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic",
        addedBy : "OZ",
        time: null
    },
    {
        title: "Facilisis in pretium nisl aliquet",
        description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,",
        addedBy : "LE",
        time: "two days ago"
    },   
    {
        title: "Eget portitor lorem",
        description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic",
        addedBy : "ME",
        time: null
    }
]

let ToDo = [
    {
        title: "Eget pportitiro Lorem",
        description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic",
        addedBy : "AM",
        time: "Today"
    },
    {
        title: "Consectetur adipiscng elit",
        description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic",
        addedBy : "OZ",
        time: "In three days"
    },   
    {
        title: "Nulla volutpat aliquam velit",
        description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic",
        addedBy : "LE",
        time: "Judly 21"
    }
]

let Done = [
    {
        title: "Ac tristique libero vlutpat at",
        description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic",
        addedBy : "LE",
        time: "A week Ago"
    },
    {
        title: "Phasellus Iaculis neque",
        description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic",
        addedBy : "OZ",
        time: "Last Tuesday"
    },   
    {
        title: "Nulla volutpat aliquam velit",
        description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic",
        addedBy : "AM",
        time: null
    }
]
export default class ProjectBoard extends Component{
    render(){
        
        return (
            <div>
                <div class="all-project-board container container row">
                    <div class="col">
                    <h3>Backlog</h3>
                        {
                            Backlog.map((task,index) => 
                            <div key={index} class="container">
                                <p class="title">{task.title}</p>
                                <p class="description">{task.description}</p>
                                <div class="row"> 
                                    <div class="col"> 
                                        <p class="added-by">{task.addedBy}</p>
                                    </div>
                                    <div class="col"> 
                                        <p class="time">{task.time}</p>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    </div>
                    <div class="col">
                    <h3>ToDo</h3>
                    {
                        ToDo.map((task,index) => 
                            <div key={index} class="container">
                                <p class="title">{task.title}</p>
                                <p class="description">{task.description}</p>
                                <div class="row"> 
                                    <div class="col"> 
                                        <p class="added-by">{task.addedBy}</p>
                                    </div>
                                    <div class="col"> 
                                        <p class="time">{task.time}</p>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    </div>
                    <div class="col">
                    <h3>Done</h3>
                    {
                        Done.map((task,index) => 
                            <div key={index}  class="container">
                                <p class="title">{task.title}</p>
                                <p class="description">{task.description}</p>
                                <div class="row"> 
                                    <div class="col"> 
                                        <p class="added-by">{task.addedBy}</p>
                                    </div>
                                    <div class="col"> 
                                        <p class="time">{task.time}</p>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    </div>
                </div>               
            </div>
        )
    }
}