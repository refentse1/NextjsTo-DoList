import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";



export default function Home() {


  const [item,setItem] = useState("");
  const [todolist,setToDoList] = useState([]);
  const [isSet,setIsSet] = useState(false);
  const [isDone,setIsDone] = useState(false);

  const genKey = ()=>{
    let key=Math.random().toString(36).substr(2,9) ;
    return key;
  }

  const handleSubmit = (e)=>{
      e.preventDefault();
      setIsSet(true);
      console.log(item);

      var itemobj={id:genKey(),value:item};

      setToDoList(prevItem=>[...prevItem,itemobj]);
  }

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center ">
      <div className="p-6 w-10/12 bg-white rounded-xl shadow-lg">
        <h1 className="text-xl text-center mb-10 font-medium text-blue">
          Add To-Do Item
        </h1>
        <form className="mb-5">
          <input onChange={(e)=>{setItem(e.target.value)}} type="text" className="w-96 border  border-gray-light rounded-md md:w-4/6 lg:w-5/6 " />
          <button
          onClick={(e)=>{handleSubmit(e)}} 
          className="mx-8 bg-gray px-5 rounded-md text-white">
            Add
          </button>
        </form>
      </div>

      <div className="mt-10 p-6 w-10/12 bg-white rounded-xl shadow-lg">
        <h1 className="text-xl text-center mb-10 font-medium text-blue">
          To-Do List
        </h1>
        <div className="">
            {
              isSet?
              todolist.map((item)=>{
                return(
                  <div key={item.id} className="flex justify-between mb-3">
                    <p >{item.value}</p>
                    <div className="flex">
                      <Image src="/edit.png" width="18" height="5" className="mr-2"/>
                      <Image src="/bin.png" width="18" height="5"/>
                    </div>
                  </div>
                );
              })
              :
              <h1>List is empty...</h1>
            }
        </div>
      </div>
    </div>
  );
}
