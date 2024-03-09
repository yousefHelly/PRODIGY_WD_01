import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

type Props = {}

function QaAccordions({}: Props) {
    const QAs = [
        {
            q: "What is Cripz platform?",
            a: "Cripz is a crypto trading platform facilitating secure transactions and direct trading between counterparties."
        },
        {
            q: "What if the other person doesn't pay?",
            a: "In case of non-payment, Cripz's escrow service ensures funds are held until transaction conditions are met."
        },
        {
            q: "How does escrow work?",
            a: "Escrow on Cripz functions by securely holding funds until both parties fulfill transaction requirements, ensuring trust."
        },
        {
            q: "Is Cripz platform available worldwide?",
            a: "Yes, Cripz platform is accessible globally, enabling users from different regions to participate in crypto trading."
        },
        {
            q: "What cryptocurrencies can I trade on Cripz?",
            a: "Cripz supports a wide range of cryptocurrencies, including Bitcoin, Ethereum, Litecoin, and many others."
        },
        {
            q: "How does Cripz ensure security for its users?",
            a: "Cripz employs robust security measures, including encryption protocols and multi-factor authentication, to safeguard user assets and data."
        },
    ];
    return (
        <div className='col-span-full'>
            <Accordion type="single" collapsible>
                {
                    QAs.map((qa)=>{
                        return <AccordionItem key={qa.q} value={qa.q}>
                        <AccordionTrigger className='font-bold text-start text-sm md:text-base'>{qa.q}</AccordionTrigger>
                        <AccordionContent className='px-4 text-xs md:text-sm'>
                        {qa.a}
                        </AccordionContent>
                    </AccordionItem>
                    })
                }
            </Accordion>
        </div>
    )
}

export default QaAccordions