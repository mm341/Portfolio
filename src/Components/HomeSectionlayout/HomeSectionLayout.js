

const HomeSectionLayout = (props) => {
    return (
  
      <div className='container mx-auto'>
        <div className="grid grid-cols-1  sm:grid-cols-2  lg:grid-cols-3    gap-8   my-[1rem] w-[20rem] sm:w-full sm:mx-0 mx-auto ">
          {props.children}
        </div>
      </div>
    )
  }
  
  export default HomeSectionLayout