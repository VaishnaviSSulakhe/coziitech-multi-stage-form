import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { motion } from 'framer-motion';
import './App.css';

const stages = ['Personal Information', 'Travel Preferences', 'Health and Safety'];

const MultiStageForm = () => {
    const [stage, setStage] = useState(0);
    const [formData, setFormData] = useState({
        fullName: '',
        dob: '',
        nationality: '',
        email: '',
        phone: '',
        departureDate: '',
        returnDate: '',
        accommodation: '',
        specialRequests: '',
        healthDeclaration: '',
        emergencyContact: '',
        medicalConditions: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validate = () => {
        const errors = {};

        if (!formData.fullName) errors.fullName = 'Full Name is required';
        if (!formData.dob) errors.dob = 'Date of Birth is required';
        if (!formData.nationality) errors.nationality = 'Nationality is required';
        if (!formData.email) errors.email = 'Valid email is required';
        if (!formData.phone) errors.phone = 'Phone number is required';
        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Invalid email format';
        if (formData.phone && !/^\d{10}$/.test(formData.phone)) errors.phone = 'Phone number should be 10 digits';

        if (stage === 1) {
            if (!formData.departureDate) errors.departureDate = 'Departure Date is required';
            if (!formData.returnDate) errors.returnDate = 'Return Date is required';
            if (!formData.accommodation) errors.accommodation = 'Accommodation is required';
        }

        if (stage === 2) {
            if (!formData.healthDeclaration) errors.healthDeclaration = 'Health Declaration is required';
            if (!formData.emergencyContact) errors.emergencyContact = 'Emergency Contact is required';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const nextStage = () => {
        if (validate()) {
            if (stage < stages.length - 1) {
                setStage(stage + 1);
            }
        }
    };

    const prevStage = () => {
        if (stage > 0) {
            setStage(stage - 1);
        }
    };

    const handleSubmit = () => {
        if (validate()) {
            console.log(formData);
            alert('Form submitted successfully!');
        }
    };

    const renderStage = () => {
        switch (stage) {
            case 0:
                return (
                    <div>
                        <Input name='fullName' placeholder='Full Name' onChange={handleChange} />
                        {errors.fullName && <p className='error'>{errors.fullName}</p>}
                        <Input name='dob' placeholder='Date of Birth' onChange={handleChange} />
                        {errors.dob && <p className='error'>{errors.dob}</p>}
                        <Input name='nationality' placeholder='Nationality' onChange={handleChange} />
                        {errors.nationality && <p className='error'>{errors.nationality}</p>}
                        <Input name='email' placeholder='Email' onChange={handleChange} />
                        {errors.email && <p className='error'>{errors.email}</p>}
                        <Input name='phone' placeholder='Phone' onChange={handleChange} />
                        {errors.phone && <p className='error'>{errors.phone}</p>}
                    </div>
                );
            case 1:
                return (
                    <div>
                        <Input name='departureDate' placeholder='Departure Date' onChange={handleChange} />
                        {errors.departureDate && <p className='error'>{errors.departureDate}</p>}
                        <Input name='returnDate' placeholder='Return Date' onChange={handleChange} />
                        {errors.returnDate && <p className='error'>{errors.returnDate}</p>}
                        <Select name='accommodation' onChange={handleChange}>
                            <option>Space Hotel</option>
                            <option>Martian Base</option>
                        </Select>
                        {errors.accommodation && <p className='error'>{errors.accommodation}</p>}
                        <Input name='specialRequests' placeholder='Special Requests or Preferences' onChange={handleChange} />
                    </div>
                );
            case 2:
                return (
                    <div>
                        <Select name='healthDeclaration' onChange={handleChange}>
                            <option value=''>Select Health Declaration</option>
                            <option value='Yes'>Yes</option>
                            <option value='No'>No</option>
                        </Select>
                        {errors.healthDeclaration && <p className='error'>{errors.healthDeclaration}</p>}
                        <Input name='emergencyContact' placeholder='Emergency Contact Information' onChange={handleChange} />
                        {errors.emergencyContact && <p className='error'>{errors.emergencyContact}</p>}
                        <Input name='medicalConditions' placeholder='Medical Conditions' onChange={handleChange} />
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <motion.div className='form-container' animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
            <Card>
                <CardContent>
                    <h2>{stages[stage]}</h2>
                    {renderStage()}
                    <div className='navigation-buttons'>
                        <Button onClick={prevStage} disabled={stage === 0}>Back</Button>
                        {stage < stages.length - 1 ? (
                            <Button onClick={nextStage}>Next</Button>
                        ) : (
                            <Button onClick={handleSubmit}>Submit</Button>
                        )}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default MultiStageForm;""