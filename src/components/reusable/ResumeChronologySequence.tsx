import React from 'react';

function ResumeChronologySequence (props:{title:string,subtitle:string,text:string,startYear:number,endYear:number}){
    return (
        <div className={'mt-4 w-100 position-relative pl-5 chronology-container mb-4'}>
            <h4 className={''}>{props.title}</h4>
            <h5 className={'color-third resume-subtitle'}>{props.subtitle}</h5>
            <p className={'text-justify resume-text'}>{props.text}</p>
            <div className={'chronology-circle-top'}/>
            <div className={'chronology-circle-bottom'}/>
            <span className={'chronology-text-bottom'}>{props.startYear}</span>
            <span className={'chronology-text-top'}>{props.endYear}</span>
        </div>
    );
}
export default ResumeChronologySequence;