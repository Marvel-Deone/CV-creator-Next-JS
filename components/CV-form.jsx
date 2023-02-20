import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import Image from 'next/image';
import * as React from 'react';
import * as Yup from 'yup';
const CVForm = ({ handleNext }) => {
    const initialValues = {
        firstname: '',
        lastname: '',
        email: '',
        jobTitle: '',
        phoneNumber: '',
        country: '',
        city: '',
        state: '',
        zipCode: ''
    }
    const onSubmit = (values, { resetForm }) => {
        let cvInfo = JSON.parse(localStorage.getItem(('userCVInfo')));
        cvInfo.contactInfo = values;
        localStorage.setItem('userCVInfo', JSON.stringify(cvInfo));
        // resetForm();
        handleNext();
    }

    const validationSchema = Yup.object({
        firstname: Yup.string().min(2).max(26).required('Field is Required'),
        lastname: Yup.string().min(2).max(26).required('Field is Required'),
        email: Yup.string().email('Invalid Email Format').required('Field is Required'),
        jobTitle: Yup.string().min(2).max(26).required('Field is Required'),
        phoneNumber: Yup.string().min(2).max(26).required('Field is Required'),
        country: Yup.string().min(2).max(26).required('Field is Required'),
        city: Yup.string().min(2).max(26).required('Field is Required'),
        state: Yup.string().min(2).max(26).required('Field is Required'),
    })
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })
    return (
        <div className='flex flex-col gap-8'>
            <div className='w-full flex flex-col gap-3'>
                <h2 className='text-[35px] leading-tight text-[#4A4A4A] font-semibold w-3/4'>Contact Section</h2>
                <small className='text-[#9898A5] text-sm'>This information will be placed at the top of your CV.</small>
            </div>
            <div className='flex flex-col md:flex-row gap-10'>
                <div className='w-7/12'>
                    <form onSubmit={formik.handleSubmit} className='w-3/4 flex flex-col gap-6'>
                        <div className='w-full flex flex-col md:flex-row gap-6'>
                            <div>
                                <TextField id="outlined-basic" label="First Name" variant="outlined" className='bg-white w-full' name='firstname' onChange={formik.handleChange} value={formik.values.firstname} />
                                {formik.touched.firstname && formik.errors.firstname && <small className='text-red-500 font-semibold'>{formik.errors.firstname}</small>}
                            </div>
                            <div>
                                <TextField id="outlined-basic" label="Last Name" variant="outlined" className='bg-white w-full' name='lastname' onChange={formik.handleChange} value={formik.values.lastname} />
                                {formik.touched.lastname && formik.errors.lastname && <small className='text-red-500 font-semibold'>{formik.errors.lastname}</small>}
                            </div>
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="Job Title" variant="outlined" className='bg-white w-full' name='jobTitle' onChange={formik.handleChange} value={formik.values.jobTitle} />
                            {formik.touched.jobTitle && formik.errors.jobTitle && <small className='text-red-500 font-semibold'>{formik.errors.jobTitle}</small>}
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="Phone-no" variant="outlined" className='bg-white w-full' name='phoneNumber' onChange={formik.handleChange} value={formik.values.phoneNumber} />
                            {formik.touched.phoneNumber && formik.errors.phoneNumber && <small className='text-red-500 font-semibold'>{formik.errors.phoneNumber}</small>}
                        </div>
                        <div className='w-full flex flex-col md:flex-row gap-6'>
                            <div>
                                <TextField id="outlined-basic" label="Country" variant="outlined" className='bg-white w-full' name='country' onChange={formik.handleChange} value={formik.values.country} />
                                {formik.touched.country && formik.errors.country && <small className='text-red-500 font-semibold'>{formik.errors.country}</small>}
                            </div>
                            <div>
                                <div>
                                    <TextField id="outlined-basic" label="City" variant="outlined" className='bg-white w-full' name='city' onChange={formik.handleChange} value={formik.values.city} />
                                    {formik.touched.city && formik.errors.city && <small className='text-red-500 font-semibold'>{formik.errors.city}</small>}
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex flex-col md:flex-row gap-6'>
                            <div>
                                <TextField id="outlined-basic" label="State" variant="outlined" className='bg-white w-full' name='state' onChange={formik.handleChange} value={formik.values.state} />
                                {formik.touched.state && formik.errors.state && <small className='text-red-500 font-semibold'>{formik.errors.state}</small>}
                            </div>
                            <div>
                                <TextField id="outlined-basic" label="Zip Code" variant="outlined" className='bg-white w-full' name='zipCode' onChange={formik.handleChange} value={formik.values.zipCode} />
                                {formik.touched.zipCode && formik.errors.zipCode && <small className='text-red-500 font-semibold'>{formik.errors.zipCode}</small>}
                            </div>
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="Email" variant="outlined" className='bg-white w-full' name='email' onChange={formik.handleChange} value={formik.values.email} />
                            {formik.touched.email && formik.errors.email && <small className='text-red-500 font-semibold'>{formik.errors.email}</small>}
                        </div>
                        <div className='flex justify-end mr-20 translate-y-14'>
                            <button type='submit' className='w-48 bg-blue-400 transition-all ease-in-out duration-300 hover:bg-blue-500 hover:text-white text-white rounded-xl px-8 py-3'>Continue
                            </button>
                        </div>
                    </form>
                </div>
                <div className='flex w-5/12'>
                    <div className='flex'>
                        <div className='bg-[#496267] text-white px-4 w-40 py-6 h-8/12'>
                            <div className='border-2 shadow-lg w-28 flex items-center border-gray-400'>
                                <Image src={'/avatar.png'} width={100} height={150} alt='Questionaire-image' />
                            </div>
                            <hr className='mt-3 border border-gray-400 rounded-md w-28' />
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-[12px]'>CONTACT</h2>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex flex-col gap-3'>
                                        <div className='flex gap-6'>
                                            <div className='relative'>
                                                <svg width="18px" height="18px" viewBox="0 0 18 18" fill="none" className='absolute'>
                                                    <circle cx="9" cy="9" r="9" fill="white" fillOpacity="0.7"></circle>
                                                    <path d="M5.37293 6.26408L6.4069 5.23107C6.47983 5.15781 6.56652 5.09968 6.66199 5.06003C6.75746 5.02038 6.85982 4.99998 6.9632 5C7.17387 5 7.37193 5.08252 7.52047 5.23107L8.63307 6.34369C8.70633 6.41663 8.76446 6.50332 8.80411 6.59879C8.84376 6.69426 8.86416 6.79662 8.86414 6.9C8.86414 7.11068 8.78162 7.30874 8.63307 7.45728L7.8195 8.27087C8.00994 8.69064 8.27471 9.07251 8.60104 9.39806C8.92655 9.72518 9.30838 9.99092 9.7282 10.1825L10.5418 9.36893C10.6147 9.29567 10.7014 9.23755 10.7969 9.19789C10.8923 9.15824 10.9947 9.13784 11.0981 9.13786C11.3088 9.13786 11.5068 9.22039 11.6554 9.36893L12.7689 10.4806C12.8423 10.5537 12.9005 10.6405 12.9401 10.7362C12.9798 10.8318 13.0001 10.9343 13 11.0379C13 11.2485 12.9175 11.4466 12.7689 11.5951L11.7369 12.6272C11.5 12.865 11.1728 13 10.8369 13C10.7661 13 10.6981 12.9942 10.6311 12.9825C9.32238 12.767 8.02435 12.0709 6.97679 11.0243C5.9302 9.97864 5.23507 8.68155 5.01662 7.36893C4.95061 6.96796 5.08361 6.55534 5.37293 6.26408Z"></path>
                                                </svg>
                                            </div>
                                            <span className='text-[11px]'>Ogbomoso,Oyo State 210222</span>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        <div className='flex gap-6'>
                                            <div className='relative'>
                                                <svg width="18px" height="18px" viewBox="0 0 18 18" fill="none" className='absolute'>
                                                    <circle cx="9" cy="9" r="9" fill="white" fillOpacity="0.7"></circle>
                                                    <path d="M5.37293 6.26408L6.4069 5.23107C6.47983 5.15781 6.56652 5.09968 6.66199 5.06003C6.75746 5.02038 6.85982 4.99998 6.9632 5C7.17387 5 7.37193 5.08252 7.52047 5.23107L8.63307 6.34369C8.70633 6.41663 8.76446 6.50332 8.80411 6.59879C8.84376 6.69426 8.86416 6.79662 8.86414 6.9C8.86414 7.11068 8.78162 7.30874 8.63307 7.45728L7.8195 8.27087C8.00994 8.69064 8.27471 9.07251 8.60104 9.39806C8.92655 9.72518 9.30838 9.99092 9.7282 10.1825L10.5418 9.36893C10.6147 9.29567 10.7014 9.23755 10.7969 9.19789C10.8923 9.15824 10.9947 9.13784 11.0981 9.13786C11.3088 9.13786 11.5068 9.22039 11.6554 9.36893L12.7689 10.4806C12.8423 10.5537 12.9005 10.6405 12.9401 10.7362C12.9798 10.8318 13.0001 10.9343 13 11.0379C13 11.2485 12.9175 11.4466 12.7689 11.5951L11.7369 12.6272C11.5 12.865 11.1728 13 10.8369 13C10.7661 13 10.6981 12.9942 10.6311 12.9825C9.32238 12.767 8.02435 12.0709 6.97679 11.0243C5.9302 9.97864 5.23507 8.68155 5.01662 7.36893C4.95061 6.96796 5.08361 6.55534 5.37293 6.26408Z"></path>
                                                </svg>
                                            </div>
                                            <span className='text-[11px]'>08066573156</span>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        <div className='flex gap-6'>
                                            <div className='relative'>
                                                <svg width="18px" height="18px" viewBox="0 0 18 18" fill="none" className='absolute'>
                                                    <circle cx="9" cy="9" r="9" fill="white" fillOpacity="0.7"></circle>
                                                    <path d="M5.37293 6.26408L6.4069 5.23107C6.47983 5.15781 6.56652 5.09968 6.66199 5.06003C6.75746 5.02038 6.85982 4.99998 6.9632 5C7.17387 5 7.37193 5.08252 7.52047 5.23107L8.63307 6.34369C8.70633 6.41663 8.76446 6.50332 8.80411 6.59879C8.84376 6.69426 8.86416 6.79662 8.86414 6.9C8.86414 7.11068 8.78162 7.30874 8.63307 7.45728L7.8195 8.27087C8.00994 8.69064 8.27471 9.07251 8.60104 9.39806C8.92655 9.72518 9.30838 9.99092 9.7282 10.1825L10.5418 9.36893C10.6147 9.29567 10.7014 9.23755 10.7969 9.19789C10.8923 9.15824 10.9947 9.13784 11.0981 9.13786C11.3088 9.13786 11.5068 9.22039 11.6554 9.36893L12.7689 10.4806C12.8423 10.5537 12.9005 10.6405 12.9401 10.7362C12.9798 10.8318 13.0001 10.9343 13 11.0379C13 11.2485 12.9175 11.4466 12.7689 11.5951L11.7369 12.6272C11.5 12.865 11.1728 13 10.8369 13C10.7661 13 10.6981 12.9942 10.6311 12.9825C9.32238 12.767 8.02435 12.0709 6.97679 11.0243C5.9302 9.97864 5.23507 8.68155 5.01662 7.36893C4.95061 6.96796 5.08361 6.55534 5.37293 6.26408Z"></path>
                                                </svg>
                                            </div>
                                            <span className='text-[11px]'>folagbade@gmail.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className='mt-4 border border-gray-400 rounded-md' />
                            <div className=''>
                                <h2 className='text-xs'>SKILLS</h2>
                                <ul className='text-[11px] list-disc px-4'>
                                    <li>Strong verbal communication</li>
                                    <li>Attention to detail</li>
                                    <li>Community activities</li>
                                    <li>Medication administration</li>
                                    <li>Care plan management</li>
                                </ul>
                            </div>
                        </div>
                        <div className='bg-white w-80 px-3 py-6 text-[#496267]'>
                            <div className='flex flex-col gap-4'>
                                <div className='flex flex-col gap-2'>
                                    <h2 className='text-2xl text-[#496267]'>Folagbade Olowofela</h2>
                                    <div className='flex gap-2 items-center'>
                                        <p className='text-[#496267] text-[11px] font-semibold text-center'>WEB DEVELOPER</p>
                                        <hr className='border bg-[#496267] w-44 h-3' />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h2 className='underline text-sm font-semibold'>CAREER OBJECTIVE</h2>
                                    <p className='text-[10px]'>Motivated Care Assistant with 10 years of experience in the Care industry. Offering expertise in person-centred care, implementation and monitoring of individual care plans and management of resident assessments and files. Energetic self-starter and team builder able to navigate high-stress situations. Well-versed in monitoring clients with developmental disabilities and adhering to patient care plans.</p>
                                </div>
                                <hr />
                                <div className='flex flex-col gap-1'>
                                    <h2 className='underline text-sm font-semibold'>WORK HISTORY</h2>
                                    <div className='flex justify-between text-[11px]'>
                                        <p className='font-semibold'>Web Developer </p>
                                        <p>07/2022 - Current</p>
                                    </div>
                                    <div className='text-gray-400 text-[11px]'>
                                        <p>Collaborated in a team-focused enviroment providing software solutions to divrse industry Clients</p>
                                        <ul className='list-disc px-4'>
                                            <li>Collaborated in a team-focused enviroment providing software solutions to divrse industry Clients</li>
                                            <li>Collaborated in a team-focused enviroment providing software solutions to divrse industry Clients</li>
                                            <li>Collaborated in a team-focused enviroment providing software solutions to divrse industry Clients</li>
                                        </ul>
                                        <p className='flex justify-end'>......</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Image src={'/tip&advice.png'} width={500} height={500} alt='Questionaire-image' /> */}
                </div>
            </div>
        </div>
    )
}

export default CVForm