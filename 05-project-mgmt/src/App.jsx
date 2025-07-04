import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
 const [projectsState, setProjectsState] = useState({
  selectedProjectId : undefined,
  projects: []
 });

 function handleDeleteProject(){
  setProjectsState(prevState => {
    return{
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId),

  }
  })
 }

 function handleSelectProject(id){
  setProjectsState(prevState => {
    return{
      ...prevState,
      selectedProjectId: id
  }
  })
 }

 function handleStartAddProject(){
  setProjectsState(prevState => {
    return {
      ...prevState,
      selectedProjectId: null,
    }
  })
 }

 function handleCancelAddProject(){
    setProjectsState((prevState) => {
      return{
        ...prevState,
        selectedProjectId: undefined,
      }
    })
 }

 function handleAddProject(projectData){
  console.log("New project added : ", projectData)
  setProjectsState(prevState => {
    const newProject = {
      ...projectData,
      id: Date.now().toString(),
    };

    const updatedState = {
      ...prevState,
      selectedProjectId: undefined,
      projects: [...prevState.projects, newProject],
    };

    console.log("Updated state:", updatedState);
    return updatedState;
  });
 }

 const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)

 let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} />
 if(projectsState.selectedProjectId === null){
  content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
 }else if(projectsState.selectedProjectId === undefined){
  content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
 }


  return (
    <>
      <main className="h-screen mb-8 flex gap-10">
        <ProjectSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects} onSelectProject={handleSelectProject} />
       {content}
      </main>
    </>
  );
}

export default App;
