import { FormData } from '@/app/(pages)/contact/page';
import { UseFormRegister } from 'react-hook-form';

type PropsDefinition = {
    labelName: string;
    id?: string;
    disabled?: boolean;
    required?: boolean;
    register?: UseFormRegister<FormData>;
}

export default function InputField({
    labelName,
    id,
    disabled,
    required,
    register
}: PropsDefinition) {


    return (
        <div className='flex flex-col w-[90%] text-tinyBlack-base'>
            <label htmlFor={id} className='text-tinyPink-base'>{labelName}</label>
            <input
                type={id === 'email' ? 'email' : 'text'}
                id={id}
                disabled={disabled ?? false}
                required={required}
                className='rounded-lg p-2 border-2  focus:outline-tinyPink-dark w-full mt-1'
                {...register && register(id as 'name' | 'email')}
            />
        </div>
    );
};
