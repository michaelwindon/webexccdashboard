import { useEffect, useState } from 'react'
import '@fontsource/inter/'
import {Hub} from 'aws-amplify/utils'



import { Button } from '@aws-amplify/ui-react';

import {
  ContactCenterUICollection, MyIcon
 } from './ui-components';
 
 import UpdateisOverrideModal from './app-components/UpdateisOverrideModal'; 


 
function App() {
  const [openoverridemodal, setOpenOverrideModal] = useState(false)
  const [id, setId] = useState();
  const [override, setOverride] = useState()

  const handleClickOverrideModalOpen = (id, isoverride) =>{
    setOpenOverrideModal(true)
    setId(id)
    setOverride(isoverride)
}
const handleClickOverrideModalClose =() =>{
    setOpenOverrideModal(false)
    setContactCenterModel()
}
 
  return (
    <> 
       <UpdateisOverrideModal open={openoverridemodal} id={id} override={override} onClose={handleClickOverrideModalClose}/>
       <ContactCenterUICollection 
          overrideItems={({ item, index }) => ({
              overrides: {
                ccmainnumber: {
                  children:
                  <>
                  {item?.mainnumber.replace(/^(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')}
                  </>
                },
                ButtonOne: {
                  children: <>1 
                       <MyIcon 
                          {...((item.menu1?.type=='FORWARD') && {type: 'arrow-right'})}
                          {...((item.menu1?.type=='MSG') && {type: 'chat'})}
                          {...((item.menu1?.type=='QUEUE') && {type: 'group'})}
                          {...((item.menu1?.type=='SUBMENU') && {type: 'share'})}
                          />
                      </>,
                  
                },
                ButtonTwo:{
                  children: <>2
                     <MyIcon 
                          {...((item.menu2?.type=='FORWARD') && {type: 'arrow-right'})}
                          {...((item.menu2?.type=='MSG') && {type: 'chat'})}
                          {...((item.menu2?.type=='QUEUE') && {type: 'group'})}
                          {...((item.menu2?.type=='SUBMENU') && {type: 'share'})}
                     />
                 </>
                },
                ButtonThree:{
                  children: <>3
                     <MyIcon 
                          {...((item.menu3?.type=='FORWARD') && {type: 'arrow-right'})}
                          {...((item.menu3?.type=='MSG') && {type: 'chat'})}
                          {...((item.menu3?.type=='QUEUE') && {type: 'group'})}
                          {...((item.menu3?.type=='SUBMENU') && {type: 'share'})}
                     />
                 </>
                },
                ButtonFour:{
                  children: <>4
                     <MyIcon 
                          {...((item.menu4?.type=='FORWARD') && {type: 'arrow-right'})}
                          {...((item.menu4?.type=='MSG') && {type: 'chat'})}
                          {...((item.menu4?.type=='QUEUE') && {type: 'group'})}
                          {...((item.menu4?.type=='SUBMENU') && {type: 'share'})}
                     />
                 </>
                },
                ButtonFive:{
                  children: <>5
                     <MyIcon 
                          {...((item.menu5?.type=='FORWARD') && {type: 'arrow-right'})}
                          {...((item.menu5?.type=='MSG') && {type: 'chat'})}
                          {...((item.menu5?.type=='QUEUE') && {type: 'group'})}
                          {...((item.menu5?.type=='SUBMENU') && {type: 'share'})}
                     />
                 </>
                },
                ButtonSix:{
                  children: <>6
                     <MyIcon 
                          {...((item.menu6?.type=='FORWARD') && {type: 'arrow-right'})}
                          {...((item.menu6?.type=='MSG') && {type: 'chat'})}
                          {...((item.menu6?.type=='QUEUE') && {type: 'group'})}
                          {...((item.menu6?.type=='SUBMENU') && {type: 'share'})}
                     />
                 </>
                },
                ButtonSeven:{
                  children: <>7
                     <MyIcon 
                          {...((item.menu7?.type=='FORWARD') && {type: 'arrow-right'})}
                          {...((item.menu7?.type=='MSG') && {type: 'chat'})}
                          {...((item.menu7?.type=='QUEUE') && {type: 'group'})}
                          {...((item.menu7?.type=='SUBMENU') && {type: 'share'})}
                     />
                 </>
                },
                ButtonEight:{
                  children: <>8
                     <MyIcon 
                          {...((item.menu8?.type=='FORWARD') && {type: 'arrow-right'})}
                          {...((item.menu8?.type=='MSG') && {type: 'chat'})}
                          {...((item.menu8?.type=='QUEUE') && {type: 'group'})}
                          {...((item.menu8?.type=='SUBMENU') && {type: 'share'})}
                     />
                 </>
                },
                ButtonNine:{
                  children: <>2
                     <MyIcon 
                          {...((item.menu9?.type=='FORWARD') && {type: 'arrow-right'})}
                          {...((item.menu9?.type=='MSG') && {type: 'chat'})}
                          {...((item.menu9?.type=='QUEUE') && {type: 'group'})}
                          {...((item.menu9?.type=='SUBMENU') && {type: 'share'})}
                     />
                 </>
                },
                ButtonZero:{
                  children: <>0
                     <MyIcon 
                          {...((item.menu0?.type=='FORWARD') && {type: 'arrow-right'})}
                          {...((item.menu0?.type=='MSG') && {type: 'chat'})}
                          {...((item.menu0?.type=='QUEUE') && {type: 'group'})}
                          {...((item.menu0?.type=='SUBMENU') && {type: 'share'})}
                     />
                 </>
                },
                SwitchField:{
                  onClick: () => { 
                      handleClickOverrideModalOpen(item.id, item.isoverride) 
                  }
                },
                ButtonOverride:{
                   children: <> Override
                       <MyIcon 
                          {...((item.override?.type =='FORWARD') && {type: 'arrow-right'})}
                          {...((item.override?.type =='MSG') && {type: 'chat'})}
                          {...((item.override?.type =='QUEUE') && {type: 'group'})}
                          {...((item.override?.type =='SUBMENU') && {type: 'share'})}
                          />
                      </>,
                },
                ButtonAfterhours:{
                  children: <> Afterhours
                      <MyIcon 
                         {...((item.afterhours?.type =='FORWARD') && {type: 'arrow-right'})}
                         {...((item.afterhours?.type =='MSG') && {type: 'chat'})}
                         {...((item.afterhours?.type =='QUEUE') && {type: 'group'})}
                         {...((item.afterhours?.type =='SUBMENU') && {type: 'share'})}
                         />
                     </>,
               },
               ButtonHoliday:{
                children: <> Holiday
                    <MyIcon 
                       {...((item.holidayoption?.type =='FORWARD') && {type: 'arrow-right'})}
                       {...((item.holidayoption?.type =='MSG') && {type: 'chat'})}
                       {...((item.holidayoption?.type =='QUEUE') && {type: 'group'})}
                       {...((item.holidayoption?.type =='SUBMENU') && {type: 'share'})}
                       />
                   </>,
                  }
              }
          
            })}
       />
    </>
  )
}

export default App