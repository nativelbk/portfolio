import { Button } from "@nextui-org/react";
import { LuSend } from "react-icons/lu";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react";

export default function Form () {
    const [isLoading,setIsLoading] = useState(false)
    const { register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = async (field: any)=>{
        setIsLoading(true)
        const {status} = await axios.post('/api',field)
        if(status === 200) {
            toast('Vous devrez recevoir un email si celui que vous avez fournis existe',{icon: '👏',duration: 5000,});
        }
        setIsLoading(false)

    }


    return (
        <form onSubmit={handleSubmit(data=> onSubmit(data) )} className=" w-fit  text-white font-normal flex flex-col gap-2 " >
            <Toaster toastOptions={{
                style: {
                    background: '#363636',
                    color: '#fff',
                    fontSize:'16px',
                    fontWeight:400
                  },
            }} />
            <div className="flex text-white gap-2" >
                <div className=" flex flex-col" >
                <input  placeholder="Nom" type="text" {...register("nom", { required: "Nom obigatoire" })} className="bg-frame   border-[1px] placeholder:font-normal field outline-none max-lg:w-[170px] max-sm:w-[150px]  border-black px-4 py-1  rounded-md  " />
                <span className="text-red bottom-[-15px] inline-block w-fit left-[0] font-medium text-xs " >{errors?.nom && `*${errors?.nom.message}`}</span>
                </div>
                <div className="flex flex-col" >
                <input placeholder="email" type="email" {...register("email", { required: "Email obigatoire" })} className="bg-frame border-[1px] placeholder:font-normal field outline-none max-sm:w-[150px]  border-whiteBorder px-4 py-1  rounded-md  " />
                <span className="text-red bottom-[-15px] inline-block w-fit left-[0] font-medium text-xs " >{errors?.email && `*${errors?.email.message}`}</span>
                </div>
            </div>
            <div className="flex flex-col" >
                <input placeholder="Objet" type="text" {...register("objet", { required: "Objet obigatoire" })} className="bg-frame border-[1px] w-[100%]   placeholder:font-normal field outline-none   border-whiteBorder px-4 py-1  rounded-md  " />
                <span className="text-red bottom-[-17px] inline-block w-fit left-[0] font-medium text-xs  " >{errors?.objet && `*${errors?.objet.message}`}</span>
            </div>
            <div className="flex flex-col" >
                <textarea placeholder="Description"  {...register("description", { required: "Description obigatoire" })} className="bg-frame border-[1px] w-[100%] resize-none field placeholder:font-normal outline-none   border-whiteBorder px-4 py-1  rounded-md  " />
                <span className="text-red bottom-[-10px] inline-block w-fit left-[0] font-medium text-xs " >{errors?.description && `*${errors?.description.message}`}</span>
            </div>
            <Button isLoading={isLoading} type="submit" radius="sm" className="bg-blue  text-white " endContent={<LuSend/>} >
                Envoyer
            </Button>

        </form>
    )
}