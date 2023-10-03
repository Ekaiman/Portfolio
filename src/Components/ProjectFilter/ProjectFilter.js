const ProjectFilter = ({setShowingProjects, projects, showingProjects}) => { 

  const filterProjects = (search) => {
    
    console.log(projects)
    let filtered = projects.filter(proj => proj.lang.includes(search))
    console.log(filtered)
    setShowingProjects(filtered)
  }

  return (
    <section>
      <button>All</button>
      <button
        onClick={() => {
          filterProjects('Vanilla JS')
        }}
      >
        Vanilla JavaScript
      </button>
      <button
        onClick={() => {
          filterProjects('React')
        }}
      >
        React
      </button>
      <button onClick={() => {filterProjects('Ruby')}}>Ruby/Rails</button>
    </section>
  )
}

export default ProjectFilter