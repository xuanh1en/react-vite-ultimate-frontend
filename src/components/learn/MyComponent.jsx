import './style.css';


const MyComponent=() =>{
    const hoidanit="eric 1";
    return (
        <>
            <div>{hoidanit} & hoidanit</div>
            <div>{console.log("xuanhien")}</div>
            <div className='child'> child</div>

        </>
    )
  }

  export default MyComponent