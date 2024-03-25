import React, { InputHTMLAttributes, useCallback, useState } from "react"
interface inputProps {
    phone: string;
}
export const InputMask: React.FC<InputHTMLAttributes<HTMLInputElement>>  = ({...props}) => {
    const [phone, setPhone] = useState<inputProps>( {} as inputProps)
    const handleChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        setPhone({
            ...phone,
            [e.currentTarget.name]: e.currentTarget.value,
        });
    },[phone]);

    const handleOnKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        // 999999-99999
        //regex
        e.currentTarget.maxLength = 11;
        let value = e.currentTarget.value;
        value = value.replace(/\D/g,"");  
        value = value.replace(/(\d{2})(\d{5})(\d{4})$/,"$2-$3");
        value = value.replace(/?=(\d{2})(\d{5})(\d{4})$/,"$1)$");
        e.currentTarget.value = value;
    },[]);
    
    return (
        <>
        <input {...props} onKeyUp={handleOnKeyUp} onChange={handleChange}/>
        <button onClick={()=> {console.log(phone)}}>Salvar</button>
        </>
    );
}