import React from 'react'
import { Formik, Form, Field } from 'formik';
import List from '../List/List';
import { useState } from 'react';
import { useEffect } from 'react';


const Entry = () => {

  // save localStorage data
  const getLocalItem = () => {
    const list = (localStorage.getItem('lists'))
    console.log(list);
    if (list) {
      return JSON.parse(localStorage.getItem('lists'))
    } else {
      return [];
    }
  }
  const [showModal, setShowModal] = React.useState(false);
  const [getFormik, setFormik] = useState(null)
  const [getFormikData, setFormikData] = useState(getLocalItem())



  // add data localStorage
  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(getFormikData))
  }, [getFormikData])


  const Render=() =>{
    
  }


  return (
    <>
<div className='p-5'>
      <h1 className='font-bold text-4xl text-center text-white'>Entry Mode</h1>
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
        <Form className="">
          <div className=' md:grid  md:grid-cols-2'>
            <div>
              {/* First Fild Start Here  */}
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    Report Number
                  </label>
                  <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" name="report" placeholder="Entre Report Number" required/>

                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                    Work Order
                  </label>
                  <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" name="order" placeholder="Enter Order Number" required/>
                </div>
              </div>

              {/* Second Fild Start Here  */}
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    Organization
                  </label>
                  <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" name="organiztion" placeholder="Enter organiztion" />

                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                    Micro Chip
                  </label>
                  <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" name="chip" placeholder="Enter Chip Number " required/>
                </div>
              </div>

              {/* Therd Fild Start Here  */}
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    Neek
                  </label>
                  <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" name="neck" placeholder="Enter Neek" required/>

                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                    Camel Name
                  </label>
                  <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" name="camelName" placeholder="Enter Camel Name" required/>
                </div>

              </div>

            </div>
            <div className="grid  grid-cols-2">
              <div>
                <div className="w-full  px-3 mb-9 ">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                    BAPT
                  </label>
                  <div className="relative">
                    <Field as="select" name="bapat" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                      <option value="" label="Select a BAPT">Select a BAPT</option>
                      <option value="-VE" label="-VE" >-VE</option>
                      <option value="+VE" label="+VE" >+VE</option>

                    </Field>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                </div>


                <div className="w-full  px-3 mb-9">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                    RIVANO
                  </label>
                  <div className="relative">
                    <Field as="select" name="rivanoi" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                      <option value="" label="Select a RIVANOI">Select a RIVANOI</option>
                      <option value="-VE" label="-VE" >-VE</option>
                      <option value="+VE" label="+VE" >+VE</option>
                    </Field>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                </div>


                <div className="w-full  px-3 mb-6 ">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                    Card
                  </label>
                  <div className="relative">
                    <Field as="select" name="card" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                      <option value="" label="Select a Card">Select a Card</option>
                      <option value="-VE" label="-VE" >-VE</option>
                      <option value="+VE" label="+VE" >+VE</option>
                    </Field>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                </div>

              </div>
              <div>
                <div className="w-full  px-3 mb-9 ">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                    CELISA
                  </label>
                  <div className="relative">
                    <Field as="select" name="celisa" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                      <option value="" label="Select a CELISA">Select a CELISA</option>
                      <option value="-VE" label="-VE" >-VE</option>
                      <option value="+VE" label="+VE" >+VE</option>
                    </Field>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                </div>
                <div className="w-full  px-3 mb-9 ">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                    JUDGMENT
                  </label>
                  <div className="relative">
                    <Field as="select" name="judgment" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                      <option value="" label="Select a JUDGMENT">Select a JUDGMENT</option>
                      <option value="-VE" label="-VE" >-VE</option>
                      <option value="+VE" label="+VE" >+VE</option>
                    </Field>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                    Date
                  </label>
                  <Field className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="date" name="date" placeholder="Date" />
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center my-10'>
            <button className='bg-blue-800 text-white bordre-2 px-9 py-4   border-black' type='submit' onClick={Render}>Submit</button>
          </div>

        </Form>
      </Formik>

      {/* <div className='w-full'>


          </div> */}
          </div>

      <List getFormikData={getFormikData} setFormikData={setFormikData} />





    </>

  )

}

export default Entry