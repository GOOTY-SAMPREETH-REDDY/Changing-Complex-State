import React,{useState} from "react";

function App() {

  const [fullName,setFullName]=useState({
    fName:"",
    lName:""
  });
  
  function handleChange(event)
  {
    const inputValue=event.target.value;

    const name=event.target.name;
    if(name==="fName")
    {
      setFullName({fName:inputValue});
    }
    else if(name==="lName"){
      setFullName({lName:inputValue});
    }
    
  }
  
  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input name="fName" placeholder="First Name" 
        onChange={handleChange}
        />
        <input name="lName" placeholder="Last Name" 
        onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
