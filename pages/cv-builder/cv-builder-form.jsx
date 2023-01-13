import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as React from 'react';
import CareerForm from '../../components/CareerForm';
import CVForm from '../../components/CV-form';
import EducationForm from '../../components/Education-form';
import SkillsForm from '../../components/Skills-form';
import ExperienceForm from '../../components/Work-eperienceForm';

const steps = ['Work Eperience', 'Level of education', 'Contact Section', 'Work Experience', 'College/University', 'Your Skills', 'Career Objective', 'Reference', 'Additional Section'];

const CVBuilderForm = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    let router = useRouter();
    const finish = () => {
        router.push('/cv-builder/cv-viewer');
    }


    return (
        <div className='px-20 pt-32'>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        if (isStepOptional(index)) {
                            labelProps.optional = (
                                <Typography variant="caption">Optional</Typography>
                            );
                        }
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        // return (
                        //     <Step key={label} {...stepProps}>
                        //         <StepLabel {...labelProps}>{label}</StepLabel>
                        //     </Step>
                        // );
                    })}
                </Stepper>
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset}>Reset</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        {activeStep + 1 == 1 &&
                            <div className='mb-1'>
                                <div className="flex justify-between overflow-hidden">
                                    <div className='flex flex-col gap-12'>
                                        <div className='w-full flex flex-col gap-2 mt-24 px-10'>
                                            <h2 className='text-[40px] leading-tight text-[#4A4A4A] font-semibold w-3/4'>Do you have work experience?</h2>
                                            <small className='text-[#9898A5] text-sm'>Includes internships, summer jobs, and unofficial jobs</small>
                                        </div>
                                        <div className='flex gap-3 px-10'>
                                            <div className='rounded cursor-pointer w-36 border-2 border-blue-400 h-36 flex flex-col justify-center text-center items-center gap-16 text-blue-400 shadow-lg'>
                                                <div className="relative">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="28" viewBox="0 0 38 28" className='absolute top-5 -left-5'><path fill='#60A5FA' fillRule="nonzero" d="M37.443.558a1.895 1.895 0 0 0-2.687 0l-22.763 22.84-8.75-8.78a1.896 1.896 0 0 0-2.686 0 1.91 1.91 0 0 0 0 2.697L10.65 27.442a1.896 1.896 0 0 0 2.687 0L37.443 3.254a1.91 1.91 0 0 0 0-2.696z"></path></svg>
                                                </div>
                                                <span className='text-sm'>Yes</span>
                                            </div>
                                            <div className='rounded cursor-pointer w-36 border-2 border-[#ddd] transition-all ease-in duration-300 hover:border-blue-400 h-36 flex flex-col justify-center text-center items-center gap-16 text-gray-400 shadow-lg'>
                                                <div className="relative">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" className='absolute top-5 -left-4'><path fill='#606060' fillRule="nonzero" d="M16.084 14L27.568 2.516A1.474 1.474 0 0 0 25.484.432L14 11.916 2.516.432A1.474 1.474 0 1 0 .432 2.516L11.916 14 .432 25.484a1.474 1.474 0 1 0 2.084 2.084L14 16.084l11.484 11.484a1.474 1.474 0 0 0 2.084-2.084L16.084 14z"></path></svg>
                                                </div>
                                                <span className='text-sm'>No</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='hidden md:flex w-7/12'>
                                        <Image src={'/questionaire-first.svg'} width={500} height={500} alt='Questionaire-image' />
                                    </div>
                                </div>
                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, mt: 5 }}>
                                    <Button
                                        color="inherit"
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        sx={{ mr: 1 }}
                                    >
                                        Back
                                    </Button>
                                    <Box sx={{ flex: '1 1 auto' }} />
                                    {isStepOptional(activeStep) && (
                                        <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                            Skip
                                        </Button>
                                    )}

                                    <Button onClick={handleNext}>
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </Box>
                            </div>

                        }
                        {activeStep + 1 == 2 &&
                            <div className='mt-2 mb-1'>
                                <div className="flex justify-between overflow-hidden">
                                    <div className='flex flex-col gap-12'>
                                        <div className='w-full flex flex-col gap-2 mt-24 px-10'>
                                            <div className='text-[40px] leading-tight text-[#4A4A4A] font-semibold w-3/4'>What's your highest level of education?</div>
                                            <small className='text-[#9898A5] text-sm'>Select your highest level attended, even if you did not graduate.</small>
                                        </div>
                                        <div className='flex gap-3 px-10'>
                                            <div className='rounded cursor-pointer w-36 border-2 border-[#ddd] transition-all ease-in duration-300 hover:border-blue-400 h-36 flex flex-col justify-center text-center items-center gap-16 text-gray-400 shadow-lg'>
                                                <div className="relative">
                                                    <svg className='absolute top-3 -left-6' xmlns="http://www.w3.org/2000/svg" width="50" height="45" viewBox="0 0 39 36"><g fill='#606060' fillRule="nonzero"><path d="M38.428 34.802h-1.26v-15.95h1.26a.573.573 0 0 0 .483-.88l-4.274-6.717a.572.572 0 0 0-.483-.265H22.79l-2.718-2.717V6.029h5.534a.572.572 0 0 0 .476-.89l-1.01-1.514 1.01-1.514a.572.572 0 0 0-.476-.89h-5.534V.572a.572.572 0 0 0-1.144 0v7.7L16.21 10.99H4.846c-.195 0-.377.1-.483.265L.09 17.972a.573.573 0 0 0 .483.88h1.26v15.95H.572a.572.572 0 0 0 0 1.145h37.856a.572.572 0 0 0 0-1.145zm-4.589-22.667l3.546 5.571h-7.879l-5.571-5.571h9.904zm-9.303-9.77l-.628.943a.572.572 0 0 0 0 .635l.628.942h-4.464v-2.52h4.464zm-19.375 9.77h9.904l-5.571 5.571H1.615l3.546-5.571zm-2.184 6.716H9.73a.566.566 0 0 0 .057-.003l.024-.003.031-.005.027-.007.027-.006.027-.01.026-.01.024-.01.027-.013.023-.014.025-.015.025-.018.02-.016a.552.552 0 0 0 .042-.038L19.5 9.32l9.364 9.364a.603.603 0 0 0 .042.039l.02.015.025.018.025.015.023.014.026.012.025.012.026.01.027.009.026.006.028.007.03.005c.009.001.017.003.026.003a.582.582 0 0 0 .056.003h6.754v15.951H23.736v-7.975c0-.99-.805-1.794-1.794-1.794h-4.884c-.99 0-1.794.805-1.794 1.794v7.975H2.977v-15.95zm19.614 8.625h-6.182v-.65a.65.65 0 0 1 .649-.648h4.884a.65.65 0 0 1 .649.649v.649zm-6.182 1.144h2.519v6.182h-2.519V28.62zm3.663 0h2.519v6.182h-2.519V28.62z"></path><path d="M19.5 23.125a4.24 4.24 0 0 0 4.236-4.236 4.24 4.24 0 0 0-4.236-4.235 4.24 4.24 0 0 0-4.236 4.235 4.24 4.24 0 0 0 4.236 4.236zm0-7.327a3.094 3.094 0 0 1 3.091 3.091A3.094 3.094 0 0 1 19.5 21.98a3.094 3.094 0 0 1-3.091-3.09 3.094 3.094 0 0 1 3.091-3.092z"></path><path d="M19.5 19.462a.572.572 0 0 0 .572-.573v-1.831a.572.572 0 0 0-1.144 0v1.259h-1.26a.572.572 0 0 0 0 1.145H19.5zM13.394 28.086h-3.053a.572.572 0 0 0-.572.573v3.663c0 .316.256.572.572.572h3.053a.572.572 0 0 0 .573-.572v-3.663a.572.572 0 0 0-.573-.573zm-.572 1.145v.687h-1.908v-.687h1.908zm-1.908 2.519v-.687h1.908v.687h-1.908zM7.9 28.086H4.845a.572.572 0 0 0-.572.573v3.663c0 .316.256.572.572.572H7.9a.572.572 0 0 0 .573-.572v-3.663a.572.572 0 0 0-.573-.573zm-.573 1.145v.687H5.419v-.687h1.908zM5.419 31.75v-.687h1.908v.687H5.419zM13.204 20.76h-2.672a.764.764 0 0 0-.763.763v4.083c0 .316.256.572.572.572h3.053a.572.572 0 0 0 .573-.572v-4.083a.764.764 0 0 0-.763-.764zm-.382 1.144v1.298h-1.908v-1.298h1.908zm-1.908 3.13v-.688h1.908v.687h-1.908zM7.708 20.76h-2.67a.764.764 0 0 0-.764.763v4.083c0 .316.256.572.572.572H7.9a.572.572 0 0 0 .573-.572v-4.083a.764.764 0 0 0-.764-.764zm-.381 1.144v1.298H5.419v-1.298h1.908zm-1.908 3.13v-.688h1.908v.687H5.419zM31.1 32.894h3.054a.572.572 0 0 0 .572-.572v-3.663a.572.572 0 0 0-.572-.573H31.1a.572.572 0 0 0-.573.573v3.663c0 .316.257.572.573.572zm.573-1.144v-.687h1.908v.687h-1.908zm1.908-2.52v.688h-1.908v-.687h1.908zM25.606 32.894h3.053a.572.572 0 0 0 .572-.572v-3.663a.572.572 0 0 0-.572-.573h-3.053a.572.572 0 0 0-.573.573v3.663c0 .316.257.572.573.572zm.572-1.144v-.687h1.908v.687h-1.908zm1.908-2.52v.688h-1.908v-.687h1.908zM31.1 26.178h3.054a.572.572 0 0 0 .572-.572v-4.083a.764.764 0 0 0-.763-.764h-2.671a.764.764 0 0 0-.764.764v4.083c0 .316.257.572.573.572zm.573-1.145v-.687h1.908v.687h-1.908zm1.908-3.129v1.298h-1.908v-1.298h1.908zM25.606 26.178h3.053a.572.572 0 0 0 .572-.572v-4.083a.764.764 0 0 0-.763-.764h-2.672a.764.764 0 0 0-.763.764v4.083c0 .316.257.572.573.572zm.572-1.145v-.687h1.908v.687h-1.908zm1.908-3.129v1.298h-1.908v-1.298h1.908z"></path></g></svg>
                                                </div>
                                                <span className='text-sm'>High School</span>
                                            </div>
                                            <div className='rounded cursor-pointer w-36 border-2 border-[#ddd] transition-all ease-in duration-300 hover:border-blue-400 h-36 flex flex-col justify-center text-center items-center gap-16 text-gray-400 shadow-lg'>
                                                <div className="relative">
                                                    <svg className='absolute top-3 -left-8' xmlns="http://www.w3.org/2000/svg" width="65" height="37" viewBox="0 0 46 26"><g fill='#606060' fillRule="nonzero"><path d="M45.325 24.209h-.765v-9.345c.418 0 .72-.3.72-.668a.671.671 0 0 0-.675-.668H32.317v-.8h1.485c.31 0 .58-.209.655-.506a.665.665 0 0 0-.337-.751L23.675 5.963V4.895h3.646c.234 0 .451-.12.574-.316a.66.66 0 0 0 .03-.65l-.57-1.125.57-1.126a.66.66 0 0 0-.03-.65.677.677 0 0 0-.574-.316h-3.646C23.675.299 23.373 0 23 0a.671.671 0 0 0-.675.668v5.295L11.88 11.471a.665.665 0 0 0 .318 1.256h1.485v.801H1.395a.671.671 0 0 0-.675.668c0 .369.302.668.675.668l.045 9.345H.675a.671.671 0 0 0-.675.667c0 .369.302.668.675.668h44.65a.671.671 0 0 0 .675-.668.671.671 0 0 0-.675-.667zm-2.116-9.345v9.345H32.317v-9.345h10.892zm-12.242 9.345h-1.53V12.727h1.53V24.21zM19.444 12.727V24.21h-1.53V12.727h1.53zm1.35 0h1.53V24.21h-1.53V12.727zm2.881 0h1.53V24.21h-1.53V12.727zm2.88 0h1.531V24.21h-1.53V12.727zm-.326-10.68l-.232.458a.66.66 0 0 0 0 .597l.232.458h-2.554V2.047h2.554zM23 7.12l8.102 4.272H14.898L23 7.12zm-6.436 5.607V24.21h-1.53V12.727h1.53zM2.79 14.864h10.892v9.345H2.791v-9.345z"></path><path d="M11.6 20.555c-.39 0-.705.291-.705.65v.695c0 .36.316.65.706.65.39 0 .706-.29.706-.65v-.694c0-.36-.316-.651-.706-.651zM9.382 20.555c-.39 0-.707.291-.707.65v.695c0 .36.317.65.707.65.39 0 .706-.29.706-.65v-.694c0-.36-.316-.651-.706-.651zM7.162 20.555c-.39 0-.706.291-.706.65v.695c0 .36.316.65.706.65.39 0 .706-.29.706-.65v-.694c0-.36-.316-.651-.706-.651zM4.943 20.555c-.39 0-.706.291-.706.65v.695c0 .36.316.65.706.65.39 0 .706-.29.706-.65v-.694c0-.36-.316-.651-.706-.651zM11.6 16.364c-.39 0-.705.292-.705.652v2.088c0 .36.316.653.706.653.39 0 .706-.293.706-.653v-2.088c0-.36-.316-.652-.706-.652zM9.382 16.364c-.39 0-.707.292-.707.652v2.088c0 .36.317.653.707.653.39 0 .706-.293.706-.653v-2.088c0-.36-.316-.652-.706-.652zM7.162 16.364c-.39 0-.706.292-.706.652v2.088c0 .36.316.653.706.653.39 0 .706-.293.706-.653v-2.088c0-.36-.316-.652-.706-.652zM4.943 16.364c-.39 0-.706.292-.706.652v2.088c0 .36.316.653.706.653.39 0 .706-.293.706-.653v-2.088c0-.36-.316-.652-.706-.652zM41.057 22.55c.39 0 .706-.29.706-.65v-.694c0-.36-.316-.651-.706-.651-.39 0-.706.291-.706.65v.695c0 .36.316.65.706.65zM38.838 22.55c.39 0 .706-.29.706-.65v-.694c0-.36-.316-.651-.706-.651-.39 0-.706.291-.706.65v.695c0 .36.316.65.706.65zM36.618 22.55c.39 0 .707-.29.707-.65v-.694c0-.36-.317-.651-.707-.651-.39 0-.706.291-.706.65v.695c0 .36.316.65.706.65zM34.6 22.55c.39 0 .707-.29.707-.65v-.694c0-.36-.316-.651-.706-.651-.39 0-.706.291-.706.65v.695c0 .36.316.65.706.65zM41.057 19.757c.39 0 .706-.293.706-.653v-2.088c0-.36-.316-.652-.706-.652-.39 0-.706.292-.706.652v2.088c0 .36.316.653.706.653zM38.838 19.757c.39 0 .706-.293.706-.653v-2.088c0-.36-.316-.652-.706-.652-.39 0-.706.292-.706.652v2.088c0 .36.316.653.706.653zM36.618 19.757c.39 0 .707-.293.707-.653v-2.088c0-.36-.317-.652-.707-.652-.39 0-.706.292-.706.652v2.088c0 .36.316.653.706.653zM34.6 19.757c.39 0 .707-.293.707-.653v-2.088c0-.36-.316-.652-.706-.652-.39 0-.706.292-.706.652v2.088c0 .36.316.653.706.653zM21.659 10.577h2.884a.688.688 0 0 0 .676-.699.688.688 0 0 0-.676-.698H21.66a.688.688 0 0 0-.677.698c0 .386.303.699.677.699z"></path></g></svg>
                                                </div>
                                                <span className='text-sm'>College / University</span>
                                            </div>
                                            <div className='rounded cursor-pointer w-36 border-2 border-[#ddd] transition-all ease-in duration-300 hover:border-blue-400 h-36 flex flex-col justify-center text-center items-center gap-16 text-gray-400 shadow-lg'>
                                                <div className="relative">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className='absolute top-4 -left-4' width="38" height="38" viewBox="0 0 38 38"><path fill='#606060' fillRule="nonzero" d="M33.21 31.594A18.919 18.919 0 0 0 38 19c0-5.023-1.963-9.594-5.158-12.995-.002-.004-.006-.006-.008-.009C29.506 2.46 24.844.195 19.658.017l-.37-.01C19.192.003 19.096 0 19 0c-.096 0-.192.003-.288.007l-.368.01h-.001c-5.186.178-9.848 2.442-13.176 5.98-.002.002-.006.004-.008.008v.001C1.962 9.406 0 13.976 0 19c0 4.828 1.814 9.239 4.79 12.594.005.006.005.012.01.018.01.016.028.024.04.04 3.346 3.74 8.146 6.148 13.502 6.332l.37.01c.096.003.192.006.288.006.096 0 .192-.003.288-.007l.368-.01h.001c5.363-.184 10.168-2.598 13.513-6.345.009-.012.022-.015.03-.027.005-.005.005-.011.01-.017zM1.326 19.655H9.19a24.213 24.213 0 0 0 1.582 8.004 24.158 24.158 0 0 0-5.314 2.707 17.608 17.608 0 0 1-4.132-10.71zm4.49-12.433a24.1 24.1 0 0 0 5.175 2.543 24.194 24.194 0 0 0-1.801 8.58H1.327a17.612 17.612 0 0 1 4.49-11.123zm30.856 11.123H28.81a24.194 24.194 0 0 0-1.801-8.58 24.1 24.1 0 0 0 5.175-2.543 17.612 17.612 0 0 1 4.49 11.123zM18.345 9.803a22.904 22.904 0 0 1-5.55-.84 22.923 22.923 0 0 1 5.55-7.23v8.07zm0 1.31v7.232H10.5c.08-2.849.678-5.612 1.747-8.173 1.97.57 4.014.886 6.097.942zm1.31 0a24.188 24.188 0 0 0 6.098-.941 22.882 22.882 0 0 1 1.747 8.173h-7.845v-7.231zm0-1.31v-8.07a22.923 22.923 0 0 1 5.55 7.23 22.904 22.904 0 0 1-5.55.84zm6.82-1.239a24.195 24.195 0 0 0-5.168-7.098 17.639 17.639 0 0 1 9.947 4.794 22.788 22.788 0 0 1-4.78 2.304zm-14.95 0A22.768 22.768 0 0 1 6.746 6.26a17.637 17.637 0 0 1 9.948-4.794 24.186 24.186 0 0 0-5.169 7.098zm-1.024 11.091h7.844v6.577c-2.167.057-4.29.396-6.33 1.01a22.881 22.881 0 0 1-1.514-7.587zm7.844 7.887v8.726a22.912 22.912 0 0 1-5.82-7.808 22.844 22.844 0 0 1 5.82-.918zm1.31 8.726v-8.726c1.991.056 3.942.364 5.82.917a22.908 22.908 0 0 1-5.82 7.809zm0-10.036v-6.577H27.5a22.873 22.873 0 0 1-1.515 7.587 24.129 24.129 0 0 0-6.329-1.01zm9.154-6.577h7.864a17.604 17.604 0 0 1-4.132 10.71 24.158 24.158 0 0 0-5.314-2.706 24.196 24.196 0 0 0 1.582-8.004zM6.35 31.347c1.55-1.03 3.2-1.858 4.925-2.477a24.176 24.176 0 0 0 5.42 7.664 17.652 17.652 0 0 1-10.345-5.187zm14.958 5.187a24.161 24.161 0 0 0 5.419-7.664 22.848 22.848 0 0 1 4.925 2.477 17.652 17.652 0 0 1-10.344 5.187z"></path></svg>
                                                </div>
                                                <span className='text-sm'>Other</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='hidden md:flex w-7/12'>
                                        <Image src={'/questionaire-first.svg'} width={500} height={500} alt='Questionaire-image' />
                                    </div>
                                </div>
                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, mt: 5 }}>
                                    <Button
                                        color="inherit"
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        sx={{ mr: 1 }}
                                    >
                                        Back
                                    </Button>
                                    <Box sx={{ flex: '1 1 auto' }} />
                                    {isStepOptional(activeStep) && (
                                        <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                            Skip
                                        </Button>
                                    )}

                                    <Button onClick={handleNext}>
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </Box>
                            </div>

                        }
                        {activeStep + 1 == 3 &&
                            <div className='mb-1'>
                                <div className="flex justify-between overflow-hidden">
                                    <div className='flex flex-col gap-12'>
                                        <div className='w-full flex flex-col gap-2 mt-24 px-10'>
                                            <h2 className='text-[40px] leading-tight text-[#4A4A4A] font-semibold w-3/4'>
                                                Did you graduate from college / university?</h2>
                                        </div>
                                        <div className='flex gap-3 px-10'>
                                            <div className='rounded cursor-pointer w-36 border-2 border-[#ddd] transition-all ease-in duration-300 hover:border-blue-400 h-36 flex flex-col justify-center text-center items-center gap-16 text-gray-400 shadow-lg'>
                                                <div className="relative">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="28" viewBox="0 0 38 28" className='absolute top-5 -left-5'><path fill='#606060' fillRule="nonzero" d="M37.443.558a1.895 1.895 0 0 0-2.687 0l-22.763 22.84-8.75-8.78a1.896 1.896 0 0 0-2.686 0 1.91 1.91 0 0 0 0 2.697L10.65 27.442a1.896 1.896 0 0 0 2.687 0L37.443 3.254a1.91 1.91 0 0 0 0-2.696z"></path></svg>
                                                </div>
                                                <span className='text-sm'>Yes</span>
                                            </div>
                                            <div className='rounded cursor-pointer w-36 border-2 border-blue-400 h-36 flex flex-col justify-center text-center items-center gap-16 text-blue-400  shadow-lg'>
                                                <div className="relative">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="34" viewBox="0 0 40 34" className='absolute top-3 -left-4'><path fill='#60A5FA' fillRule="nonzero" d="M39.098 3.154L36.342 1.72a15.718 15.718 0 0 0-14.299 0l-2.138 1.1-2.09-1.1a15.718 15.718 0 0 0-14.3 0L.76 3.154C.285 3.393 0 3.87 0 4.444v28.048c0 .478.238.956.665 1.243.428.238.95.286 1.378.047l2.755-1.433c3.658-1.911 8.029-1.911 11.734 0l2.756 1.433c.047.048.095.048.142.048.048 0 .095.048.143.048.047 0 .142.048.237.048H20.142c.096 0 .143 0 .238-.048.047 0 .095-.048.142-.048.048 0 .096-.048.143-.048l2.755-1.433c3.658-1.911 8.029-1.911 11.734 0l2.756 1.433c.19.096.427.144.665.144.237 0 .522-.048.76-.192.427-.238.665-.716.665-1.242V4.444c-.142-.526-.427-1.004-.902-1.29zM10.64 28.048c-2.47 0-4.94.574-7.173 1.72l-.665.383V5.304l1.995-1.051c3.658-1.912 8.029-1.912 11.734 0l1.996 1.05v24.8l-.665-.334a16.057 16.057 0 0 0-7.222-1.72zm26.366 2.103l-.665-.335a15.715 15.715 0 0 0-7.173-1.72c-2.47 0-4.94.574-7.174 1.72l-.665.335V5.304l1.996-1.051c3.658-1.912 8.028-1.912 11.734 0l1.995 1.05v24.848h-.048z"></path></svg>
                                                </div>
                                                <span className='text-sm'>Still Enrolled</span>
                                            </div>
                                            <div className='rounded cursor-pointer w-36 border-2 border-[#ddd] transition-all ease-in duration-300 hover:border-blue-400 h-36 flex flex-col justify-center text-center items-center gap-16 text-gray-400 shadow-lg'>
                                                <div className="relative">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" className='absolute top-5 -left-4'><path fill='#606060' fillRule="nonzero" d="M16.084 14L27.568 2.516A1.474 1.474 0 0 0 25.484.432L14 11.916 2.516.432A1.474 1.474 0 1 0 .432 2.516L11.916 14 .432 25.484a1.474 1.474 0 1 0 2.084 2.084L14 16.084l11.484 11.484a1.474 1.474 0 0 0 2.084-2.084L16.084 14z"></path></svg>
                                                </div>
                                                <span className='text-sm'>No</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='hidden md:flex w-7/12'>
                                        <Image src={'/questionaire-first.svg'} width={500} height={500} alt='Questionaire-image' />
                                    </div>
                                </div>
                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, mt: 5 }}>
                                    <Button
                                        color="inherit"
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        sx={{ mr: 1 }}
                                    >
                                        Back
                                    </Button>
                                    <Box sx={{ flex: '1 1 auto' }} />
                                    {isStepOptional(activeStep) && (
                                        <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                            Skip
                                        </Button>
                                    )}

                                    <Button onClick={handleNext}>
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </Box>
                            </div>

                        }
                        {activeStep + 1 == 4 &&
                            <div className='mb-1'>
                                <div className='max-w-7xl h-auto rounded-md shadow-md bg-slate-100 px-16 py-10 flex flex-col'>
                                    <CVForm handleNext={handleNext} />
                                    <div className='flex gap-2'>
                                        <Button className='border-3 border-gray-600 rounded-xl px-8 py-3'
                                            color="inherit"
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                        >
                                            Back
                                        </Button>
                                        <div />
                                        {isStepOptional(activeStep) && (
                                            <Button color="inherit" onClick={handleSkip}>
                                                Skip
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>

                        }
                        {activeStep + 1 == 5 &&
                            <div className='mb-1'>
                                <div className="flex justify-between overflow-hidden">
                                    <div className='flex flex-col gap-12'>
                                        <div className='w-full flex flex-col gap-2 mt-24 px-10'>
                                            <h2 className='text-[40px] leading-tight text-[#4A4A4A] font-semibold w-3/4'>Would you like to add a Work Experience section?</h2>
                                            <small className='text-[#9898A5] text-sm'>Work experience can include duties performed during unofficial jobs, internships, extracurricular activities, or relevant hobbies.</small>
                                        </div>
                                        <div className='flex gap-3 px-10'>
                                            <div className='rounded cursor-pointer w-36 border-2 border-blue-400 h-36 flex flex-col justify-center text-center items-center gap-16 text-blue-400 shadow-lg'>
                                                <div className="relative">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="28" viewBox="0 0 38 28" className='absolute top-5 -left-5'><path fill='#60A5FA' fillRule="nonzero" d="M37.443.558a1.895 1.895 0 0 0-2.687 0l-22.763 22.84-8.75-8.78a1.896 1.896 0 0 0-2.686 0 1.91 1.91 0 0 0 0 2.697L10.65 27.442a1.896 1.896 0 0 0 2.687 0L37.443 3.254a1.91 1.91 0 0 0 0-2.696z"></path></svg>
                                                </div>
                                                <span className='text-sm'>Yes</span>
                                            </div>
                                            <div className='rounded cursor-pointer w-36 border-2 border-[#ddd] transition-all ease-in duration-300 hover:border-blue-400 h-36 flex flex-col justify-center text-center items-center gap-16 text-gray-400 shadow-lg'>
                                                <div className="relative">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" className='absolute top-5 -left-4'><path fill='#606060' fillRule="nonzero" d="M16.084 14L27.568 2.516A1.474 1.474 0 0 0 25.484.432L14 11.916 2.516.432A1.474 1.474 0 1 0 .432 2.516L11.916 14 .432 25.484a1.474 1.474 0 1 0 2.084 2.084L14 16.084l11.484 11.484a1.474 1.474 0 0 0 2.084-2.084L16.084 14z"></path></svg>
                                                </div>
                                                <span className='text-sm'>No</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='hidden md:flex w-7/12'>
                                        <Image src={'/questionaire-first.svg'} width={500} height={500} alt='Questionaire-image' />
                                    </div>
                                </div>
                                <Box sx={{ display: 'flex', flexDirection: 'row', mt: 3 }}>
                                    <Button
                                        color="inherit"
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        sx={{ mr: 1 }}
                                    >
                                        Back
                                    </Button>
                                    <Box sx={{ flex: '1 1 auto' }} />
                                    {isStepOptional(activeStep) && (
                                        <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                            Skip
                                        </Button>
                                    )}

                                    <Button onClick={handleNext}>
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </Box>
                            </div>

                        }
                        {activeStep + 1 == 6 &&
                            <div className='mb-1'>
                                <div className='max-w-7xl h-auto rounded-md shadow-md bg-slate-100 px-16 py-10 flex flex-col gap-6'>
                                    <ExperienceForm handleNext={handleNext} />
                                    <div className='flex gap-2'>
                                        <Button className='border-3 border-gray-600 rounded-xl px-8 py-3'
                                            color="inherit"
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                        >
                                            Back
                                        </Button>
                                        <div />
                                        {isStepOptional(activeStep) && (
                                            <Button color="inherit" onClick={handleSkip}>
                                                Skip
                                            </Button>
                                        )}

                                    </div>
                                </div>
                            </div>

                        }
                        {activeStep + 1 == 7 &&
                            <div className='mb-1'>
                                <div className='max-w-7xl h-auto rounded-md shadow-md bg-slate-100 px-16 py-10 flex flex-col gap-6'>
                                    <EducationForm handleNext={handleNext} />
                                    <div className='flex gap-2'>
                                        <Button className='border-3 border-gray-600 rounded-xl px-8 py-3'
                                            color="inherit"
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                        >
                                            Back
                                        </Button>
                                        <div />
                                        {isStepOptional(activeStep) && (
                                            <Button color="inherit" onClick={handleSkip}>
                                                Skip
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>

                        }
                        {activeStep + 1 == 8 &&
                            <div className='mb-1'>
                                <div className='max-w-7xl h-auto rounded-md shadow-md bg-slate-100 px-16 py-10 flex flex-col gap-6'>
                                    <SkillsForm handleNext={handleNext} />
                                    <div className='flex gap-2 -translate-y-40 mt-2'>
                                        <Button className='cursor-pointer bg-gray-300 border-3 border-gray-600 rounded-xl px-8 py-3 w-44'
                                            color="inherit"
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                        >
                                            Back
                                        </Button>
                                        <div />
                                        {isStepOptional(activeStep) && (
                                            <Button color="inherit" onClick={handleSkip}>
                                                Skip
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>

                        }
                        {activeStep + 1 == 9 &&
                            <div className='mb-1'>
                                <div className='max-w-7xl h-auto rounded-md shadow-md bg-slate-100 px-16 py-10 flex flex-col gap-6'>
                                    <CareerForm />
                                    <div className='flex gap-2 md:mx-32'>
                                        <Button className='bg-gray-300 border-3 border-gray-600 rounded-xl px-8 py-3 w-44'
                                            color="inherit"
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                        >
                                            Back
                                        </Button>
                                        <div />
                                        {isStepOptional(activeStep) && (
                                            <Button color="inherit" onClick={handleSkip}>
                                                Skip
                                            </Button>
                                        )}

                                        <Button onClick={finish} className='bg-blue-400 hover:bg-blue-500 hover:text-white text-white rounded-xl px-8 py-3 w-44'>
                                            Finish
                                        </Button>
                                    </div>
                                </div>
                            </div>

                        }
                        {/* <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, mt: 5 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            {isStepOptional(activeStep) && (
                                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                    Skip
                                </Button>
                            )}

                            <Button onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Box> */}
                    </React.Fragment>
                )}
            </Box>
        </div>
    );
}

export default CVBuilderForm