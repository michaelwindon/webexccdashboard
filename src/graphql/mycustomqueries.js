export const listManagerModelsQuery = `query MyQuery($listfilter: String!) {
    listManagerModels(filter: {email: {eq:$listfilter }}) {
      items {
        ContactCenters(filter: {_deleted: {ne: true}}) {
          items {
            contactCenterModel {
                ccname
                mainnumber
                ccdescription
                daysopen
                daystodclose
                daystodopen
                defaultroute
                holiday
                holidayoption {
                  msg
                  type
                  value
                }
                id
                isafterhours
                isholiday
                isoverride
                issecondaryclosed
                menu0 {
                  msg
                  type
                  value
                }
                menu0_sp {
                  msg
                  type
                  value
                }
                menu1 {
                  msg
                  type
                  value
                }
                menu1_sp {
                  msg
                  type
                  value
                }
                menu2 {
                  msg
                  type
                  value
                }
                menu2_sp {
                  msg
                  type
                  value
                }
                menu3 {
                  msg
                  type
                  value
                }
                menu3_sp {
                  msg
                  type
                  value
                }
                menu4 {
                  msg
                  type
                  value
                }
                menu4_sp {
                  msg
                  type
                  value
                }
                menu5 {
                  msg
                  type
                  value
                }
                menu5_sp {
                  msg
                  value
                  type
                }
                menu6 {
                  msg
                  type
                  value
                }
                menu6_sp {
                  msg
                  type
                  value
                }
                menu7 {
                  msg
                  type
                  value
                }
                menu7_sp {
                  msg
                  type
                  value
                }
                menu8 {
                  msg
                  type
                  value
                }
                menu8_sp {
                  msg
                  type
                  value
                }
                menu9 {
                  msg
                  type
                  value
                }
                menu9_sp {
                  msg
                  type
                  value
                }
                override {
                  msg
                  type
                  value
                }
                presentlangoption
                secondaryclose {
                  msg
                  type
                  value
                }
                secondarytodclose
                secondarytodopen
                welcomeprompt_sp
                welcomeprompt
                updateduser
                updatedAt
            }
          }
        }
        role
      }
    }
  }
  `

export const adminContactCenterListQuery = `query AdminContactCenterListQuery{
    listContactCenterModels{
      items {
              ccname
              mainnumber
              ccdescription
              daysopen
              daystodclose
              daystodopen
              defaultroute
              holiday
              holidayoption {
                msg
                type
                value
              }
              id
              isafterhours
              isholiday
              isoverride
              issecondaryclosed
              afterhours {
                msg
                type
                value
              }
              menu0 {
                msg
                type
                value
              }
              menu0_sp {
                msg
                type
                value
              }
              menu1 {
                msg
                type
                value
              }
              menu1_sp {
                msg
                type
                value
              }
              menu2 {
                msg
                type
                value
              }
              menu2_sp {
                msg
                type
                value
              }
              menu3 {
                msg
                type
                value
              }
              menu3_sp {
                msg
                type
                value
              }
              menu4 {
                msg
                type
                value
              }
              menu4_sp {
                msg
                type
                value
              }
              menu5 {
                msg
                type
                value
              }
              menu5_sp {
                msg
                value
                type
              }
              menu6 {
                msg
                type
                value
              }
              menu6_sp {
                msg
                type
                value
              }
              menu7 {
                msg
                type
                value
              }
              menu7_sp {
                msg
                type
                value
              }
              menu8 {
                msg
                type
                value
              }
              menu8_sp {
                msg
                type
                value
              }
              menu9 {
                msg
                type
                value
              }
              menu9_sp {
                msg
                type
                value
              }
              override {
                msg
                type
                value
              }
              presentlangoption
              secondaryclose {
                msg
                type
                value
              }
              secondarytodclose
              secondarytodopen
              welcomeprompt_sp
              welcomeprompt
              updateduser
              updatedAt
              submenu0 {
                option0 {
                  msg
                  type
                  value
                }
                option1 {
                  msg
                  type
                  value
                }
                option2 {
                  msg
                  type
                  value
                }
                option3 {
                  value
                  type
                  msg
                }
                option4 {
                  value
                  type
                  msg
                }
                option5 {
                  value
                  type
                  msg
                }
                option6 {
                  value
                  type
                  msg
                }
                option7 {
                  value
                  type
                  msg
                }
                option8 {
                  value
                  type
                  msg
                }
                option9 {
                  value
                  type
                  msg
                }
              }
              submenu0_sp {
                option0 {
                  msg
                  type
                  value
                }
                option1 {
                  msg
                  type
                  value
                }
                option2 {
                  msg
                  type
                  value
                }
                option3 {
                  value
                  type
                  msg
                }
                option4 {
                  value
                  type
                  msg
                }
                option5 {
                  value
                  type
                  msg
                }
                option6 {
                  value
                  type
                  msg
                }
                option7 {
                  value
                  type
                  msg
                }
                option8 {
                  value
                  type
                  msg
                }
                option9 {
                  value
                  type
                  msg
                }
              }
              submenu0_sp {
                option0 {
                  msg
                  type
                  value
                }
                option1 {
                  msg
                  type
                  value
                }
                option2 {
                  msg
                  type
                  value
                }
                option3 {
                  value
                  type
                  msg
                }
                option4 {
                  value
                  type
                  msg
                }
                option5 {
                  value
                  type
                  msg
                }
                option6 {
                  value
                  type
                  msg
                }
                option7 {
                  value
                  type
                  msg
                }
                option8 {
                  value
                  type
                  msg
                }
                option9 {
                  value
                  type
                  msg
                }
              }

              submenu1 {
                option0 {
                  msg
                  type
                  value
                }
                option1 {
                  msg
                  type
                  value
                }
                option2 {
                  msg
                  type
                  value
                }
                option3 {
                  value
                  type
                  msg
                }
                option4 {
                  value
                  type
                  msg
                }
                option5 {
                  value
                  type
                  msg
                }
                option6 {
                  value
                  type
                  msg
                }
                option7 {
                  value
                  type
                  msg
                }
                option8 {
                  value
                  type
                  msg
                }
                option9 {
                  value
                  type
                  msg
                }
              }
              submenu1_sp {
                option0 {
                  msg
                  type
                  value
                }
                option1 {
                  msg
                  type
                  value
                }
                option2 {
                  msg
                  type
                  value
                }
                option3 {
                  value
                  type
                  msg
                }
                option4 {
                  value
                  type
                  msg
                }
                option5 {
                  value
                  type
                  msg
                }
                option6 {
                  value
                  type
                  msg
                }
                option7 {
                  value
                  type
                  msg
                }
                option8 {
                  value
                  type
                  msg
                }
                option9 {
                  value
                  type
                  msg
                }
              }
              submenu2 {
                option0 {
                  msg
                  type
                  value
                }
                option1 {
                  msg
                  type
                  value
                }
                option2 {
                  msg
                  type
                  value
                }
                option3 {
                  value
                  type
                  msg
                }
                option4 {
                  value
                  type
                  msg
                }
                option5 {
                  value
                  type
                  msg
                }
                option6 {
                  value
                  type
                  msg
                }
                option7 {
                  value
                  type
                  msg
                }
                option8 {
                  value
                  type
                  msg
                }
                option9 {
                  value
                  type
                  msg
                }
              }
              submenu2_sp {
                option0 {
                  msg
                  type
                  value
                }
                option1 {
                  msg
                  type
                  value
                }
                option2 {
                  msg
                  type
                  value
                }
                option3 {
                  value
                  type
                  msg
                }
                option4 {
                  value
                  type
                  msg
                }
                option5 {
                  value
                  type
                  msg
                }
                option6 {
                  value
                  type
                  msg
                }
                option7 {
                  value
                  type
                  msg
                }
                option8 {
                  value
                  type
                  msg
                }
                option9 {
                  value
                  type
                  msg
                }
              }
              submenu3 {
                option0 {
                  msg
                  type
                  value
                }
                option1 {
                  msg
                  type
                  value
                }
                option2 {
                  msg
                  type
                  value
                }
                option3 {
                  value
                  type
                  msg
                }
                option4 {
                  value
                  type
                  msg
                }
                option5 {
                  value
                  type
                  msg
                }
                option6 {
                  value
                  type
                  msg
                }
                option7 {
                  value
                  type
                  msg
                }
                option8 {
                  value
                  type
                  msg
                }
                option9 {
                  value
                  type
                  msg
                }
              }
              submenu3_sp {
                option0 {
                  msg
                  type
                  value
                }
                option1 {
                  msg
                  type
                  value
                }
                option2 {
                  msg
                  type
                  value
                }
                option3 {
                  value
                  type
                  msg
                }
                option4 {
                  value
                  type
                  msg
                }
                option5 {
                  value
                  type
                  msg
                }
                option6 {
                  value
                  type
                  msg
                }
                option7 {
                  value
                  type
                  msg
                }
                option8 {
                  value
                  type
                  msg
                }
                option9 {
                  value
                  type
                  msg
                }
              }
              submenu4 {
                option0 {
                  msg
                  type
                  value
                }
                option1 {
                  msg
                  type
                  value
                }
                option2 {
                  msg
                  type
                  value
                }
                option3 {
                  value
                  type
                  msg
                }
                option4 {
                  value
                  type
                  msg
                }
                option5 {
                  value
                  type
                  msg
                }
                option6 {
                  value
                  type
                  msg
                }
                option7 {
                  value
                  type
                  msg
                }
                option8 {
                  value
                  type
                  msg
                }
                option9 {
                  value
                  type
                  msg
                }
              }
              submenu4_sp {
                option0 {
                  msg
                  type
                  value
                }
                option1 {
                  msg
                  type
                  value
                }
                option2 {
                  msg
                  type
                  value
                }
                option3 {
                  value
                  type
                  msg
                }
                option4 {
                  value
                  type
                  msg
                }
                option5 {
                  value
                  type
                  msg
                }
                option6 {
                  value
                  type
                  msg
                }
                option7 {
                  value
                  type
                  msg
                }
                option8 {
                  value
                  type
                  msg
                }
                option9 {
                  value
                  type
                  msg
                }
              }

              submenu5 {
                option0 {
                  msg
                  type
                  value
                }
                option1 {
                  msg
                  type
                  value
                }
                option2 {
                  msg
                  type
                  value
                }
                option3 {
                  value
                  type
                  msg
                }
                option4 {
                  value
                  type
                  msg
                }
                option5 {
                  value
                  type
                  msg
                }
                option6 {
                  value
                  type
                  msg
                }
                option7 {
                  value
                  type
                  msg
                }
                option8 {
                  value
                  type
                  msg
                }
                option9 {
                  value
                  type
                  msg
                }
              }
              submenu5_sp {
                option0 {
                  msg
                  type
                  value
                }
                option1 {
                  msg
                  type
                  value
                }
                option2 {
                  msg
                  type
                  value
                }
                option3 {
                  value
                  type
                  msg
                }
                option4 {
                  value
                  type
                  msg
                }
                option5 {
                  value
                  type
                  msg
                }
                option6 {
                  value
                  type
                  msg
                }
                option7 {
                  value
                  type
                  msg
                }
                option8 {
                  value
                  type
                  msg
                }
                option9 {
                  value
                  type
                  msg
                }
              }
              submenu6 {
                option0 {
                  msg
                  type
                  value
                }
                option1 {
                  msg
                  type
                  value
                }
                option2 {
                  msg
                  type
                  value
                }
                option3 {
                  value
                  type
                  msg
                }
                option4 {
                  value
                  type
                  msg
                }
                option5 {
                  value
                  type
                  msg
                }
                option6 {
                  value
                  type
                  msg
                }
                option7 {
                  value
                  type
                  msg
                }
                option8 {
                  value
                  type
                  msg
                }
                option9 {
                  value
                  type
                  msg
                }
              }
              submenu6_sp {
                option0 {
                  msg
                  type
                  value
                }
                option1 {
                  msg
                  type
                  value
                }
                option2 {
                  msg
                  type
                  value
                }
                option3 {
                  value
                  type
                  msg
                }
                option4 {
                  value
                  type
                  msg
                }
                option5 {
                  value
                  type
                  msg
                }
                option6 {
                  value
                  type
                  msg
                }
                option7 {
                  value
                  type
                  msg
                }
                option8 {
                  value
                  type
                  msg
                }
                option9 {
                  value
                  type
                  msg
                }
              }
              submenu7 {
                option0 {
                  msg
                  type
                  value
                }
                option1 {
                  msg
                  type
                  value
                }
                option2 {
                  msg
                  type
                  value
                }
                option3 {
                  value
                  type
                  msg
                }
                option4 {
                  value
                  type
                  msg
                }
                option5 {
                  value
                  type
                  msg
                }
                option6 {
                  value
                  type
                  msg
                }
                option7 {
                  value
                  type
                  msg
                }
                option8 {
                  value
                  type
                  msg
                }
                option9 {
                  value
                  type
                  msg
                }
              }
              submenu7_sp {
                option0 {
                  msg
                  type
                  value
                }
                option1 {
                  msg
                  type
                  value
                }
                option2 {
                  msg
                  type
                  value
                }
                option3 {
                  value
                  type
                  msg
                }
                option4 {
                  value
                  type
                  msg
                }
                option5 {
                  value
                  type
                  msg
                }
                option6 {
                  value
                  type
                  msg
                }
                option7 {
                  value
                  type
                  msg
                }
                option8 {
                  value
                  type
                  msg
                }
                option9 {
                  value
                  type
                  msg
                }
              }
              submenu8 {
                option0 {
                  msg
                  type
                  value
                }
                option1 {
                  msg
                  type
                  value
                }
                option2 {
                  msg
                  type
                  value
                }
                option3 {
                  value
                  type
                  msg
                }
                option4 {
                  value
                  type
                  msg
                }
                option5 {
                  value
                  type
                  msg
                }
                option6 {
                  value
                  type
                  msg
                }
                option7 {
                  value
                  type
                  msg
                }
                option8 {
                  value
                  type
                  msg
                }
                option9 {
                  value
                  type
                  msg
                }
              }
              submenu8_sp {
                option0 {
                  msg
                  type
                  value
                }
                option1 {
                  msg
                  type
                  value
                }
                option2 {
                  msg
                  type
                  value
                }
                option3 {
                  value
                  type
                  msg
                }
                option4 {
                  value
                  type
                  msg
                }
                option5 {
                  value
                  type
                  msg
                }
                option6 {
                  value
                  type
                  msg
                }
                option7 {
                  value
                  type
                  msg
                }
                option8 {
                  value
                  type
                  msg
                }
                option9 {
                  value
                  type
                  msg
                }
              }
              submenu9 {
                option0 {
                  msg
                  type
                  value
                }
                option1 {
                  msg
                  type
                  value
                }
                option2 {
                  msg
                  type
                  value
                }
                option3 {
                  value
                  type
                  msg
                }
                option4 {
                  value
                  type
                  msg
                }
                option5 {
                  value
                  type
                  msg
                }
                option6 {
                  value
                  type
                  msg
                }
                option7 {
                  value
                  type
                  msg
                }
                option8 {
                  value
                  type
                  msg
                }
                option9 {
                  value
                  type
                  msg
                }
              }
              submenu9_sp {
                option0 {
                  msg
                  type
                  value
                }
                option1 {
                  msg
                  type
                  value
                }
                option2 {
                  msg
                  type
                  value
                }
                option3 {
                  value
                  type
                  msg
                }
                option4 {
                  value
                  type
                  msg
                }
                option5 {
                  value
                  type
                  msg
                }
                option6 {
                  value
                  type
                  msg
                }
                option7 {
                  value
                  type
                  msg
                }
                option8 {
                  value
                  type
                  msg
                }
                option9 {
                  value
                  type
                  msg
                }
              }

            }
        }
    }
  `

export const listManagerIdRoleQuery = `query listManagerIdRole($listfilter: String!) {
    listManagerModels(filter: {email: {contains:$listfilter}}) {
      items {
        role
        id
      }
    }
  }
  `
