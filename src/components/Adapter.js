import React from "react";
import { useAdapt } from "../context/Adapt";

export default function Adapter() {
    const { data, error, loading } = useAdapt();

    if (loading || !data) return "Loading...";
    if (error) return "Error!";
    
    return <span>{ data }</span>;
}