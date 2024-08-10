import React from "react";
import { ComponentListProps } from "@/types";

export default function ComponentList<T extends object>({ dataList, ListedComponent }: ComponentListProps<T>) {
    return (
        <>
            {dataList.map((data, index) => <li key={index}>
                <ListedComponent {...data}/>
            </li>)}
        </>
    )
}
