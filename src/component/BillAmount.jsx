import { TextField, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateField, resetForm } from "../redux/gameInput";
import { useState } from "react";

export default function BillAmount({ name,billName,value, onChange }) {
//    const dispatch = useDispatch(); 
//    const value = useSelector((state) => state.gameInput.formData.playerName)
//    const v = useSelector((state) => state.gameInput.formData.TenX)
//    const [bill, setBill] = useState(); 
//    console.log('bill:', bill)

//    console.log('playerName:', value)
//    console.log('tenX:', v)

//    const inputs = [
//     "playerName",
//     "TenX",
//     "FiftyX",
//     "HundreadX",
//     "FiveHundreadX",
//     "Pegs",
//     "HomePrice"
//   ]
//   console.log('bill:', billName)

//   const handleChange = (e) => {
//         dispatch(updateField({
//             field: billName, 
//             value: e.target.value, 
//         }))
//   } 

    return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <TextField
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.name, e.target.value)}
        type={billName == "Player name" ? "text" : "number"}
        label={`${billName}`}
        sx={{
          position: "relative",
        }}
      />
    </Box>
  );
}
