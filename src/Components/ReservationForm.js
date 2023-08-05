import { useForm } from "react-hook-form";
import {DevTool} from '@hookform/devtools';




export default function Reservation(){

const form = useForm(); 
const {register, control, handleSubmit} = form;

const onSubmit = () => {
  console.log('Form Submitted')
}


  return (
    <>
      <div id="form-container" >
        <form className="form-card" onSubmit={handleSubmit(onSubmit)} noValidate>
          <label htmlFor="reservation-name">Name</label>
          <input type="text" id="reservation-name" {...register("reservation-name", {required: {value: true, message: "name is required."}})} />



          <label htmlFor="reservation-email">Email</label>
          <input type="text" id="reservation-email" {...register("reservation-email", {required: "email is required.."})} />



          <label htmlFor="reservation-comments">Comments</label>
          <input type="text" id="reservation-comments" {...register("reservation-comments", {required: "Comments are required.."})} />


          <button type="submit">Submit</button>
        </form>
        <DevTool control={control} />
      </div>
    
    </>
  );
} 