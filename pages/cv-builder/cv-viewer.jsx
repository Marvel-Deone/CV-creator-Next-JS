import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const CVViewer = () => {
    const [contactInfo, setContactInfo] = useState(null)
    useEffect(() => {
        if (localStorage.CVContactInfo) {
            setContactInfo(JSON.parse(localStorage.getItem('CVContactInfo')));
            console.log(contactInfo);
        }
        if (localStorage.CVExperienceInfo) {
            let experienceInfo = JSON.parse(localStorage.getItem('CVExperienceInfo'));
            console.log(experienceInfo);
        }
        if (localStorage.CVEducationInfo) {
            let educationInfo = JSON.parse(localStorage.getItem('CVEducationInfo'));
            console.log(educationInfo);
        }
        if (localStorage.SKills) {
            let skillsInfo = JSON.parse(localStorage.getItem('SKills'));
            console.log(skillsInfo);
        }
    });
    // const [city, setCity] = useState(cont)
    return (
        <>
            <div className='max-w-4xl print:max-w-full print:mx-0 mx-auto flex print:pt-20 pt-16 overflow-y-auto'>
                <div className='flex print:gap-5 print:mx-0 mx-auto'>
                    <div className='print:bg-blue-400 bg-[#496267] text-white px-4 w-40 py-6 h-auto'>
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
                                                <circle cx="9" cy="9" r="9" fill="white" fill-opacity="0.7"></circle>
                                                <path d="M5.37293 6.26408L6.4069 5.23107C6.47983 5.15781 6.56652 5.09968 6.66199 5.06003C6.75746 5.02038 6.85982 4.99998 6.9632 5C7.17387 5 7.37193 5.08252 7.52047 5.23107L8.63307 6.34369C8.70633 6.41663 8.76446 6.50332 8.80411 6.59879C8.84376 6.69426 8.86416 6.79662 8.86414 6.9C8.86414 7.11068 8.78162 7.30874 8.63307 7.45728L7.8195 8.27087C8.00994 8.69064 8.27471 9.07251 8.60104 9.39806C8.92655 9.72518 9.30838 9.99092 9.7282 10.1825L10.5418 9.36893C10.6147 9.29567 10.7014 9.23755 10.7969 9.19789C10.8923 9.15824 10.9947 9.13784 11.0981 9.13786C11.3088 9.13786 11.5068 9.22039 11.6554 9.36893L12.7689 10.4806C12.8423 10.5537 12.9005 10.6405 12.9401 10.7362C12.9798 10.8318 13.0001 10.9343 13 11.0379C13 11.2485 12.9175 11.4466 12.7689 11.5951L11.7369 12.6272C11.5 12.865 11.1728 13 10.8369 13C10.7661 13 10.6981 12.9942 10.6311 12.9825C9.32238 12.767 8.02435 12.0709 6.97679 11.0243C5.9302 9.97864 5.23507 8.68155 5.01662 7.36893C4.95061 6.96796 5.08361 6.55534 5.37293 6.26408Z"></path>
                                            </svg>
                                        </div>
                                        {contactInfo && (<span className='text-[11px]'>{contactInfo.city} {contactInfo.state} {contactInfo.zipCode}</span>)}
                                    </div>
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <div className='flex gap-6'>
                                        <div className='relative'>
                                            <svg width="18px" height="18px" viewBox="0 0 18 18" fill="none" className='absolute'>
                                                <circle cx="9" cy="9" r="9" fill="white" fill-opacity="0.7"></circle>
                                                <path d="M5.37293 6.26408L6.4069 5.23107C6.47983 5.15781 6.56652 5.09968 6.66199 5.06003C6.75746 5.02038 6.85982 4.99998 6.9632 5C7.17387 5 7.37193 5.08252 7.52047 5.23107L8.63307 6.34369C8.70633 6.41663 8.76446 6.50332 8.80411 6.59879C8.84376 6.69426 8.86416 6.79662 8.86414 6.9C8.86414 7.11068 8.78162 7.30874 8.63307 7.45728L7.8195 8.27087C8.00994 8.69064 8.27471 9.07251 8.60104 9.39806C8.92655 9.72518 9.30838 9.99092 9.7282 10.1825L10.5418 9.36893C10.6147 9.29567 10.7014 9.23755 10.7969 9.19789C10.8923 9.15824 10.9947 9.13784 11.0981 9.13786C11.3088 9.13786 11.5068 9.22039 11.6554 9.36893L12.7689 10.4806C12.8423 10.5537 12.9005 10.6405 12.9401 10.7362C12.9798 10.8318 13.0001 10.9343 13 11.0379C13 11.2485 12.9175 11.4466 12.7689 11.5951L11.7369 12.6272C11.5 12.865 11.1728 13 10.8369 13C10.7661 13 10.6981 12.9942 10.6311 12.9825C9.32238 12.767 8.02435 12.0709 6.97679 11.0243C5.9302 9.97864 5.23507 8.68155 5.01662 7.36893C4.95061 6.96796 5.08361 6.55534 5.37293 6.26408Z"></path>
                                            </svg>
                                        </div>
                                        {contactInfo && (<span className='text-[11px]'>{contactInfo.phoneNumber}</span>)}
                                    </div>
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <div className='flex gap-6'>
                                        <div className='relative'>
                                            <svg width="18px" height="18px" viewBox="0 0 18 18" fill="none" className='absolute'>
                                                <circle cx="9" cy="9" r="9" fill="white" fill-opacity="0.7"></circle>
                                                <path d="M5.37293 6.26408L6.4069 5.23107C6.47983 5.15781 6.56652 5.09968 6.66199 5.06003C6.75746 5.02038 6.85982 4.99998 6.9632 5C7.17387 5 7.37193 5.08252 7.52047 5.23107L8.63307 6.34369C8.70633 6.41663 8.76446 6.50332 8.80411 6.59879C8.84376 6.69426 8.86416 6.79662 8.86414 6.9C8.86414 7.11068 8.78162 7.30874 8.63307 7.45728L7.8195 8.27087C8.00994 8.69064 8.27471 9.07251 8.60104 9.39806C8.92655 9.72518 9.30838 9.99092 9.7282 10.1825L10.5418 9.36893C10.6147 9.29567 10.7014 9.23755 10.7969 9.19789C10.8923 9.15824 10.9947 9.13784 11.0981 9.13786C11.3088 9.13786 11.5068 9.22039 11.6554 9.36893L12.7689 10.4806C12.8423 10.5537 12.9005 10.6405 12.9401 10.7362C12.9798 10.8318 13.0001 10.9343 13 11.0379C13 11.2485 12.9175 11.4466 12.7689 11.5951L11.7369 12.6272C11.5 12.865 11.1728 13 10.8369 13C10.7661 13 10.6981 12.9942 10.6311 12.9825C9.32238 12.767 8.02435 12.0709 6.97679 11.0243C5.9302 9.97864 5.23507 8.68155 5.01662 7.36893C4.95061 6.96796 5.08361 6.55534 5.37293 6.26408Z"></path>
                                            </svg>
                                        </div>
                                        {contactInfo && <span className='text-[11px]'>{contactInfo.email}</span>}
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
                    <div className='bg-white print:w-full w-80 px-3 py-6 text-[#496267] print:text-3xl'>
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-col gap-2'>
                                {contactInfo && <h2 className='text-2xl text-[#496267]'>{contactInfo.firstname} {contactInfo.lastname}</h2>}
                                <div className='flex gap-2 items-center'>
                                    <p className='text-[#496267] text-[11px] font-semibold text-center'>WEB DEVELOPER</p>
                                    <hr className='border bg-[#496267] w-44 h-3' />
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h2 className='underline text-sm font-semibold'>CAREER OBJECTIVE</h2>
                                <p className='print:text-sm text-[10px]'>Motivated Care Assistant with 10 years of experience in the Care industry. Offering expertise in person-centred care, implementation and monitoring of individual care plans and management of resident assessments and files. Energetic self-starter and team builder able to navigate high-stress situations. Well-versed in monitoring clients with developmental disabilities and adhering to patient care plans.</p>
                            </div>
                            <hr />
                            <div className='flex flex-col gap-1'>
                                <h2 className='underline text-sm font-semibold'>WORK HISTORY</h2>
                                <div className='flex justify-between text-[11px]'>
                                    <p className='font-semibold'>Web Developer </p>
                                    <p>07/2022 - Current</p>
                                </div>
                                <div className='text-gray-400 print:text-sm text-[11px]'>
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
            <div className='flex justify-end px-10 print:hidden'>
                <div className='rounded-full shadow-lg p-4 cursor-pointer transition-all ease-in-out duration-300 hover:scale-125' onClick={() => window.print()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-gray-400' ><path className='fill-gray-400' d="m12 16 4-5h-3V4h-2v7H8z"></path><path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path></svg>
                </div>
            </div>
        </>
    )
}

export default CVViewer