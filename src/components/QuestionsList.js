import React from 'react'
import { useQuant } from '../context/Quant'

export default function QuestionsList() {
    const { quant } = useQuant();

    return (
        <>
            <div>{ quant }</div>
        </>
    )
}

