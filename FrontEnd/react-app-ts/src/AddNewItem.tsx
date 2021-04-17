import React, { useState } from "react"
import { AddItemButton } from "./styles"


interface AddNewItemProps {
    onAdd(text: string): void
    toggleButtonText: string
    dark?: boolean
}

export const AddNewItem = (props: AddNewItemProps) => {
    const [showForm, setShowForm] = useState(false);
    const { onAdd, toggleButtonText, dark } = props;
    if (showForm) {
    // We show item creation form here
    }
    return (
        <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
        {toggleButtonText}
        </AddItemButton>
)
}

// const [showForm, setShowForm] = useState(false)
// const { onAdd, toggleButtonText } = props
// if (showForm) {
//     return (
//         <NewItemForm
//             onAdd={text => {
//                     onAdd(text)
//                     setShowForm(false)
//                 }}
//             />
//         )
//     }
// return <button onClick={() => setShowForm(true)}>{toggleButtonText}</button>

// }