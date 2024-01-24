import { GroupModelUpdateForm } from '../ui-components'
import { SelectField, Flex, View } from '@aws-amplify/ui-react'

import { GroupModel } from '../models'

import { useEffect, useState } from 'react'
import { DataStore, Predicates, SortDirection } from 'aws-amplify/datastore'
import { ToastContainer, toast } from 'react-toastify'
import { MyIcon } from '../ui-components/'
import 'react-toastify/dist/ReactToastify.css'

const GroupManagement = () => {
    const [data, setData] = useState([])
    const [value, setValue] = useState()
    const [showForm, setShowForm] = useState(false)

    useEffect(() => {
        const getData = async () => {
            const que = await DataStore.query(GroupModel, Predicates.ALL, {
                sort: (s) => s.fullname(SortDirection.ASCENDING),
            })
            setData(que)
        }
        getData()
    }, [value])

    const showToastMessage = (msg, status) => {
        switch (status) {
            case 'success':
                toast.success(msg)
                break

            case 'error':
                toast.error(msg)
                break

            default:
                toast(msg)
                break
        }
    }

    const handleonError = (name) => {
        showToastMessage(`${name} Error Saving!`, 'error')
    }

    const handleonSuccess = (name) => {
        showToastMessage(`${name} Saved Sucessfully!`, 'success')
        setValue(null)
        setShowForm(false)
    }

    return (
        <>
            <Flex direction="row" justifyContent="center">
                <View maxWidth="100%" width="40rem">
                    <h1>Group Management - Update Existing</h1>
                    <SelectField
                        label="Groups"
                        icon={<MyIcon type="group" />}
                        onChange={(e) => {
                            setValue(e.target.value)
                            setShowForm(true)
                        }}
                    >
                        <option key="start" value="">
                            Pick Group to Update
                        </option>
                        {data.map((item, index) => (
                            <option key={index} value={item.id}>
                                {item.fullname}
                            </option>
                        ))}
                    </SelectField>

                    {showForm && (
                        <GroupModelUpdateForm
                            id={value}
                            onError={(fields) => {
                                handleonError(fields.fullname)
                            }}
                            onSuccess={(fields) => {
                                handleonSuccess(fields.fullname)
                            }}
                        />
                    )}
                    <ToastContainer />
                </View>
            </Flex>
        </>
    )
}
export default GroupManagement
