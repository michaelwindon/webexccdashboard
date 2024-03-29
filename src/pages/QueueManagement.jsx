import { QueueModelUpdateForm } from '../ui-components'
import { SelectField } from '@aws-amplify/ui-react'

import { QueueModel } from '../models'

import { useEffect, useState } from 'react'
import { DataStore, Predicates, SortDirection } from 'aws-amplify/datastore'
import { ToastContainer, toast } from 'react-toastify'
import { MyIcon } from '../ui-components/'
import 'react-toastify/dist/ReactToastify.css'

const QueueManagement = () => {
    const [data, setData] = useState([])
    const [value, setValue] = useState()
    const [showForm, setShowForm] = useState(false)

    useEffect(() => {
        const getData = async () => {
            const que = await DataStore.query(QueueModel, Predicates.ALL, {
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
            <h1>Queue Management - Update Existing</h1>

            <SelectField
                label="Queues"
                icon={<MyIcon type="group" />}
                onChange={(e) => {
                    setValue(e.target.value)
                    setShowForm(true)
                }}
            >
                <option key="start" value="">
                    Pick Queue to Update
                </option>
                {data.map((item, index) => (
                    <option key={index} value={item.id}>
                        {item.name}
                    </option>
                ))}
            </SelectField>
            Queues Count: {data.length}
            
            {showForm && (
                <QueueModelUpdateForm
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
        </>
    )
}
export default QueueManagement
