export const Card = ({ele}) => ( 
  <a href="#" className="block max-w-sm p-4 bg-white border w-full h-full border-gray-200 rounded-lg shadow" aria-label="Home">
    {
      ele.title ?
      <>
        <h1 className="mb-4 text-2xl font-bold tracking-tight text-gray-900">{ele.title}</h1>
        <div className="flex flex-wrap gap-2 justify-center items-center">
          {ele.skills.map((skill) => (
            <div key={skill.id} className="flex flex-col gap-2">
              <img className="w-8 h-8 mb-3 rounded-full shadow-lg self-center" src={skill.image} alt={`${skill.image} image`}/>
              <p  className="font-normal text-lg text-gray-700 dark:text-gray-400">{skill.name}</p>
            </div>
          ))}
        </div>
      </> :
      <div className="flex flex-col flex-wrap gap-2 justify-center items-center">
        <img className="w-12 h-12 mb-3 rounded-full shadow-lg" src={ele.image} alt={`${ele.image} image`}/>
        <p key={ele.id} className="font-normal text-lg text-gray-700 dark:text-gray-400">{ele.name}</p>
      </div>
    }
  </a>
)