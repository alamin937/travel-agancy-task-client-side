import React from 'react';
import ReactDatePicker from "react-datepicker";
import { useForm, Controller } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import NavArea from '../Home/NavArea/NavArea';


const AddExperience = () => {

    const { register, handleSubmit, control,reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/experience', {
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                alert("Add Experience Successfully");
                reset();
            }
        })
    };
    return (
       <div>
           <NavArea></NavArea>
           <h1 style={{textAlign:'center', marginTop:'20px'}}>Add Your Own Experience</h1>
            <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
           
           <div>
           <form onSubmit={handleSubmit(onSubmit)}>
                <label style={{fontWeight:'700', marginBottom:'10px'}}>Location Name</label> <br />
                <input style={{width:'250px',padding:'5px',border:'1px solid grey', borderRadius:'10px'}} {...register("location")} /> <br />
                <label style={{fontWeight:'700', marginBottom:'10px'}}>Description</label> <br />
                <textarea style={{width:'250px',padding:'5px',border:'1px solid grey', borderRadius:'10px', height:'100px'}}  {...register("placeDescription")} /> <br />
                <label style={{fontWeight:'700', marginBottom:'10px'}}>Date</label> <br />
                <Controller 
                    control={control}
                    name="date"
                    style={{width:'250px',padding:'5px',border:'1px solid grey', borderRadius:'10px'}}
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <ReactDatePicker 
                            
                            onChange={onChange}
                            onBlur={onBlur}
                            selected={value}
                        />

                    )}
                /> <br />
                <label style={{fontWeight:'700', marginBottom:'10px'}}>Expense</label> <br />
                <input style={{width:'250px',padding:'5px',border:'1px solid grey', borderRadius:'10px'}} {...register("expence")} /> <br />
                <label style={{fontWeight:'700', marginBottom:'10px'}}>Rating</label> <br />
                <input placeholder='0-5' style={{width:'250px',padding:'5px',border:'1px solid grey', borderRadius:'10px'}} {...register("rating")} /> <br />
                <input style={{width:'250px',padding:'5px',border:'1px solid grey', borderRadius:'10px', marginTop:'10px'}} type="submit" />
            </form>
           </div>
        </div>
       </div>
    );
};

export default AddExperience;