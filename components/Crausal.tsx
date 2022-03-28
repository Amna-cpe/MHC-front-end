import React, { useState } from 'react'
import cn from "classnames";
import SectionCard from './SectionCard';


function Crausal() {


    const [currentItem, setCurrentItem] = useState(1);

    const goNext = () => {
        let c = currentItem;
        if (currentItem == 6) {
            setCurrentItem(1);
            c =1;
        } else {
            setCurrentItem(prev => prev + 1);
            c = currentItem +1;
        }
        
        window.location.href = `/#item${c}`;

    }

    const goPrev = () => {
        let c = currentItem;
        if (c == 1) {
            setCurrentItem(6);
            c=6;
        } else {
            setCurrentItem(prev => prev - 1);
            c= currentItem -1;;
        }

        window.location.href = `/#item${c}`;

    }

    return (
        <div className='flex flex-col items-center justify-center w-full  p-6 relative ' style={{height:"750px" }}>
            <div className="overflow-x-hidden overflow-y-hidden flex   scroll-smooth w-4/5 h-full" style={{ scrollSnapType: "x mandatory" }}>

                <SectionCard
                    item={1}
                    title={"Individual Counselling"}
                    msg={`Individual Counselling is a form of therapy in which the client is treated on a one-on-one basis with a therapist.
                                        Where a therapist conducts a session with clients individually according to their individual concerns.`} />


                <SectionCard
                    item={2}
                    title={"Couples therapy"}
                    msg={`Couples therapy is a form of psychotherapy that can help you and your partner improve your relationship.`} />


                <SectionCard
                    item={3}
                    title={"Organizational Therapy"}
                    msg={`Employee mental health is the most important for employers who invest in their employee’s mental well-being. Most students prefer online counseling rather than face-to face 
                    counseling as they feel comfortable discussing sensitive issues anonymously.`} />


                <SectionCard
                    item={4}
                    title={"Family therapy"}
                    msg={`Family therapy is a type of treatment designed to help with issues that specifically affect families' mental health and functioning. It can help individual family members build stronger relationships, 
                    improve communication, and manage conflicts within the family system.`} />


                <SectionCard
                    item={5}
                    title={"Pregnancy Counselling"}
                    msg={`Support for women and their partners and families in making informed decisions about pregnancy-related issues. Perinatal mental illness include antenatal depression, postnatal depression, anxiety, tokophobia (extreme fear of childbirth), perinatal obsessive-compulsive disorder (OCD), postpartum psychosis and postpartum post-traumatic stress disorder (PTSD). 
                    These illnesses can be mild, moderate or severe, requiring different kinds of care or treatment. `} />

                <SectionCard
                    item={6}
                    title={"Nutrition counselling"}
                    msg={`Nutrition counselling is a two-way interaction through which a patient and the member of the medical team interpret the results of a nutritional assessment, identify patient's nutritional problems, needs and goals, discuss ways to meet these goals, and agree on future steps and the frequency of monitoring.                    `} />


            </div>

            <div className="flex gap-5 p-5">
                <a href="#item1" className={cn('rounded-full w-3 h-3 border-2 bg-transparent', { "bg-red-200": currentItem === 1 })}></a>
                <a href="#item2" className={cn('rounded-full w-3 h-3 border-2 bg-transparent', { "bg-red-200": currentItem === 2 })}></a>
                <a href="#item3" className={cn('rounded-full w-3 h-3 border-2 bg-transparent', { "bg-red-200": currentItem === 3 })}></a>
                <a href="#item4" className={cn('rounded-full w-3 h-3 border-2 bg-transparent', { "bg-red-200": currentItem === 4 })}></a>
                <a href="#item5" className={cn('rounded-full w-3 h-3 border-2 bg-transparent', { "bg-red-200": currentItem === 5 })}></a>
                <a href="#item6" className={cn('rounded-full w-3 h-3 border-2 bg-transparent', { "bg-red-200": currentItem === 6 })}></a>
            </div>


            <div className='absolute top-1/2 right-0 text-4xl mr-4 text-slate-400 cursor-pointer hover:shadow-lg' onClick={goNext}>{">"}</div>
            <div className='absolute top-1/2 left-0 text-4xl ml-4 text-slate-400 cursor-pointer hover:shadow-lg' onClick={goPrev}>{"<"}</div>

        </div>

    )
}

export default Crausal