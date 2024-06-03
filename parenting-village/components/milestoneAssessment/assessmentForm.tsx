"use client";

import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

interface FormData {
    Age_Mons: string;
    Gender: string;
    A1: string;
    A2: string;
    A3: string;
    A4: string;
    A5: string;
    A6: string;
    A7: string;
    A8: string;
    A9: string;
    Ethnicity: string;
    Jaundice: string;
    ASD_history: string;
}

const initialFormData: FormData = {
    Age_Mons: '',
    Gender: '',
    A1: '',
    A2: '',
    A3: '',
    A4: '',
    A5: '',
    A6: '',
    A7: '',
    A8: '',
    A9: '',
    Ethnicity: '',
    Jaundice: '',
    ASD_history: ''
};

const ChildRiskAssessmentForm = () => {
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [error, setError] = useState<string>('');
    const [result, setResult] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Check for empty fields
        for (const key in formData) {
            if (formData[key as keyof FormData] === '') {
                setError('All fields must be filled or selected.');
                return;
            }
        }

        const ageMonths = parseInt(formData.Age_Mons);
        if (isNaN(ageMonths) || ageMonths < 1 || ageMonths > 48) {
            setError('Age must be between 1 and 48 months.');
            return;
        }

        setError('');
        try {
            console.log('Sending data to backend:', formData); // Log the formData being sent
            const response = await axios.post('http://127.0.0.1:8000/api/predict/', formData);
            console.log('Response from backend:', response.data); // Log the response from the backend
            const prediction = response.data.prediction;
            setResult(prediction === 1 ? 'Risk' : 'No Risk');
        } catch (error) {
            console.error('An error occurred:', error); // Log any errors
            setError('An error occurred while submitting the form.');
        }
    };

    return (
        <div className="flex items-center justify-center mb-20 mt-24">
            <div className="relative w-full max-w-4xl">
                <div className="absolute inset-0 bg-sky-950 transform -skew-y-6 rounded-3xl w-full h-full"></div>
                <div className="relative bg-white m-14 p-6 rounded shadow-md text-sky-950">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && <div className="text-red-500 mb-4">{error}</div>}
                        {result && <div className={`mb-4 ${result === 'Risk' ? 'text-red-500' : 'text-green-500'}`}>{result}</div>}
                        <div className="mb-4">
                            <label className="block mb-2 text-gray-700 font-semibold">Age of Child (months): </label>
                            <input
                                type="number"
                                name="Age_Mons"
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
                                value={formData.Age_Mons}
                                onChange={handleChange}
                                min="1"
                                max="48"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-gray-700 font-semibold">Gender: </label>
                            <select
                                name="Gender"
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
                                value={formData.Gender}
                                onChange={handleChange}
                            >
                                <option value="">Select</option>
                                <option value="0">Female</option>
                                <option value="1">Male</option>
                            </select>
                        </div>
                        {[
                            { label: 'Does your child look at you when you call his/her name?', name: 'A1' },
                            { label: 'How easy is it for you to get eye contact with your child?', name: 'A2' },
                            { label: 'Does your child point to indicate that s/he wants something?', name: 'A3' },
                            { label: 'Does your child point to share interest with you?', name: 'A4' },
                            { label: 'Does your child pretend?', name: 'A5' },
                            { label: 'Does your child follow where you’re looking?', name: 'A6' },
                            { label: 'If you or someone else in the family is visibly upset, does your child show signs of wanting to comfort them?', name: 'A7' },
                            { label: 'Does your child use simple gestures?', name: 'A8' },
                            { label: 'Does your child stare at nothing with no apparent purpose?', name: 'A9', yesValue: '1', noValue: '0' },
                        ].map((question, index) => (
                            <div className="mb-4" key={index}>
                                <label className="block mb-2 text-gray-700 font-semibold">{question.label}</label>
                                <div className="flex items-center space-x-4">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name={question.name}
                                            className="form-radio text-sky-950 mr-2"
                                            value={question.yesValue ?? '0'}
                                            checked={formData[question.name as keyof FormData] === (question.yesValue ?? '0')}
                                            onChange={handleChange}
                                        />
                                        Yes
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name={question.name}
                                            className="form-radio text-sky-950 mr-2"
                                            value={question.noValue ?? '1'}
                                            checked={formData[question.name as keyof FormData] === (question.noValue ?? '1')}
                                            onChange={handleChange}
                                        />
                                        No
                                    </label>
                                </div>
                            </div>
                        ))}
                        <div className="mb-4">
                            <label className="block mb-2 text-gray-700 font-semibold">Ethnicity: </label>
                            <select
                                name="Ethnicity"
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
                                value={formData.Ethnicity}
                                onChange={handleChange}
                            >
                                <option value="">Select</option>
                                <option value="0">Hispanic</option>
                                <option value="1">Latino</option>
                                <option value="6">Asian</option>
                                <option value="4">Pacifica</option>
                                <option value="7">Black</option>
                                <option value="5">White European</option>
                                <option value="8">Middle Eastern</option>
                                <option value="3">Others</option>
                                <option value="10">South Asian</option>
                                <option value="9">Mixed</option>
                                <option value="2">Native Indian</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-gray-700 font-semibold">Born with Jaundice:</label>
                            <div className="flex items-center space-x-4">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="Jaundice"
                                        className="form-radio text-sky-950 mr-2"
                                        value="1"
                                        checked={formData.Jaundice === '1'}
                                        onChange={handleChange}
                                    />
                                    Yes
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="Jaundice"
                                        className="form-radio text-sky-950 mr-2"
                                        value="0"
                                        checked={formData.Jaundice === '0'}
                                        onChange={handleChange}
                                    />
                                    No
                                </label>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-gray-700 font-semibold">Family member with ASD history:</label>
                            <div className="flex items-center space-x-4">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="ASD_history"
                                        className="form-radio text-sky-950 mr-2"
                                        value="1"
                                        checked={formData.ASD_history === '1'}
                                        onChange={handleChange}
                                    />
                                    Yes
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="ASD_history"
                                        className="form-radio text-sky-950 mr-2"
                                        value="0"
                                        checked={formData.ASD_history === '0'}
                                        onChange={handleChange}
                                    />
                                    No
                                </label>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-sky-950 text-white py-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
                        >
                            Check for Risk
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ChildRiskAssessmentForm;
