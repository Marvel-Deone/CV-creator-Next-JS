// import TextField from '@mui/material/TextField';
import Image from 'next/image';
import React, { useState } from 'react';

const CareerForm = ({ finish }) => {
    const [carrerObjective, setCarrerObjective] = useState('');
    const [allCareerObjective, setAllCareerObjective] = useState([]);
    const [suggestedCareerObjectives, setSuggestedCareerObjectives] = useState([' Time Management.',
        ' Dedicated worker with excellent communication, time management and computer skills. Aiming to leverage my abilities to successfully fill the vacancy at your company. Frequently praised as hardworking by my peers, I can be relied upon to help your company achieve its goals.',
        ' Responsible student with good judgment, time management and a flexible schedule. Aiming to leverage my abilities to successfully fill the vacancy at your company. Frequently praised as hardworking by my peers, I can be relied upon to help your company achieve its goals.',
        ' Dedicated professional with proven performance in management, leadership and communication. Detail-oriented in problem-solving and planning. Ready to make an immediate contribution to your organization.',
        ' Adaptable professional with [Number] years of work experience and proven knowledge of leadership, problem-solving, and workflow prioritization. Aiming to leverage my abilities to successfully fill the [Job Title] role at your company.',
        ' Results-oriented professional with [Number] years of experience and a proven knowledge of [Skill], [Skill] and [Skill]. Aiming to leverage my abilities to successfully fill the [Job Title] role at your company.',
        ' Hard worker experienced in problem-solving, service and time management. Aiming to leverage my abilities to successfully fill the [Job Title] role at your company.',
        ' Hard worker experienced in problem-solving, service and time management. Aiming to leverage my abilities to successfully fill the [Job Title] role at your company.',
        ' Current student looking to join the workforce to gain real-world experience. Ability to complete tasks on time in both individual and team settings. Dependable and reliable, ready to learn and grow with your company.',

    ]);

    const addCareerObjective = () => {
        let cvInfo = JSON.parse(localStorage.getItem(('userCVInfo')));
        cvInfo.careerObjectiveInfo = carrerObjective;
        localStorage.setItem('userCVInfo', JSON.stringify(cvInfo));
        finish();
    }
    return (
        <div className='flex flex-col gap-8'>
            <div className='w-full flex flex-col gap-3'>
                <h2 className='text-[35px] leading-tight text-[#4A4A4A] font-semibold w-3/4'>Career Objective</h2>
                <small className='text-[#9898A5] text-sm'>This section will usually be one of the first things a hiring manager reads. It tells them, ???Here's who I am, and here's what I can do for your company???.</small>
            </div>
            <div className='flex gap-10 ml-20'>
                <textarea type="text" className='w-5/12 overflow-x-hidden overflow-y-auto px-5 py-14 outline-none rounded border border-gray-300 text-gray-600' style={{ wordBreak: 'break-word' }} value={carrerObjective} onChange={e => setCarrerObjective(e.target.value.replaceAll(',', ''))} placeholder='Write your career objective here or select one of our pre-written xamples to start with.' />

                <div className='w-5/12 h-[30rem] border border-gray-300 rounded flex flex-col gap-6'>
                    <div className='rounded bg-white border border-gray-300 text-gray-300 flex justify-between px-4'>
                        <input type="text" placeholder='Search' className='outline-none focus:outline-none px-1 py-3' />
                        <div className="flex items-center cursor-pointer">
                            <Image className='' src={'/search.png'} width={20} height={20} alt='Questionaire-image' />
                        </div>
                    </div>
                    <div className='px-5 text-gray-500 flex flex-col gap-2 h-5/6'>
                        <p>Pre Written Examples</p>
                        <div className='flex flex-col overflow-y-auto'>
                            {suggestedCareerObjectives.map((suggestedCareerObjective, i) => (
                                <div onClick={() => {
                                    setCarrerObjective(e => ([...e, suggestedCareerObjective]));
                                }} key={i} className='border border-gray-300 rounded shadow-md bg-white px-6 py-4 cursor-pointer mb-3'><span className='font-semibold text-2xl mr-3'>+</span>{suggestedCareerObjective}</div>
                            ))}
                        </div>
                    </div>
                    <div className='mt-2 cursor-pointer' onClick={addCareerObjective}>
                        <button name="submit" className='cursor-pointer w-48 bg-blue-400 transition-all ease-in-out duration-300 hover:bg-blue-500 hover:text-white text-white rounded-xl px-8 py-3'>Finish</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CareerForm