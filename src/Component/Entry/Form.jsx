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
      if (list){
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

  return (
    <>
      <div className=" sm:px-0  mx-auto  ">
        <div className="bg-[url('/src/images/moon.jpg')] bg-cover  h-[900px]  ">
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
            <Form  >
              <div className="flex flex-wrap mt-10  justify-center">

                <Field type="text" name="report" placeholder='Report Number' className='border-b outline-none bg-transparent border-[#9A9EA1] text-white  px-6 py-2 mx-3 placeholder:text-center' required />
                <Field type="text" name="order" placeholder='Work Order' className='border-b outline-none bg-transparent border-[#9A9EA1] text-white  px-6 py-2 mx-3 placeholder:text-center' />
                <Field type="text" name="chip" placeholder='Micro chip' className='border-b outline-none bg-transparent border-[#9A9EA1] text-white  px-6 py-2 mx-3 placeholder:text-center' />
                <Field type="text" name="neck" placeholder='Neck' className='border-b outline-none bg-transparent border-[#9A9EA1] text-white  px-6 py-2 mx-3 placeholder:text-center' />


              </div>
              <div className=" grid grid-cols-1  md:grid md:grid-cols-2 mt-10  ">

                <Field type="text" name="camelName" placeholder='camelName' className='border-b outline-none bg-transparent border-[#9A9EA1] text-white   py-2  md:w-2/4 md:mx-44 mx-9 placeholder:text-center' />
                <Field type="text" name="organiztion" placeholder='organiztion' className='border-b outline-none bg-transparent border-[#9A9EA1] text-white  py-2 md:w-2/4 md:mx-3  mx-10 placeholder:text-center' />

              </div>

              <div className="grid grid-cols-1 md:grid md:grid-cols-6 mt-10 my-10 content-center  ">

                {/* first select  */}

                <Field as="select" className="px-4 ml-4 md:ml-0  bg-transparent border-white text-white border "
                  name="bapat"
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

                <Field as="select" className="mx-4  bg-transparent border-white text-white border my-5 md:my-0"
                  name="rivanoi"
                >
                  <option value="" label="Select a RIVANOI" className='bg-black text-white'>
                    Select a RIVANOI
                  </option>
                  <option value="-VE" label="-VE" className='bg-black text-white'>

                    -VE
                  </option>
                  <option value="+VE" label="+VE" className='bg-black text-white'>
                    +VE
                  </option>


                </Field>

                {/* Therd Card  */}

                <Field as="select" className="mx-4  bg-transparent border-white text-white border "
                  name="card"
                >
                  <option value="" label="Select a Card" className='bg-black text-white'>
                    Select a CArd
                  </option>
                  <option value="-VE" label="-VE" className='bg-black text-white'>

                    -VE
                  </option>
                  <option value="+VE" label="+VE" className='bg-black text-white'>
                    +VE
                  </option>


                </Field>


                {/* forth cELISA  */}

                <Field as="select" className="mx-4 bg-transparent border-white text-white border md:my-0 my-5"
                  name="celisa"
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


                {/* fith JUDGMENT  */}

                <Field as="select" className="mx-4 bg-transparent border-white text-white border"
                  name="judgment"
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
                <Field type="Date" name="date" className="mx-4 bg-transparent border-white text-white border md:my-0 my-5" />


              </div>
              <div className='flex items-center justify-center my-10'>
                <button className='bg-blue-800 text-white bordre-2 px-9 py-4   border-black' type='submit' >Submit</button>
              </div>
            </Form>
          </Formik>
          </div>
          {/* <div className='w-full'>


          </div> */}
    
      <List getFormikData={getFormikData} setFormikData={setFormikData} />
  
          
      </div>


    </>

  )

}

export default Entry