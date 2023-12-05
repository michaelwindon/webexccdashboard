import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

const DisplayCenterStatus = (props) => {
    const { contactcenter } = props
    const [contactCenterStatus, setcontactCenterStatus] = useState('N/A')

    const isContactCenterOpen = (
        openTimes = contactcenter.daystodopen,
        closedTimes = contactcenter.daystodclose,
        secClosedTimes = contactcenter.secondarytodclose,
        secOpenTimes = contactcenter.secondarytodopen,
        daysOpen = contactcenter.daysopen
    ) => {
        const today = new Date()
        const currentDay = today
            .toLocaleString('en-US', { weekday: 'short' })
            .toUpperCase()
        const currentTime = today.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        })

        const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
        const dayIndex = daysOfWeek.indexOf(currentDay)

        if (dayIndex === -1) {
            console.log(`${contactcenter.ccname} is closed due to business day`)
            return 'CLOSED' // Contact center is closed on the current day
        }

        const curreTimeobj = new Date(`01/01/1970 ${currentTime}`)
        const openTime = new Date(
            `01/01/1970 ${contactcenter.daystodopen[dayIndex]}`
        ).getTime()
        const closeTime = new Date(
            `01/01/1970 ${closedTimes[dayIndex]}`
        ).getTime()
        const secCloseTime = new Date(
            `01/01/1970 ${secClosedTimes[dayIndex]}`
        ).getTime()
        const secOpenTime = new Date(
            `01/01/1970 ${secOpenTimes[dayIndex]}`
        ).getTime()
        const currentTimeMillis = new Date(
            `01/01/1970 ${currentTime}`
        ).getTime()

        const stropenTime = new Date(openTime)
        const fromatedopenTime = stropenTime.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        })

        const strcloseTime = new Date(closeTime)
        const formatecloseTime = strcloseTime.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        })

        const strsecCloseTime = new Date(secCloseTime)
        const formatesecCloseTime = strsecCloseTime.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        })

        const strsecOpenTime = new Date(secOpenTime)
        const formatesecOpenTime = strsecOpenTime.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        })

        console.log(
            `Current Time: ${currentTime} | Weekday: ${currentDay} | Business Hours: ${fromatedopenTime} - ${formatecloseTime} | Lunch Time ${formatesecCloseTime} - ${formatesecOpenTime} for ${contactcenter.ccname} `
        )
        if (
            isNaN(openTime) ||
            openTime === new Date('Invalid Date').getTime() ||
            isNaN(closeTime) ||
            closeTime === new Date('Invalid Date').getTime()
        ) {
            return 'CLOSED' // Return 'CLOSED' if any of the times are invalid
        }

        if (currentTimeMillis < openTime || currentTimeMillis >= closeTime) {
            return 'CLOSED' // Before opening time or after closing time
        }

        // Check if it's during the lunch break
        if (
            currentTimeMillis >= secCloseTime &&
            currentTimeMillis < secOpenTime
        ) {
            return 'CLOSED' // During the lunch break
        }
        return 'OPEN' // Contact center is open
    }

    useEffect(() => {
        setcontactCenterStatus(isContactCenterOpen)
    }, [contactcenter])

    return <>{contactCenterStatus}</>
}
DisplayCenterStatus.propTypes = {}
export default DisplayCenterStatus
