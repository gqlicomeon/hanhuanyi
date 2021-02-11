import React, { useState } from 'react';
import './index.scss';
type InputType = 
'button'
| 'checkbox'
| 'color'
| 'date'
| 'datetime'
| 'datetime-local'
| 'email'
| 'file'
| 'hidden'
| 'image'
| 'month'
| 'number'
| 'password'
| 'radio'
| 'range'
| 'reset'
| 'search'
| 'submit'
| 'tel'
| 'text'
| 'time'
| 'url'
| 'week';

interface PropType{
    placeholder?: string;
    inputType?: InputType;
    success?():void;
}
const SearchInput: React.FC<PropType> = (props: PropType) => {
    const { placeholder, inputType = 'text',success = ()=>{} } = props;
    const [isError, setIsError] = useState<boolean>(false);
    const [isSpace, setIsSpace] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');

    const delSpace = (str: string) => str.replace(/^\s|\s$/g,'');

    const onChange = event => {
        setIsError(false);
        setIsSpace(false);
        setInputValue(event.target.value);
    };

    const onClick = () => {
        const str = delSpace(inputValue);
        if( str === '0822'){
            success();
        }else if(str === ""){
            setIsSpace(true);
        }else{
            setIsError(true);
        }
    };

    return (
        <>
            <div className={isError || isSpace ? "search-input error" : "search-input"}>
                <input 
                    type={inputType} 
                    placeholder={placeholder}
                    onChange={onChange}
                />
                <button onClick={onClick}></button>
                {
                    isError 
                    ? <p>你输入的生日不正确哦，请再想想吧~</p>
                    : null
                }
                {
                    isSpace 
                    ? <p>不能输入空内容哦~</p>
                    : null
                }
            </div>
        </>
    );
}

export default SearchInput;