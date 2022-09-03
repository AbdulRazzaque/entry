import React, { useEffect } from 'react'
import  ReactDOM  from 'react-dom';
import { Link,useParams } from 'react-router-dom';
import Entry from '../Entry/Entry';
import { useState } from 'react';
import './List.css'
import { Formik, Form, Field } from 'formik';

const List = ({getFormikData,setFormikData}) => {
    const getLocalItem = () => {
        const list = (localStorage.getItem('lists'))
        console.log(list);
        if (list){
          return JSON.parse(localStorage.getItem('lists'))
        } else {
          return [];
        }
      }
    const [showModal, setShowModal] = React.useState(false);
    const [test, setTest] = React.useState(true);
    const [getFormikDataItem, setFormikDataItem] = React.useState("");
    const [getFormikDataIndex, setFormikDataIndex] = React.useState("");
   
    useEffect(()=>{

    },[getFormikData])
 console.log(setFormikDataItem+'Hello');

//   clickHandler
let clickHandler =()=>{

console.log(getFormikDataItem);
getFormikData[getFormikDataIndex].report = getFormikDataItem
// getFormikData(getFormikDataItem)
setShowModal(false)   

}

//    Input Change handler  
    let changeHandler= (event)=>{
        setFormikDataItem(event.target.value);
       
    }

    // Delet Item 
 let    deletItem =(getFormikDataIndex)=>{
alert("Comming Soon")

 }

return (

  <div className="w-full  ">
  <div className="  lg:flex flex-row lg:flex-col">
      <div className="w-full">
          <div className=" border-b border-gray-200 shadow">
            <div className="overflow-auto">
              <table className="divide-y divide-gray-300 overflow-auto" id="dataTable">
                  <thead className="bg-black">
                      <tr className=''>
                          <th className="px-6 py-2 text-xs text-white">
                              ID
                          </th>
                          <th className="px-6 py-2 text-xs text-white">
                          Report Number 
                          </th>
                          <th className="px-6 py-2 text-xs text-white">
                          Work Order
                          </th>
                          <th className="px-6 py-2 text-xs text-white">
                          Micro chip
                          </th>
                        
                          <th className="px-6 py-2 text-xs text-white">
                          Neck
                          </th>
                          <th className="px-6 py-2 text-xs text-white">
                          camelName
                          </th>
                          <th className="px-6 py-2 text-xs text-white">
                          organiztion
                          </th>
                          <th className="px-6 py-2 text-xs text-white">
                          BAPAT
                          </th>
                          <th className="px-6 py-2 text-xs text-white">
                          RIVANOI
                          </th>
                          <th className="px-6 py-2 text-xs text-white">
                          Card
                          </th>
                          <th className="px-6 py-2 text-xs text-white">
                          cELISA
                          </th>
                          <th className="px-6 py-2 text-xs text-white">
                          JUDGMENT
                          </th>
                          <th className="px-4 py-2 text-xs text-white">
                          date
                          </th>



                          <th className="px-4 py-2 text-xs text-white">
                              Edit
                          </th>
                          <th className="px-4 py-2 text-xs text-white">
                              Delete
                          </th>
                      </tr>
                  </thead>
                 
                 
                          
                  <tbody className="bg-white divide-y divide-gray-300">
                  {getFormikData.map((item,index)=>{
                        
                        return(
                            <tr className="text-center whitespace-nowrap" key={index}>
                            <td className="px-6 py-4 text-sm text-gray-900">
                            {index+1}
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm text-gray-500">
                                  {item.report}
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm text-gray-500">
                                {item.order}
                                    </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                            {item.chip}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                            {item.neck}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                            {item.camelName}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                            {item.organiztion}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                            {item.bapat}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                            {item.rivanoi}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                            {item.card}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                            {item.celisa}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                            {item.judgment}
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500">
                            {item.date}
                            </td>
                        
                            <td className="px-4 py-4">
                                {/* <Link to='/edit/' onClick={()=>
                                    handelEdit(index)
                                    } className="inline-block text-center"> */}
                                    <svg onClick={()=>{
                                        setFormikDataItem(item)
                                        setFormikDataIndex(index)
                                         setShowModal(true)
                                      // alert("Comming Soon")

                                    }} xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400 cursor-pointer"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                {/* </Link> */}
{/*                             
                                    <svg onClick={()=>{alert("item")}} xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg> */}
                             
                            </td>
                            <td className="px-4 py-4">
                                <a href="#" className="inline-block text-center">
                                    <svg onClick={deletItem} xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-400"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </a>
                            </td>
                        </tr>
                        )
                      })}
                   
                     
                  </tbody>
              
              </table>
              </div>
          </div>
      </div>
  </div>

{/* Model Box  Start Here  */}

  <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full dark:bg-gray-700 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-white">
                  THARB CAMEL HOSPITAL
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                <Formik
            initialValues={{
              report: "",
              order: "",
              chip: "",
              neck: "",
              camelName: "",
              organiztion: "",
              bapat: "",
              rivanoi: "",
              card: "",
              celisa: "",
              judgment: "",
              date: "",

            }}
            onSubmit={
              (values => {
                // console.log(values);
                // setFormik(values)
                setFormikData([...getFormikData, values]);
                // console.log([...getFormikData, values]);
                // localStorage.setItem('lists', JSON.stringify([...getFormikData, values]))
              })}

          >
            <Form  >
              <div className="flex  flex-wrap  mt-10  justify-center  ">

                <Field type="text" name="report" placeholder='Report Number' className='border-b outline-none bg-transparent border-[#9A9EA1] text-white  py-2 w-1/4 mx-3  placeholder:text-center' required value={getFormikDataItem.report} onChange={changeHandler} />
                <Field type="text" name="order" placeholder='Work Order' className='border-b outline-none bg-transparent border-[#9A9EA1] text-white  py-2 w-1/4 mx-3  placeholder:text-center'value={getFormikDataItem.order} onChange={changeHandler} />
                
                </div>
                <div className="flex  flex-wrap  justify-center  mt-10">
                <Field type="text" name="chip" placeholder='Micro chip' className='border-b outline-none bg-transparent border-[#9A9EA1] text-white  py-2 w-1/4 mx-3 placeholder:text-center'value={getFormikDataItem.chip } onChange={changeHandler} />
                <Field type="text" name="neck" placeholder='Neck' className='border-b outline-none bg-transparent border-[#9A9EA1] text-white  py-2 w-1/4 mx-3  placeholder:text-center'value={getFormikDataItem.neck} onChange={changeHandler} />
                </div>

              
              <div className="flex  flex-wrap  justify-center  mt-10">

                <Field type="text" name="camelName" placeholder='camelName' className='border-b outline-none bg-transparent border-[#9A9EA1] text-white   py-2 w-1/4 mx-3 placeholder:text-center'value={getFormikDataItem.camelName } onChange={changeHandler} />
                <Field type="text" name="organiztion" placeholder='organiztion' className='border-b outline-none bg-transparent border-[#9A9EA1] text-white  py-2  w-1/4 mx-3 placeholder:text-center'value={getFormikDataItem.organiztion }onChange={changeHandler} />

              </div>

              <div className="flex flex-wrap  mt-10">
              
                {/* first select  */}

                <Field as="select" className="px-4 bg-transparent border-white text-white border mx-4"
                  name="bapat" value={getFormikDataItem.bapat } onChange={changeHandler}
                >
                  <option value="" label="Select a BAPAT " className='text-white bg-black' >
                    Select a BAPAT
                  </option>
                  <option value="-VE" label="-VE " className='bg-black text-white'>

                    -VE
                  </option>
                  <option value="+VE" label="+VE" className='bg-black text-white'>
                    +VE
                  </option>


                </Field>


                {/* seconde Rivanoi  */}

                <Field as="select" className=" bg-transparent border-white text-white border "
                  name="rivanoi" value={getFormikDataItem.rivanoi } onChange={changeHandler}
                >
                  <option value="" label="Select a RIVANOI" className='text-white bg-black'>
                    Select a RIVANOI
                  </option>
                  <option value="-VE" label="-VE" className='text-white bg-black'>

                    -VE
                  </option>
                  <option value="+VE" label="+VE" className='text-white bg-black'>
                    +VE
                  </option>


                </Field>
                </div>

          

                {/* Therd Card  */}
            <div>

                <Field as="select" className="mx-5 my-5  bg-transparent border-white text-white border"
                  name="card" value={getFormikDataItem.card } onChange={changeHandler}
                >
                  <option value="" label="Select a Card" className='bg-black text-white'>
                    Select a CArd
                  </option>
                  <option value="-VE" label="-VE" className='bg-black text-white' >

                    -VE
                  </option>
                  <option value="+VE" label="+VE" className='bg-black text-white' >
                    +VE
                  </option>


                </Field>


                {/* forth cELISA  */}

                <Field as="select" className=" bg-transparent border-white text-white border ml-10 "
                  name="celisa" value={getFormikDataItem.celisa } onChange={changeHandler}
                >
                  <option value="" label="Select a cELISA" className='bg-black text-white'>
                    Select a cELISA
                  </option>
                  <option value="-VE" label="-VE" className='bg-black text-white'>

                    -VE
                  </option>
                  <option value="+VE" label="+VE" className='bg-black text-white'>
                    +VE
                  </option>


                </Field>


                </div>
                <div>
                {/* fith JUDGMENT  */}

                <Field as="select" className="mx-4  bg-transparent border-white text-white border"
                  name="judgment" value={getFormikDataItem.judgment } onChange={changeHandler}
                >
                  <option value="" label="Select a JUDGMENT" className='bg-black text-white'>
                    Select a JUDGMENT
                  </option>
                  <option value="-VE" label="NEGATIVE" className='bg-black text-white'>
                    NEGATIVE
                  </option>
                  <option value="+VE" label="POSITIVE" className='bg-black text-white'>
                    POSITIVE

                  </option>


                </Field>
                <Field type="Date" name="date" className=" bg-transparent border-white text-white border" value={getFormikDataItem.date }onChange={changeHandler} />


              </div>
            
            </Form>
          </Formik>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={clickHandler}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
</div>

  )
}

export default List




