import React, {useState} from "react";

const App = () => {
  const [weight,setWeight] = useState(0)
  const [height,setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')


  let calBmi = (e) => {

    e.preventDefault();

    if(height === 0 || weight === 0)
    {
      alert("Please enter valid value")
    }
    else{
      let bmi = (weight/(height*height)*703)
      setBmi(bmi.toFixed(2))

      if (bmi < 25){
        setMessage("You are under-weight")
      }
      else if (bmi >=25 && bmi < 30){
        setMessage("You are perfect")
      }
      else{
        setMessage("You are overweight")
      }
    }
  }

  let reload = () => {
    window.location.reload()
  }

  return (
    <div className="app">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input type="text" placeholder="Enter your weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>

          <div>
            <label>Height (inch)</label>
            <input type="text" placeholder="Enter your height" value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>

          <button className="btn" type="submit">
            Submit
          </button>
          <button className="btn btn-outline" onClick={reload} type="submit">
            Reload
          </button>

          <div className="center">
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
