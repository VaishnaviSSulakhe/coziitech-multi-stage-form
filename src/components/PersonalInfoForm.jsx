import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { personalInfoSchema } from '../validation/schema';
import { useNavigate } from 'react-router-dom';
 
export default function PersonalInfoForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(personalInfoSchema)
  });
  const navigate = useNavigate();
 
  const onSubmit = (data) => {
    localStorage.setItem("personalInfo", JSON.stringify(data));
    navigate('/travel');
  };
 
  return (
<form onSubmit={handleSubmit(onSubmit)}>
<h2>Personal Information</h2>
<input {...register("fullName")} placeholder="Full Name" />
<p>{errors.fullName?.message}</p>
 
      <input type="date" {...register("dateOfBirth")} />
<p>{errors.dateOfBirth?.message}</p>
 
      <input {...register("nationality")} placeholder="Nationality" />
<p>{errors.nationality?.message}</p>
 
      <input {...register("email")} placeholder="Email" />
<p>{errors.email?.message}</p>
 
      <input {...register("phone")} placeholder="Phone" />
<p>{errors.phone?.message}</p>
 
      <button type="submit">Next</button>
</form>
  );
}