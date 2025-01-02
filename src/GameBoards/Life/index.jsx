import { Button, Box } from "@mui/material";
import { BillAmount } from "../../component";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function index({ appTitle }) {
  // const value = useSelector((state) => state.gameInput.formData[name])
  const [tasks, setTasks] = useState([]);

  const [inputs, setInputs] = useState({
    playerName: "",
    TenX: "",
    FiftyX: "",
    HundreadX: "",
    FiveHundreadX: "",
    Pegs: "",
    HomePrice: "",
    finalScore: '', 
  });

  const handleTotalAmount = (
    ten,
    fifty,
    hunread,
    fiveHundread,
    peg,
    homePrice, 
  ) => {
    function billAmount(bill, price) {
      return bill * price;
    }

    const tenAmount = billAmount(ten, 10000);
    const fiftyAmount = billAmount(fifty, 50000);
    const hundreadAmount = billAmount(hunread, 100000);
    const fivehundreadAmount = billAmount(fiveHundread, 500000);
    const pegAmount = billAmount(peg, 50000);

    const allAmount = [
      tenAmount,
      fiftyAmount,
      hundreadAmount,
      fivehundreadAmount,
      pegAmount,
      Number(homePrice),
    ];

    const result = allAmount.reduce(
      (accumulator, currenValue) => accumulator + currenValue
    );

   console.log('result:', result)
   return result; 

  };

  function addTotalPoints(field ,value){
    setInputs((prev) => ({
      ...prev, 
      [field]: value, 
    }))
   }

  const playerResult = tasks.map((player) => (
    handleTotalAmount(
      player?.TenX,
      player?.FiftyX,
      player?.HundreadX,
      player?.FiveHundreadX,
      player?.Pegs,
      player?.HomePrice, 
    )
  ));
  console.log('taskresult:', playerResult[0])
 
  const handleInputChange = (name, value) => {
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  console.log('playerName:', inputs.playerName)
  console.log('finalScore:', inputs.finalScore)


  const inputDelete = [
    "playerName",
    "TenX",
    "FiftyX",
    "HundreadX",
    "FiveHundreadX",
    "Pegs",
    "HomePrice",
  ];

  const removeTask = (playerName) => {
    setTasks(tasks.filter((name) => name?.playerName !== playerName));
  };


  const handleAddTask = () => {
    if (inputs === "") return;
    setTasks([...tasks, inputs]);    
    inputDelete.map((name) => {
      setInputs((prev) => ({ ...prev, [name]: "" }));
    });

  };

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          left: "5rem",
          top: "-1rem",
        }}
      >
        <h1 style={{ height: "1rem", fontSize: "1.8rem" }}>{appTitle}</h1>
        <h1 style={{ height: "1rem", fontSize: "1.5" }}>Game of life</h1>
        <BillAmount
          name="playerName"
          onChange={handleInputChange}
          value={inputs.playerName}
          billName={"Player name"}
        />
        <BillAmount
          name="TenX"
          onChange={handleInputChange}
          value={inputs.TenX}
          billName={"TenX"}
        />
        <BillAmount
          name="FiftyX"
          onChange={handleInputChange}
          value={inputs.FiftyX}
          billName={"FiftyX"}
        />
        <BillAmount
          name="HundreadX"
          onChange={handleInputChange}
          value={inputs.HundreadX}
          billName={"HundreadX"}
        />
        <BillAmount
          name="FiveHundreadX"
          onChange={handleInputChange}
          value={inputs.FiveHundreadX}
          billName={"FiveHundreadX"}
        />
        <BillAmount
          name="Pegs"
          onChange={handleInputChange}
          value={inputs.Pegs}
          billName={"Pegs"}
        />
        <BillAmount
          name="HomePrice"
          onChange={handleInputChange}
          value={inputs.HomePrice}
          billName={"Home price"}
        />
        <Button
          onClick={handleAddTask}
          sx={{
            color: "white",
            backgroundColor: "#060606",
          }}
        >
          Calculate
        </Button>
      </Box>

      {tasks.map((player) => (
        <div>
          <h2>PlayerName: {player?.playerName}</h2>
          <h2>totalAmount: {player?.finalScore}</h2>
          <Button onClick={() => removeTask(player?.playerName)}>Delete</Button>
        </div>
      ))}
    </>
  );
}
