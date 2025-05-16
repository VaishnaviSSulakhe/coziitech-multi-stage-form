import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { healthSchema } from '../validation/schema';
import { useNavigate } from 'react-router-dom';
 
export default function HealthSafetyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(healthSchema)
  });
 
  const navigate = useNavigate();
 
  const onSubmit = (data) => {
    console.log("HEALTH FORM SUBMITTED:", data); // Debug
    localStorage.setItem("healthSafety", JSON.stringify(data));
    navigate('/success');
  };
 
  return (
<form onSubmit={handleSubmit(onSubmit)}>
<h2>Health & Safety</h2>
 
      <label>
<input type="checkbox" {...register("healthDeclaration")} />
        I confirm I am in good health
</label>
<p>{errors.healthDeclaration?.message}</p>
 
      <label>Emergency Contact</label>
<input {...register("emergencyContact")} placeholder="Emergency Contact" />
<p>{errors.emergencyContact?.message}</p>
 
      <label>Medical Conditions (optional)</label>
<input {...register("medicalConditions")} placeholder="Any medical conditions?" />
 
      <button type="submit">Submit</button>
</form>
  );
}