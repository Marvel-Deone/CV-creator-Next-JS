import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as React from 'react';
import * as Yup from 'yup';

const EducationForm = ({ handleNext }) => {
    const initialValues = {
        uniName: '',
        country: '',
        state: '',
        city: '',
        gradMonth: '',
        gradYear: ''
    }
    const onSubmit = (values, { resetForm }) => {
        console.log(values);
        localStorage.setItem('CVEducationInfo', JSON.stringify(values));
        resetForm();
        handleNext();
    }
    // const validationSchema = Yup.object({
    //     uniName: Yup.string().min(2).max(26).required('Field is Required'),
    //     country: Yup.string().min(2).max(26).required('Field is Required'),
    //     state: Yup.string().min(2).max(26).required('Field is Required'),
    //     city: Yup.string().min(2).max(26).required('Field is Required'),
    //     gradMonth: Yup.string().min(2).max(26).required('Field is Required'),
    //     gradYear: Yup.string().min(2).max(26).required('Field is Required'),
    // })
    const { values, handleSubmit, handleChange, errors, touched } = useFormik({
        initialValues,
        onSubmit,
        // validationSchema
    })
    return (
        <div className='flex flex-col gap-8'>
            <div className='w-full'>
                <h2 className='text-[35px] leading-tight text-[#4A4A4A] font-semibold w-3/4 mx-auto'>What’s your college or university?</h2>
            </div>
            <div className='w-full md:mx-32'>
                <form onSubmit={handleSubmit} className='w-3/4 flex flex-col gap-6'>
                    <TextField id="outlined-basic" label="College Or University Name" variant="outlined" className='bg-white w-full' name='uniName' onChange={handleChange} value={values.uniName} />
                    {touched.uniName && errors.uniName && <small className='text-red-500 font-semibold'>{errors.uniName}</small>}
                    <div className='w-full flex flex-col md:flex-row gap-6'>
                        <TextField id="outlined-basic" label="Country" variant="outlined" className='bg-white w-full' name='country' onChange={handleChange} value={values.country} />
                        {touched.country && errors.country && <small className='text-red-500 font-semibold'>{errors.country}</small>}
                        <TextField id="outlined-basic" label="State/Provice" variant="outlined" className='bg-white w-full' name='state' onChange={handleChange} value={values.state} />
                        {touched.state && errors.state && <small className='text-red-500 font-semibold'>{errors.state}</small>}
                        <TextField id="outlined-basic" label="City" variant="outlined" className='bg-white w-full' name='city' onChange={handleChange} value={values.city} />
                        {touched.city && errors.city && <small className='text-red-500 font-semibold'>{errors.city}</small>}
                    </div>
                    <div className='w-full flex flex-col md:flex-row gap-6'>
                        <TextField id="outlined-basic" label="Expected Graduation Month" variant="outlined" className='bg-white w-full' name='gradMonth' onChange={handleChange} value={values.gradMonth} />
                        {touched.gradMonth && errors.gradMonth && <small className='text-red-500 font-semibold'>{errors.gradMonth}</small>}
                        <TextField id="outlined-basic" label="Expected Graduation Year" variant="outlined" className='bg-white w-full' name='gradYear' onChange={handleChange} value={values.gradYear} />
                    </div>
                    <div className='flex justify-end mr-20 translate-y-14'>
                        <button type='submit' name="submit" className='w-48 bg-blue-400 transition-all ease-in-out duration-300 hover:bg-blue-500 hover:text-white text-white rounded-xl px-8 py-3'>Continue</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EducationForm