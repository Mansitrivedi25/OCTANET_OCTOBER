import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import '../../Styles/Sign.css'
import React from "react";
import {Formik,Field, Form} from 'formik'

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const Signup = () => {
  const initialValues={
    userName:'',
    email:'',
    phoneNumber:'',
    password:'',
    confirmPassword:'',
    termsAndConditions:false
}
const onSubmit=(values,props)=>{
  console.log(values)
}
  return (
    <>
    <div className="sign">
      <Grid align="center">
        <Paper
          elevation={10}
          sx={{
            height: "80vh",
            width: "50vh",
            margin: "50px auto",
            padding: " 30px 20px",
          }}
        >
          <Grid>
            <Avatar sx={{ bgcolor: "blue" }}>
              {" "}
              <AddCircleOutlineIcon />
            </Avatar>
            <h1>Sign Up</h1>
            <Typography variant="caption" sx={{ fontSize: "15px" }}>
              Please fill this form to create an account
            </Typography>
          </Grid>
<Formik initialValues={initialValues} onSubmit={onSubmit} >
  {(props)=>(
    <Form>
                
            <Field as= {TextField}
              sx={{ marginTop: "10px" }}
              name='userName'
              label="UserName"
              required
              type="text"
              placeholder="Enter your Name"
              variant="standard"
              fullWidth
            />
            <Field as= {TextField}
              sx={{ marginTop: "10px" }}
              name='email'
              label="Email"
              required
              type="email"
              placeholder="Enter your Email"
              variant="standard"
              fullWidth
            />
            {/* <FormControl>
      <FormLabel >Gender</FormLabel>
      <RadioGroup
       
       
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
       
      </RadioGroup>
    </FormControl> */}

            < Field as= {TextField}
              sx={{ marginTop: "10px" }}
              name='phoneNumber'
              label="Phone Number"
              required
              type="number"
              placeholder="Enter your Mobile Number"
              variant="standard"
              fullWidth
            />

            <Field as= {TextField}
              sx={{ marginTop: "10px" }}
              name='password'
              label="Password"
              required
              type="password"
              placeholder="Enter your password"
              variant="standard"
              fullWidth
            />
            <Field as= {TextField}
              sx={{ marginTop: "10px" }}
              name='confirmPassword'
              label="Confirm Password"
              required
              type="password"
              placeholder="Confirm Password"
              variant="standard"
              fullWidth
            />
            <FormControlLabel
              sx={{ marginTop: "10px" }}
              fullWidth
              control={< Field as={Checkbox} name="termsAndConditions" />}
              label="I accept the terms and conditions"
            />

            <Button sx={{ marginTop: "10px" }} variant="contained" fullWidth>
              Sign Up
            </Button>
          
    </Form>
  )}
</Formik>
        </Paper>
      </Grid>
      </div>
    </>
  );
};

export default Signup;
