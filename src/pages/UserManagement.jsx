import { ManagerModelUpdateForm } from '../ui-components'
import { SelectField, Flex, View } from '@aws-amplify/ui-react'
import { ManagerModel } from '../models'
import { useEffect, useState } from 'react'
import { DataStore, Predicates, SortDirection } from 'aws-amplify/datastore'
import { ToastContainer, toast } from 'react-toastify'
import { MyIcon } from '../ui-components/'

import 'react-toastify/dist/ReactToastify.css'

const UserManagement = () => {
    const [data, setData] = useState([])
    const [value, setValue] = useState()
    const [showForm, setShowForm] = useState(false)

    useEffect(() => {
        const getData = async () => {
            const que = await DataStore.query(ManagerModel, Predicates.ALL, {
                sort: (s) => s.name(SortDirection.ASCENDING),
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
                    <h1>Update Managers</h1>
                    <SelectField
                        label="Managers"
                        icon={<MyIcon type="group" />}
                        onChange={(e) => {
                            setValue(e.target.value)
                            setShowForm(true)
                        }}
                    >
                        <option key="start" value="">
                            Pick Manager to Update
                        </option>
                        {data.map((item, index) => (
                            <option key={index} value={item.id}>
                                {item.name}
                            </option>
                        ))}
                    </SelectField>

                    {showForm && (
                        <ManagerModelUpdateForm
                            id={value}
                            onError={(fields) => {
                                handleonError(fields.name)
                            }}
                            onSuccess={(fields) => {
                                handleonSuccess(fields.name)
                            }}
                        />
                    )}
                    <ToastContainer />
                </View>
            </Flex>
        </>
    )
}
export default UserManagement
