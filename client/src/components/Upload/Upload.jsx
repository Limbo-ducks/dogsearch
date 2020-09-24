import React from 'react'
import {app} from './base.js'

const Upload = ({onChange}) => {
    const [fileUrl, setFileUrl] = React.useState('')

    const onFileChange = async (e) => {
        const file = e.target.files[0];
        const storageRef = app.storage().ref()
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file)
        setFileUrl(await fileRef.getDownloadURL())
        onChange(undefined,{value: await fileRef.getDownloadURL()})
    }

    return (
        <div>
            <input type='file' onChange={(e)=>onFileChange(e)}></input>
        </div>
    )
}

export default Upload