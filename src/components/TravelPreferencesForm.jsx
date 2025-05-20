import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import { travelSchema } from '../validation/schema';

import { useNavigate } from 'react-router-dom';
 
export default function TravelPreferencesForm() {

  const { register, handleSubmit, formState: { errors } } = useForm({

    resolver: yupResolver(travelSchema)

  });

  const navigate = useNavigate();
 
  const onSubmit = (data) => {
console.log("TRAVEL FORM SUBMITTED:", data); // Debug log
    localStorage.setItem("travelPreferences", JSON.stringify(data));

    navigate('/health');

  };
 
  return (
<form onSubmit={handleSubmit(onSubmit)}>
<h2>Travel Preferences</h2>
<input type="date" {...register("departureDate")} />
<p>{errors.departureDate?.message}</p>
 
      <input type="date" {...register("returnDate")} />
<p>{errors.returnDate?.message}</p>
 
      <select {...register("accommodation")}>
<option value="">Choose Accommodation</option>
<option value="Space Hotel">Space Hotel</option>
<option value="Martian Base">Martian Base</option>
</select>
<p>{errors.accommodation?.message}</p>
 
      <input {...register("specialRequests")} placeholder="Special Requests" />
 
      <button type="submit">Next</button>
</form>

  );

}
 