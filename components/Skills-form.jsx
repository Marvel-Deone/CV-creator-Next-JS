import TextField from '@mui/material/TextField';
import Image from 'next/image';
import React, { useState } from 'react';

const SkillsForm = ({ handleNext }) => {
    const [skill, setSkill] = useState('');
    const [newSkill, setNewSkill] = useState('');
    const [allSkills, setAllSkills] = useState([]);
    const [suggestedSkills, setSuggestedSkills] = useState(['Time Management',
        'Outgoing and Friendly',
        'Goal Oriented',
        'Ability to Lift',
        'Team Player',
        'Negotiation']);

    const addNewSKill = () => {
        setAllSkills(e => ([...e, {
            skillId: Math.floor(Math.random() * 1000000000),
            skill: skill
        }]));
    }
    const storeSkills = () => {
        localStorage.setItem('Skills', JSON.stringify(allSkills));
        handleNext();
    }
    return (
        <div className='flex flex-col gap-8'>
            <div className='w-full flex flex-col gap-3'>
                <h2 className='text-[35px] leading-tight text-[#4A4A4A] font-semibold w-3/4'>Skills</h2>
                <small className='text-[#9898A5] text-sm'>Try to add 6-10 skills that are most relevant to your desired job.</small>
            </div>
            <div className='flex gap-10'>
                <div className='w-6/12'>
                    <div className='flex flex-col gap-5 h-4/6 overflow-y-auto pt-4'>
                        <div className='flex gap-3 items-center'>
                            <TextField className='transition-all ease-in-out duration-300 w-11/12 rounded border border-gray-300 text-gray-200 flex justify-between'
                                id="outlined-textarea"
                                label="Skill"
                                placeholder="Skill"
                                multiline value={skill} onChange={e => setSkill(e.target.value)}
                            />
                            <button onClick={addNewSKill} className='bg-blue-700 rounded-md px-5 py-2 text-white transition-all ease-in-out duration-300 hover:bg-blue-600'>Add</button>
                        </div>
                        {allSkills.map((item, i) => (
                            <div className='flex gap-3 items-center'>
                                <div key={item.id} className='transition-all ease-in-out duration-300 w-11/12 rounded border border-gray-300 text-gray-500 flex justify-between text-base font-semibold px-4 py-3 '>{item.skill}
                                </div>
                                <svg onClick={() => setAllSkills(allSkills.filter((_, index) => index != i))} className='fill-gray-500 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"></path></svg>
                            </div>
                        ))}
                    </div>
                    <div className='mt-2' onClick={storeSkills}>
                        <button name="submit" className='cursor-pointer w-48 bg-blue-400 transition-all ease-in-out duration-300 hover:bg-blue-500 hover:text-white text-white rounded-xl px-8 py-3'>Continue</button>
                    </div>
                </div>
                <div className='w-6/12 h-4/6 border border-gray-300 rounded flex flex-col gap-6'>
                    <div className='rounded bg-white border border-gray-300 text-gray-300 flex justify-between px-4'>
                        <input type="text" placeholder='Search' className='outline-none focus:outline-none px-1 py-3' />
                        <div className="flex items-center cursor-pointer">
                            <Image className='' src={'/search.png'} width={20} height={20} alt='Questionaire-image' />
                        </div>
                    </div>
                    <div className='px-5 text-gray-500 flex flex-col gap-2 h-5/6'>
                        <p>Pre Written Examples</p>
                        <div className='flex flex-col overflow-y-auto'>
                            {suggestedSkills.map((suggestedSkill, i) => (
                                <div onClick={() => {
                                    setSkill(suggestedSkill);
                                }} key={i} className='border border-gray-300 rounded shadow-md bg-white px-6 py-4 cursor-pointer mb-3'><span className='font-semibold text-2xl mr-3'>+</span>{suggestedSkill}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsForm