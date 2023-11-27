import { useState } from 'react'
import '@fontsource/inter/'
import './App.css'


import { Button } from '@aws-amplify/ui-react';

import {
  ContactCenterUICollection, MyIcon
 } from './ui-components';
 


 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
                          {...((item.menu1.type=='FORWARD') && {type: 'arrow-right'})}
                          {...((item.menu1.type=='MSG') && {type: 'chat'})}
                          {...((item.menu1.type=='QUEUE') && {type: 'group'})}
                          />
                      </>,
                  
                },
                ButtonTwo:{
                  children: <>2
                     <MyIcon 
                          {...((item.menu2.type=='FORWARD') && {type: 'arrow-right'})}
                          {...((item.menu2.type=='MSG') && {type: 'chat'})}
                          {...((item.menu2.type=='QUEUE') && {type: 'group'})}
                          {...((item.menu2.type=='SUBMENU') && {type: 'share'})}
                     />
                 </>
                },
                ButtonThree:{
                  children: <>3
                     <MyIcon 
                          {...((item.menu3.type=='FORWARD') && {type: 'arrow-right'})}
                          {...((item.menu3.type=='MSG') && {type: 'chat'})}
                          {...((item.menu3.type=='QUEUE') && {type: 'group'})}
                     />
                 </>
                },
                ButtonFour:{
                  children: <>4
                     <MyIcon 
                          {...((item.menu4.type=='FORWARD') && {type: 'arrow-right'})}
                          {...((item.menu4.type=='MSG') && {type: 'chat'})}
                          {...((item.menu4.type=='QUEUE') && {type: 'group'})}
                     />
                 </>
                },
                ButtonFive:{
                  children: <>5
                     <MyIcon 
                          {...((item.menu5.type=='FORWARD') && {type: 'arrow-right'})}
                          {...((item.menu5.type=='MSG') && {type: 'chat'})}
                          {...((item.menu5.type=='QUEUE') && {type: 'group'})}
                     />
                 </>
                },
                ButtonSix:{
                  children: <>6
                     <MyIcon 
                          {...((item.menu6.type=='FORWARD') && {type: 'arrow-right'})}
                          {...((item.menu6.type=='MSG') && {type: 'chat'})}
                          {...((item.menu6.type=='QUEUE') && {type: 'group'})}
                     />
                 </>
                },
                ButtonSeven:{
                  children: <>7
                     <MyIcon 
                          {...((item.menu7.type=='FORWARD') && {type: 'arrow-right'})}
                          {...((item.menu7.type=='MSG') && {type: 'chat'})}
                          {...((item.menu7.type=='QUEUE') && {type: 'group'})}
                     />
                 </>
                },
                ButtonEight:{
                  children: <>8
                     <MyIcon 
                          {...((item.menu8.type=='FORWARD') && {type: 'arrow-right'})}
                          {...((item.menu8.type=='MSG') && {type: 'chat'})}
                          {...((item.menu8.type=='QUEUE') && {type: 'group'})}
                     />
                 </>
                },
                ButtonNine:{
                  children: <>2
                     <MyIcon 
                          {...((item.menu9.type=='FORWARD') && {type: 'arrow-right'})}
                          {...((item.menu9.type=='MSG') && {type: 'chat'})}
                          {...((item.menu9.type=='QUEUE') && {type: 'group'})}
                     />
                 </>
                },
                ButtonZero:{
                  children: <>0
                     <MyIcon 
                          {...((item.menu0.type=='FORWARD') && {type: 'arrow-right'})}
                          {...((item.menu0.type=='MSG') && {type: 'chat'})}
                          {...((item.menu0.type=='QUEUE') && {type: 'group'})}
                     />
                 </>
                },
              }
          
            })}
       />
    </>
  )
}

export default App