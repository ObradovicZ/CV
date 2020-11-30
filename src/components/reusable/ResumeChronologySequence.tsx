import React from 'react';

function ResumeChronologySequence (props:{title:string,subtitle:string,text:string}){
    return (
        <div className={'mt-4 w-100 position-relative px-5 chronology-container mb-4'}>
            <h4 className={''}>{props.title}</h4>
            <h5 className={'color-forth'}>{props.subtitle}</h5>
            <p>{props.text}</p>
            <div className={'chronology-circle-top'}/>
            <div className={'chronology-circle-bottom'}/>
            <span className={'chronology-circle-bottom'}>2020</span>
        </div>
    );
}
export default ResumeChronologySequence;