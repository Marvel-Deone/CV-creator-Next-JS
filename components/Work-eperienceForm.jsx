import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as React from 'react';
import * as Yup from 'yup';

const ExperienceForm = ({ handleNext }) => {
    const initialValues = {
        jobTitle: '',
        companyName: '',
        country: '',
        state: '',
        city: '',
        startMonth: '',
        startYear: '',
        endMonth: '',
        endYear: ''
    }
    // const validationSchema = Yup.object({
    //     jobTitle: Yup.string().min(2).max(26).required('Field is Required'),
    //     companyName: Yup.string().min(2).max(26).required('Field is Required'),
    //     country: Yup.string().min(2).max(26).required('Field is Required'),
    //     state: Yup.string().min(2).max(26).required('Field is Required'),
    //     city: Yup.string().min(2).max(26).required('Field is Required'),
    //     startMonth: Yup.string().min(2).max(26).required('Field is Required'),
    //     startYear: Yup.string().min(2).max(26).required('Field is Required'),
    //     endMonth: Yup.string().min(2).max(26).required('Field is Required'),
    //     endYear: Yup.string().min(2).max(26).required('Field is Required'),
    // })
    const formik = useFormik({
        initialValues,
        // validationSchema,
        onSubmit(values, { resetForm }) {
            console.log(values);
            localStorage.setItem('CVExperienceInfo', JSON.stringify(values));
            resetForm();
            handleNext();
        },
    })
    return (
        <div className='flex flex-col gap-8'>
            <div className='w-full'>
                <h2 className='text-[35px] leading-tight text-[#4A4A4A] font-semibold w-3/4 mx-auto'>What's your most recent work experience?</h2>
            </div>
            <div className='w-full md:mx-32'>
                <form onSubmit={formik.handleSubmit} className='w-3/4 flex flex-col gap-6'>
                    <TextField id="outlined-basic" label="Job Title" variant="outlined" className='bg-white w-full' name='jobTitle' onChange={formik.handleChange} value={formik.values.jobTitle} />
                    {formik.touched.jobTitle && formik.errors.jobTitle && <small className='text-red-500 font-semibold'>{formik.errors.jobTitle}</small>}
                    <TextField id="outlined-basic" label="Company/Organizations Name" variant="outlined" className='bg-white w-full' name='companyName' onChange={formik.handleChange} value={formik.values.companyName} />
                    {formik.touched.companyName && formik.errors.companyName && <small className='text-red-500 font-semibold'>{formik.errors.companyName}</small>}
                    <div className='w-full flex flex-col md:flex-row gap-6'>
                        <TextField id="outlined-basic" label="Country" variant="outlined" className='bg-white w-full' name='country' onChange={formik.handleChange} value={formik.values.country} />
                        {formik.touched.country && formik.errors.country && <small className='text-red-500 font-semibold'>{formik.errors.country}</small>}
                        <TextField id="outlined-basic" label="State" variant="outlined" className='bg-white w-full' name='state' onChange={formik.handleChange} value={formik.values.state} />
                        {formik.touched.state && formik.errors.state && <small className='text-red-500 font-semibold'>{formik.errors.state}</small>}
                        <TextField id="outlined-basic" label="City" variant="outlined" className='bg-white w-full' name='city' onChange={formik.handleChange} value={formik.values.city} />
                        {formik.touched.city && formik.errors.city && <small className='text-red-500 font-semibold'>{formik.errors.city}</small>}
                    </div>
                    <div className='w-full flex flex-col md:flex-row gap-6'>
                        <TextField id="outlined-basic" label="Start Month" variant="outlined" className='bg-white w-full' name='startMonth' onChange={formik.handleChange} value={formik.values.startMonth} />
                        {formik.touched.startMonth && formik.errors.startMonth && <small className='text-red-500 font-semibold'>{formik.errors.startMonth}</small>}
                        <TextField id="outlined-basic" label="Start Year" variant="outlined" className='bg-white w-full' name='startYear' onChange={formik.handleChange} value={formik.values.startYear} />
                        {formik.touched.startYear && formik.errors.startYear && <small className='text-red-500 font-semibold'>{formik.errors.startYear}</small>}
                    </div>
                    <div className='w-full flex flex-col md:flex-row gap-6'>
                        <TextField id="outlined-basic" label="End Month" variant="outlined" className='bg-white w-full' name='endMonth' onChange={formik.handleChange} value={formik.values.endMonth} />
                        {formik.touched.endMonth && formik.errors.endMonth && <small className='text-red-500 font-semibold'>{formik.errors.endMonth}</small>}
                        <TextField id="outlined-basic" label="End Year" variant="outlined" className='bg-white w-full' name='endYear' onChange={formik.handleChange} value={formik.values.endYear} />
                        {formik.touched.endYear && formik.errors.endYear && <small className='text-red-500 font-semibold'>{formik.errors.endYear}</small>}
                    </div>
                    <div className='flex justify-end mr-20 translate-y-14'>
                        <button type='submit' name="submit" className='w-48 bg-blue-400 transition-all ease-in-out duration-300 hover:bg-blue-500 hover:text-white text-white rounded-xl px-8 py-3'>Continue</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ExperienceForm